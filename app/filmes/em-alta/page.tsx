import Title from "@/app/components/Title"
import {getNowPlaying} from "@/lib/api/tmdb";
import Grid from "@/app/components/Grid";

export const dynamic = 'force-dynamic';

const FilmesEmAlta = async () => {

    const filmes = await getNowPlaying();
    return (
        <>
            <Title title="Trending"/>
            <Grid filmes={filmes}/>
        </>
    )
}

export default FilmesEmAlta;