import { ReactElement, useEffect, useRef, UIEvent, useState } from "react";
import { PerspectiveCamera, AnimationMixer, PointLight } from "three";
import PrismicDOM from "prismic-dom";
import ThreeJsService from "./services/ThreeJsService";
import useEventListener from "@app/hooks/useEventListener";
import { RendererSize } from "./interfaces/RendererSize.model";
import { ThreeJsSlideProps } from "./interfaces/ThreeJsSlide.model";
import styles from "./ThreeJsSlide.module.scss";

const timeoutDelay = 200;

/**
 * A slide with 3D content
 */
export default function ThreeJsSlide(props: ThreeJsSlideProps): ReactElement {
    const [loadingProgress, setLoadingProgress] = useState<number>(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const resizeTimeoutRef = useRef<number | undefined>(undefined);
    const rendererSize = useRef<RendererSize>({ width: window.innerWidth, height: window.innerHeight });
    const threeJsServiceRef = useRef<ThreeJsService>(new ThreeJsService(rendererSize.current));

    /**
     * The resize event handler
     * @param e - The resize event
     */
    function handleResize(_e: UIEvent): void {
        if (!threeJsServiceRef.current) return;

        clearTimeout(resizeTimeoutRef.current);

        resizeTimeoutRef.current = window.setTimeout(() => {
            const camera = threeJsServiceRef.current.getCamera("camera") as PerspectiveCamera;

            rendererSize.current.width = window.innerWidth;
            rendererSize.current.height = window.innerHeight;

            threeJsServiceRef.current.renderer.setSize(rendererSize.current.width, rendererSize.current.height);

            camera.aspect = rendererSize.current.width / rendererSize.current.height;
            camera.updateProjectionMatrix();
        }, timeoutDelay);
    }

    // Main scene configuration
    useEffect(() => {
        const { width, height } = rendererSize.current;
        const threeJsService = threeJsServiceRef.current;

        threeJsService.init({ canvas: canvasRef.current!, antialias: true });

        // Scene
        const scene = threeJsService.setScene("scene");

        // Camera
        const camera = threeJsService.setCamera("camera", new PerspectiveCamera(55, width / height, 0.1, 1000)) as PerspectiveCamera;

        camera.position.set(0.85, 2, 3.5);
        scene.add(camera);

        // 3D model
        const modelsPath = "assets/threejs_slide/models/";
        const clock = threeJsService.clock;
        let mixer: AnimationMixer;

        // Loading manager configuration
        threeJsService.loadingManager.onProgress = (_url, loaded, total) => {
            setLoadingProgress(loaded / total);
        };

        // Models load
        threeJsService.gltfLoader.load(modelsPath + "garage/scene.gltf", garageGltf => {
            scene.add(garageGltf.scene);

            threeJsService.gltfLoader.load(modelsPath + "rick/scene.gltf", rickGltf => {
                rickGltf.scene.position.set(1.1, 0, 2);
                rickGltf.scene.rotation.set(0, -0.5, 0);
                rickGltf.scene.scale.set(0.4, 0.4, 0.4);

                garageGltf.scene.add(rickGltf.scene);

                // Animation
                mixer = new AnimationMixer(rickGltf.scene);
                rickGltf.animations.forEach(clip => mixer!.clipAction(clip).play());

                // Lights
                const white1 = threeJsService.setLight("white-1", new PointLight(0xffffff, 1));
                white1.lookAt(rickGltf.scene.position);
                white1.position.set(-3, 10, 10);

                const backLight = threeJsService.setLight("back", new PointLight(0xffffff, 0.75));
                backLight.lookAt(rickGltf.scene.position);
                backLight.position.set(5, 15, -15);

                rickGltf.scene.add(white1, backLight);
            });
        });

        // Render
        threeJsService.animate(scene, camera, () => {
            if (!mixer) return;
            const delta = clock.getDelta();
            mixer.update(delta);
        });

        // Controls
        threeJsService.setControls(camera);

        // Cleanup
        return () => {
            threeJsService.cleanup();
            canvasRef.current = null;
            threeJsServiceRef.current = null as any;
            clearTimeout(resizeTimeoutRef.current);
        };
    }, []);

    // Event listeners setup
    useEventListener("resize", handleResize);

    return (
        <div className={styles.content}>
            <canvas ref={canvasRef} />

            {loadingProgress === 1 ? (
                <div className={styles.textBlock}>
                    <h2 className="title-medium">{props.content.slide_title[0].text}</h2>

                    <div
                        className="body-text"
                        dangerouslySetInnerHTML={{
                            __html: PrismicDOM.RichText.asHtml(props.content.slide_excerpt)
                        }}
                    />
                </div>
            ) : (
                <div className={styles.spinner} />
            )}
        </div>
    );
}
