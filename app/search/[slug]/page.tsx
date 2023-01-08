import React, { Suspense } from "react";

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

const RepoList = async ({ slug }: any) => {
  const dataRepos = await getDataRepos(slug);

  return (
    <>
      <p>List Repository:</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

const SearchDetails = async ({ params }: Props) => {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p>Details User: {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>

      <div style={{ marginTop: "10px" }}>
        <Suspense fallback={<div>Sedang mengambil data...</div>}>
          <RepoList slug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchDetails;
