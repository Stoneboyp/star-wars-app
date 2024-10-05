import { useSearchStore } from "@/store/useSearchStore";
import { FavoriteListItem } from "./FavoriteListItem/FavoriteListItem";
import { Character } from "@/types/types";

interface FavoriteListProps {
  characters: Character[];
}

const FavoriteList = ({ characters }: FavoriteListProps) => {
  const search = useSearchStore((state) => state.search);
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ul className="space-y-4">
      {filteredCharacters.map((character) => (
        <FavoriteListItem character={character} key={character.id} />
      ))}
    </ul>
  );
};

export default FavoriteList;
