import Title from "@/app/components/Title"
import {getPopularMovies} from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

export const revalidate = 60;

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