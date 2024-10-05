import { gql } from "@apollo/client";
import client from "@/apollo/apollo-client";
import { Person } from "@/types/types";
import CharacterDetails from "@/components/CharacterDetails";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      name
      birthYear
      gender
      height
      mass
      filmConnection {
        films {
          title
        }
      }
    }
  }
`;

export default function CharacterDetailsPage(props: { character: Person }) {
  return <CharacterDetails {...props} />;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const { data } = await client.query({
    query: GET_CHARACTER_DETAILS,
    variables: { id },
  });

  return {
    props: { character: data.person as Person },
  };
}
