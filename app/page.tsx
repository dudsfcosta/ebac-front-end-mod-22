import Title from "@/app/components/Title";
import Grid from "@/app/components/Grid";
import {filmes} from "@/filmes";

export default function Home() {
  return (
      <>
          <Title title="Filmes em destaque" />
          <Grid filmes={filmes}></Grid>
      </>
  );
}
