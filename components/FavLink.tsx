import { FavoriteCharacter } from "@/store";
import Link from "next/link";

const FavLink = ({ character }: { character: FavoriteCharacter }) => (
  <li key={character.id}>
    <Link href={`/character/${character.id}`}>
      <div className="hover:underline">{character.name}</div>
    </Link>
  </li>
);

export default FavLink;
