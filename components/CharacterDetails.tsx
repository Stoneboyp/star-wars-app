import { Film, Person } from "@/types/types";
import { Icons } from "./Icons";
import { useFavoriteStore } from "@/store";

const CharacterDetails = ({ character }: { character: Person }) => {
  const { favorites } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.id === character.id);
  const characterAttributes = [
    { label: "Birth Year", value: character.birthYear },
    { label: "Gender", value: character.gender },
    { label: "Height", value: `${character.height} cm` },
    { label: "Mass", value: `${character.mass} kg` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-baseline">
        <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
        {isFavorite && <span className="ml-2">{Icons.heart}</span>}
      </div>
      {characterAttributes.map((attr) => (
        <p key={attr.label}>
          <strong>{attr.label}:</strong> {attr.value}
        </p>
      ))}
      <h2 className="text-xl font-semibold mt-4">Films:</h2>
      <ul>
        {character.filmConnection?.films.map((film: Film, index: number) => (
          <li key={index}>{film.title}</li>
        )) || <li>No films available.</li>}
      </ul>
    </div>
  );
};

export default CharacterDetails;
