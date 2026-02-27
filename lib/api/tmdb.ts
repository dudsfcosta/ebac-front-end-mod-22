import tmdbApi from "@/lib/api/axios";
import {Filme} from "@/types/types";


type Data = {

    results : Filme[]
}
export const getTrendingMovies = async () => {

    const res = await tmdbApi.get<Data>("/trending/movie/week");
    return res.data.results;
}