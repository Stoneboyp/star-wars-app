import { useSearchStore } from "@/store";

const Search = ({}) => {
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by name"
      className="border border-gray-300 rounded-md p-2 mb-4 w-full bg-gray-900"
    />
  );
};

export default Search;
