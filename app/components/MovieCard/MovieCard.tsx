/* eslint-disable @next/next/no-img-element */
import { MovieCardType } from "@/app/types/MovieCard/MovieCardTypes";

const MovieCard = ({
  backdrop_path,
  title,
  first_air_date,
  vote,
  release_date,
  poster_path,
  name,
}: MovieCardType) => {
  const img_200 = "https://image.tmdb.org/t/p/w200";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
  return (
    <div key={title} className="h-full relative w-56">
      <img
        src={poster_path ? `${img_200}${poster_path}` : unavailable}
        alt={title ? title : name}
        width={220}
        height={330}
        className="relative"
      />
      <div>
        <p className=" font-bold">{title ? title : name}</p>
        <span>{release_date ? release_date : first_air_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
