import { useFavoriteStore } from "@/store";
import FavLink from "@/components/FavLink";

export default function Favorites() {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Favorite Characters</h1>
      {favorites.length === 0 ? (
        <p>No favorite characters added.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((character) => (
            <FavLink key={character.id} character={character} />
          ))}
        </ul>
      )}
    </div>
  );
}
