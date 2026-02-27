import {Filme} from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {

    filme: Filme;
}
const Card = ({filme} : Props) => {

    const {id, title, poster_path, overview} = filme;
    return (

        <div key={id} className={styles.card}>
            <Link href={`/filmes/${id}`}>
                <img className={styles.card__poster} src={poster_path} alt={`poster do filme ${title}`} width={300} height={200} />
                <div>
                    <h3 className={styles.card__title}>{title}</h3>
                    <p className={styles.card__description}>{overview}</p>
                </div>
            </Link>
        </div>
    );
}
export default Card