import { useMemo } from "react";
import Link from "next/link";
import { useFavoriteStore, useNotificationStore } from "@/store";
import { Character } from "@/types/types";
import { Icons } from "../../Icons";

export const FavoriteListItem = ({ character }: { character: Character }) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const addFavorite = useFavoriteStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const setNotification = useNotificationStore(
    (state) => state.setNotification
  );

  const favoriteIds = useMemo(
    () => new Set(favorites.map((fav) => fav.id)),
    [favorites]
  );
  const isFavorite = (id: string) => favoriteIds.has(id);

  const handleFavoriteToggle = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
      setNotification({
        message: `${character.name} removed from favorites`,
        type: "error",
      });
    } else {
      addFavorite(character);
      setNotification({
        message: `${character.name} added to favorites`,
        type: "success",
      });
    }
  };

  return (
    <li key={character.id} className="flex items-center justify-between">
      <Link href={`/character/${character.id}`}>
        <div className="hover:underline">
          {character.name} - {character.birthYear}
        </div>
      </Link>

      <button
        onClick={() => handleFavoriteToggle(character)}
        className={`ml-4 `}
      >
        {isFavorite(character.id) ? Icons.heart : Icons.emptyHeart}
      </button>
    </li>
  );
};
