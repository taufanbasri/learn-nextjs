import React from "react";

type Props = {
  params: { slug: string };
};

const getData = async (params: string) => {
  const res = await fetch(`https://api.github.com/users/${params}`);

  return res.json();
};

const SearchDetails = async ({ params }: Props) => {
  const data = await getData(params.slug);

  return (
    <div>
      <p>Details User: {params.slug}</p>

      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default SearchDetails;
