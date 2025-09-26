import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";

interface Movie {
  id: string;
  title: string;
  image: string;
}

interface MovieRowProps {
  title: string;
  movies?: Movie[];
}

const defaultMovies: Movie[] = [
  { id: "1", title: "Shadow Strike", image: movie1 },
  { id: "2", title: "Quantum Realm", image: movie2 },
  { id: "3", title: "Midnight Terror", image: movie3 },
  { id: "4", title: "Love & Laughter", image: movie4 },
  { id: "5", title: "Shadow Strike", image: movie1 },
  { id: "6", title: "Quantum Realm", image: movie2 },
];

const MovieRow = ({ title, movies = defaultMovies }: MovieRowProps) => {
  return (
    <div className="px-4 md:px-16 mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
        {title}
      </h2>
      
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-32 md:w-48 h-48 md:h-72 object-cover rounded-md transition-all duration-300 group-hover:brightness-110"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-md" />
              
              {/* Title overlay on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-md">
                <p className="text-sm font-semibold text-white truncate">
                  {movie.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;