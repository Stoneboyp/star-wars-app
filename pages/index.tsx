import { gql } from "@apollo/client";
import client from "@/apollo/apollo-client";
import { Character } from "@/types/types";
import Search from "@/components/Search";
import Notification from "@/components/Notification";
import FavoriteList from "@/components/FavoriteList/FavoriteList";

export default function Home(props: { characters: Character[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Search />
      <FavoriteList {...props} />
      <Notification />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_CHARACTERS,
  });

  return {
    props: {
      characters: data.allPeople.people,
    },
  };
}

const GET_CHARACTERS = gql`
  query GetCharacters {
    allPeople {
      people {
        id
        name
        birthYear
      }
    }
  }
`;
