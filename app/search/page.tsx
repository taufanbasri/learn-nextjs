"use client";

import React, { useState } from "react";
import SectionResult from "./sectionResult";

type Props = {};

const Search = (props: Props) => {
  const [query, setQuery] = useState("");

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    const inputQuery = e.target[0].value;

    setQuery(inputQuery);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="Search Github User" />
        <button>Search</button>

        {query && <SectionResult query={query} />}
      </form>
    </div>
  );
};

export default Search;
