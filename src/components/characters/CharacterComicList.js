import { CharacterComic } from './CharacterComic'
import styles from './CharacterComicList.module.css';

export const CharacterComicList = ({ comics }) => {

    return (
        <div className={styles.container}>
            <h2>Comics</h2>
            <div className={styles.comicsContainer}>
                {
                    comics.map((comic, index) => {
                        return (
                            <div key={index} className={styles.card}>
                                <CharacterComic comic={comic} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}