import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <form>
        <input placeholder="Search Github User" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
