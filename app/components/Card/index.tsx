import {Filme} from "@/types/types";
type Props = {

    filme: Filme;
}
const Card = ({filme} : Props) => {

    const {id, title, image, description} = filme;
    return (

        <div key={id} className="card">
            <img src={image} alt={`poster do filme ${title}`} width={300} height={200} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default Card