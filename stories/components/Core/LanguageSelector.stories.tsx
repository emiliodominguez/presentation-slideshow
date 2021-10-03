import { VFC } from "react";
import { Meta } from "@storybook/react";
import LanguageSelector from "@app/components/LanguageSelector";

export default {
    component: LanguageSelector,
    title: "Components/Core/LanguageSelector"
} as Meta;

export const LanguageSelectorStory: VFC<{}> = () => <LanguageSelector />;
