import {Filme} from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    filme: Filme;
}
const Card = ({filme} : Props) => {

    const {id, title, poster_path, overview, vote_average} = filme;
    const resume = overview?.length >= 256?`${overview.substring(0, 253)}...`:overview;
    return (

        <div key={id} className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <img className={styles.card__poster}
                     src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                     alt={`poster do filme ${title}`}/>
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__description}>{resume}</p>
                    <p></p>
                    <p className={styles.card__description}>Rating: {vote_average}</p>
                </div>
            </Link>
        </div>
    );
}
export default Card