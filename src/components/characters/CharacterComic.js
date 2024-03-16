import { useFormattedDate } from "../../hooks/useFormattedDate";
import styles from "./CharacterComic.module.css";

export const CharacterComic = ({ comic }) => {
    const { path, extension } = comic.thumbnail;
    const urlImage = `${path}.${extension}`;
    const date = new Date(comic.dates.find(d => d.type === 'onsaleDate').date);
    const formattedDate = useFormattedDate(date, 'year');

    return (
        <>
            <img className={styles.image} src={urlImage} alt=""></img>
            <div className={styles.infoContainer}>
                <div className={styles.titleContainer}><h4>{comic.title}</h4></div>
                <span className={styles.date}>{formattedDate}</span>
            </div>
        </>
    )
}