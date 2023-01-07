import React from "react";

type Props = {
  params: { slug: string };
};

const getDataUser = async (params: string) => {
  const res = await fetch(`https://api.github.com/users/${params}`);

  return res.json();
};

const getDataRepos = async (params: string) => {
  const res = await fetch(`https://api.github.com/users/${params}/repos`);
  // contoh delay
  await new Promise((r) => setTimeout(r, 2000));

  return res.json();
};

const SearchDetails = async ({ params }: Props) => {
  const dataUser = getDataUser(params.slug);
  const dataRepos = getDataRepos(params.slug);

  const [user, repos] = await Promise.all([dataUser, dataRepos]);

  return (
    <div>
      <p>Details User: {params.slug}</p>

      <div>{JSON.stringify(user)}</div>

      <p>List Repository:</p>
      <div>{JSON.stringify(repos)}</div>
    </div>
  );
};

export default SearchDetails;
