import Title from "@/app/components/Title"
import {getTopMovies} from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

const TopFilmes = async () => {

    const filmes = await getTopMovies();
    return (
        <>
            <Title title="Top Movies"/>
            <Grid filmes={filmes}/>
        </>
    )
}

export default TopFilmes;