export default function MovieCard({ movie }) {
    return (
      <div className="bg-black border border-gold rounded-md p-4 hover:scale-105 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md"
        />
        <h3 className="text-gold text-lg mt-2 truncate">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        <button className="mt-2 px-4 py-1 bg-gold text-black rounded-md">
          More Info
        </button>
      </div>
    );
  }
  