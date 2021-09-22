import Image from "next/image";
import { TitleField, ImageField, RichTextField } from "@prismicio/types";
import PrismicDOM from "prismic-dom";
import BaseSlide, { IBaseSlide } from "..";
import LogoAndTitle from "@app/components/Shared/LogoAndTitle";
import styles from "./TeamSlide.module.scss";

interface TeamMember {
    team_member_thumbnail: ImageField;
    team_member_name: TitleField;
    team_member_title: RichTextField;
    team_member_phone: RichTextField;
    team_member_email: RichTextField;
}

export interface ITeamSlide extends IBaseSlide {
    slide_title: TitleField;
    team: TeamMember[];
}

interface TeamSlideProps {
    content: ITeamSlide;
}

/**
 * The text slide component
 */
export default function TeamSlide(props: TeamSlideProps): JSX.Element {
    /**
     *
     * @param field
     * @returns
     */
    function toText(field: RichTextField): string {
        return PrismicDOM.RichText.asText(field);
    }

    return (
        <BaseSlide content={props.content} className={styles.teamSlide}>
            <div className={styles.content}>
                <LogoAndTitle title={props.content.slide_title[0].text} />

                <section className={styles.team}>
                    {props.content.team.length > 0 &&
                        props.content.team.map(x => (
                            <div className={styles.member} key={x.team_member_name[0].text}>
                                <div className={styles.thumbnail}>
                                    <Image
                                        width={75}
                                        height={75}
                                        src={x.team_member_thumbnail.url!}
                                        alt={x.team_member_thumbnail.alt!}
                                    />
                                </div>

                                <div className={styles.info}>
                                    <h3>{toText(x.team_member_name)}</h3>

                                    <p className="subtitle-small">{toText(x.team_member_title)}</p>

                                    <a href={`mailto:${toText(x.team_member_email)}`}>
                                        {toText(x.team_member_email)}
                                    </a>

                                    <span>{toText(x.team_member_phone)}</span>
                                </div>
                            </div>
                        ))}
                </section>
            </div>
        </BaseSlide>
    );
}