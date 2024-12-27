export default function MovieCard({ movie }) {
    return (
      <div className="bg-black border border-gold rounded-md p-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md"
        />
        <h3 className="text-gold text-lg mt-2">{movie.title}</h3>
        <p className="text-gray-400">{movie.release_date}</p>
      </div>
    );
  }
  