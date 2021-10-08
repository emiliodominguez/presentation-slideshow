import { VFC } from "react";
import { Meta } from "@storybook/react";
import MapSlide, { MapSlideProps } from "@app/components/Slides/MapSlide";

export default {
    component: MapSlide,
    title: "Slides/MapSlide",
    argTypes: {
        content: {
            description: "The slide content"
        }
    }
} as Meta;

const exampleData = {
    dark_theme_enabled: true,
    slide_navigation_id: [
        {
            type: "heading4",
            text: "Map slide"
        }
    ],
    slide_map: "Dark",
    locations: [
        {
            location_name: [
                {
                    type: "heading3",
                    text: "Location 1"
                }
            ],
            location_description: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium autem dolores voluptatem. Illo soluta sed excepturi rerum eum eos, ex quisquam? Commodi quae perspiciatis reiciendis quidem. Dolores numquam nihil maxime veritatis omnis temporibus sunt impedit id enim beatae, aliquid eveniet, consequuntur quibusdam qui. Voluptate cum aspernatur sit veritatis numquam."
                }
            ],
            location_latitude: -32.95708706951853,
            location_longitude: -60.694581176831065
        },
        {
            location_name: [
                {
                    type: "heading3",
                    text: "Location 2"
                }
            ],
            location_description: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium autem dolores voluptatem. Illo soluta sed excepturi rerum eum eos, ex quisquam? Commodi quae perspiciatis reiciendis quidem. Dolores numquam nihil maxime veritatis omnis temporibus sunt impedit id enim beatae, aliquid eveniet, consequuntur quibusdam qui. Voluptate cum aspernatur sit veritatis numquam."
                }
            ],
            location_latitude: 40.73061,
            location_longitude: -73.935242
        },
        {
            location_name: [
                {
                    type: "heading3",
                    text: "Location 3"
                }
            ],
            location_description: [
                {
                    type: "paragraph",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt praesentium autem dolores voluptatem. Illo soluta sed excepturi rerum eum eos, ex quisquam? Commodi quae perspiciatis reiciendis quidem. Dolores numquam nihil maxime veritatis omnis temporibus sunt impedit id enim beatae, aliquid eveniet, consequuntur quibusdam qui. Voluptate cum aspernatur sit veritatis numquam."
                }
            ],
            location_latitude: 41.902782,
            location_longitude: 12.496366
        }
    ]
};

export const MapSlideStory: VFC<MapSlideProps> = () => <MapSlide content={exampleData as any} />;
