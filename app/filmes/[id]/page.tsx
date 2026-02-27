import Link from "next/link";
import styles from "./DetalheFilme.module.css"
import {getMovieDetails} from "@/lib/api/tmdb";

type Props = {
    params : Promise<{
        id: number
        title: string
        poster_path: string
        overview: string
    }>
}

const DetalheFilme = async ({params} : Props) => {
    const { id } = await params;
    const details = await getMovieDetails(id);
    // @ts-expect-error IDE finds error, but code works properly
    const {title, poster_path, overview} = details;

    return (
     <>
         <div className={styles.detalhes}>
             <div>
                <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                <section>
                    <figure>
                        <img className={styles.detalhes__image}
                             src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                             alt={`imagem do filme "${title}"`} />
                    </figure>
                    <article className={styles.detalhes__info}>
                        <h2>{title}</h2>
                        <p>{overview}</p>
                    </article>
                </section>
             </div>
         </div>
     </>
    )
}

export default DetalheFilme;