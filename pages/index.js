import axios from 'axios';
import MovieCard from '../components/MovieCard';

export async function getServerSideProps() {
  try {
    // Replace `process.env.TMDB_API_KEY` with your actual API key
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWFhZmE3NWQ0YmQ2ZjQxMTdmMzJmMjhmZTBlNWM4ZiIsIm5iZiI6MTY5ODc1MjAzOC42LCJzdWIiOiI2NTQwZTYyNjc1MTEwZDAwZmZiNGY1OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.X41CkFG2Jdx3Q549zSDeCL_crPX1X5ktDvyV6XvGpD0'; // Hard-code the API key here

    // Fetch now-playing movies
    const nowPlayingRes = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
    });

    // Fetch upcoming movies
    const upcomingRes = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
    });

    return {
      props: {
        nowPlaying: nowPlayingRes.data.results,
        upcoming: upcomingRes.data.results,
      },
    };
  } catch (error) {
    console.error('Error fetching movies:', error.response?.data || error.message);
    return {
      props: {
        nowPlaying: [],
        upcoming: [],
      },
    };
  }
}

export default function Home({ nowPlaying, upcoming }) {
  return (
    <div className="bg-black text-gold min-h-screen">
      <h1 className="text-3xl font-bold text-center my-6">Now Showing</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {nowPlaying.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center my-6">Upcoming Films</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {upcoming.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
