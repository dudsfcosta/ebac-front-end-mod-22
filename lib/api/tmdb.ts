import tmdbApi from "@/lib/api/axios";
import {Filme} from "@/types/types";


type Data = {

    results : Filme[]
}
export const getTrendingMovies = async () => {

    const res = await tmdbApi.get<Data>("/trending/movie/week");
    return res.data.results;
}

export const getMovieDetails = async (id : number) : Promise<Filme | undefined> => {

    const res = await tmdbApi.get<Filme>(`/movie/${id}`);
    return res.data;
}

export const getNowPlaying = async () => {

    const res = await tmdbApi.get<Data>("/movie/now_playing");
    return res.data.results;
}

export const getPopularMovies = async () => {

    const res = await tmdbApi.get<Data>("/movie/popular");
    return res.data.results;
}

export const getTopMovies = async () => {

    const res = await tmdbApi.get<Data>("/movie/top_rated");
    return res.data.results;
}