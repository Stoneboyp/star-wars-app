export interface Character {
  id: string;
  name: string;
  birthYear: string;
}

export interface Film {
  title: string;
}

export interface Person {
  id: string;
  name: string;
  birthYear: string;
  gender: string;
  height: number;
  mass: number;
  filmConnection: {
    films: Film[];
  };
}