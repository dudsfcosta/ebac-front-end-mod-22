import {filmes} from "@/filmes";
import Link from "next/link";
import styles from "./DetalheFilme.module.css"

type Props = {
    params : Promise<{
        id: number
    }>
}

const DetalheFilme = async ({params} : Props) => {
    const { id } = await params;
    const details = filmes.find(filme => filme.id == id);
    const {title, image, description} = details;

    return (
     <>
         <div className={styles.detalhes}>
             <div>
                <Link className={styles.detalhes__voltar} href={`/`}>Voltar</Link>
                <section>
                    <figure>
                        <img className={styles.detalhes__image} src={image} alt={`imagem do filme "${title}"`} />
                    </figure>
                    <article className={styles.detalhes__info}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </article>
                </section>
             </div>
         </div>
     </>
    )
}

export default DetalheFilme;