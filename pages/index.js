import axios from 'axios';
import MovieCard from '../components/MovieCard';

export async function getServerSideProps() {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
    params: {
      api_key: process.env.TMDB_API_KEY,
      language: 'en-US',
    },
  });
  return { props: { movies: res.data.results } };
}

export default function Home({ movies }) {
  return (
    <div className="bg-black text-gold min-h-screen">
      <h1 className="text-3xl font-bold text-center my-6">Now Showing</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
