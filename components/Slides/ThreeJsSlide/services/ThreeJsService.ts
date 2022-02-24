// #region Imports
import { WebGLRenderer, WebGLRendererParameters, Scene, Camera, TextureLoader, Clock, LoadingManager } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "dat.gui";
import { RendererSize } from "../interfaces/RendererSize.model";
import { AnyCamera } from "../types/AnyCamera";
import { AnyLight } from "../types/AnyLight";
import { isBrowser } from "@app/shared/helpers/common";
//#endregion

export default class ThreeJsService {
    // #region Private properties
    private _renderer!: WebGLRenderer;

    private _datGUI: GUI | undefined;

    private _clock: Clock | undefined;

    private _loadingManager: LoadingManager | undefined;

    private _textureLoader: TextureLoader | undefined;

    private _objLoader: OBJLoader | undefined;

    private _mtlLoader: MTLLoader | undefined;

    private _gltfLoader: GLTFLoader | undefined;

    private readonly scenes: Map<string, Scene>;

    private readonly cameras: Map<string, AnyCamera>;

    private readonly lights: Map<string, AnyLight>;
    // #endregion

    // #region Getters
    get renderer(): WebGLRenderer {
        if (!this._renderer) throw new Error("Renderer wasn't initialized");
        return this._renderer;
    }

    get datGUI(): GUI {
        if (!this._datGUI) this._datGUI = new GUI();
        return this._datGUI;
    }

    get clock(): Clock {
        if (!this._clock) this._clock = new Clock();
        return this._clock;
    }

    get loadingManager(): LoadingManager {
        if (!this._loadingManager) this._loadingManager = new LoadingManager();
        return this._loadingManager;
    }

    get textureLoader(): TextureLoader {
        if (!this._textureLoader) this._textureLoader = new TextureLoader(this.loadingManager);
        return this._textureLoader;
    }

    get objLoader(): OBJLoader {
        if (!this._objLoader) this._objLoader = new OBJLoader(this.loadingManager);
        return this._objLoader;
    }

    get mtlLoader(): MTLLoader {
        if (!this._mtlLoader) this._mtlLoader = new MTLLoader(this.loadingManager);
        return this._mtlLoader;
    }

    get gltfLoader(): GLTFLoader {
        if (!this._gltfLoader) this._gltfLoader = new GLTFLoader(this.loadingManager);
        return this._gltfLoader;
    }
    // #endregion

    // #region Constructor
    constructor(private readonly size?: RendererSize) {
        this.scenes = new Map<string, Scene>();
        this.cameras = new Map<string, AnyCamera>();
        this.lights = new Map<string, AnyLight>();
    }
    // #endregion

    // #region Core

    /**
     * Sets the renderer and its initial configuration
     * @param parameters - The renderer size
     * @param pixelRatio - the renderer pixel ratio (optional)
     */
    init(parameters: WebGLRendererParameters, pixelRatio?: number): void {
        if (!isBrowser()) return;

        const renderer = new WebGLRenderer(parameters);
        const width = this.size?.width ?? window.innerWidth;
        const height = this.size?.height ?? window.innerHeight;

        renderer.setSize(width, height);
        renderer.setPixelRatio(pixelRatio ?? Math.min(window.devicePixelRatio, 2));

        if (!parameters.canvas) document.body.append(renderer.domElement);

        this._renderer = renderer;
    }

    /**
     * Clears all renderer content and removes event listeners
     */
    cleanup(): void {
        this._renderer.clear();
        this.clearScenes();
        this.clearCameras();
        this.clearLights();
    }

    /**
     * Sets the camera controls
     * @param camera - The camera
     * @returns The controls object
     */
    setControls(camera: Camera): OrbitControls {
        const controls = new OrbitControls(camera, this._renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        return controls;
    }

    //#endregion

    // #region Scenes

    /**
     * Sets a scene
     * @param id - The scene ID
     * @returns The scene
     */
    setScene(id: string): Scene {
        const scene = new Scene();
        this.scenes.set(id, scene);
        return scene;
    }

    /**
     * Gets a scene
     * @param id - The scene ID
     * @returns The scene
     */
    getScene(id: string): Scene | undefined {
        return this.scenes.get(id);
    }

    /**
     * Removes a scene
     * @param id - The scene ID
     * @returns The scene
     */
    removeScene(id: string): void {
        this.scenes.delete(id);
    }

    /**
     * Clears all scenes
     */
    clearScenes(): void {
        this.scenes.clear();
    }

    // #endregion

    // #region Cameras

    /**
     * Sets a camera
     * @param id - The camera ID
     * @param camera - The camera type
     * @returns The camera
     */
    setCamera(id: string, camera: AnyCamera): AnyCamera {
        this.cameras.set(id, camera);
        return camera;
    }

    /**
     * Gets a camera
     * @param id - The camera ID
     * @returns The camera
     */
    getCamera(id: string): AnyCamera | undefined {
        return this.cameras.get(id);
    }

    /**
     * Removes a camera
     * @param id - The camera ID
     * @returns The camera
     */
    removeCamera(id: string): void {
        this.cameras.delete(id);
    }

    /**
     * Clears all cameras
     */
    clearCameras(): void {
        this.cameras.clear();
    }

    // #endregion

    // #region Lights

    /**
     * Sets a light
     * @param id - The light ID
     * @param light - The light type
     * @returns The light
     */
    setLight(id: string, light: AnyLight): AnyLight {
        this.lights.set(id, light);
        return light;
    }

    /**
     * Gets a light
     * @param id - The light ID
     * @returns The light
     */
    getLight(id: string): AnyLight | undefined {
        return this.lights.get(id);
    }

    /**
     * Removes a light
     * @param id - The light ID
     * @returns The light
     */
    removeLight(id: string): void {
        this.lights.delete(id);
    }

    /**
     * Clears all lights
     */
    clearLights(): void {
        this.lights.clear();
    }

    // #endregion

    // #region Animation

    /**
     * Animates a scene
     * @param scene - The scene
     * @param camera - The camera
     * @param callback - The animation callback
     */
    animate(scene: Scene, camera: Camera, callback: () => void): void {
        callback();
        this._renderer.render(scene, camera);
        requestAnimationFrame(() => this.animate(scene, camera, callback));
    }

    // #endregion
}
