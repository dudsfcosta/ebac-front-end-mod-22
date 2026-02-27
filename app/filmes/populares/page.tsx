import Title from "@/app/components/Title"
import {getPopularMovies} from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

const FilmesPopulares = async () => {

    const filmes = await getPopularMovies();
    return (
        <>
            <Title title="Popular"/>
            <Grid filmes={filmes}/>
        </>
    )
}

export default FilmesPopulares;