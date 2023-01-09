import React, { Suspense } from "react";
import SectionRepository from "./sectionRepository";

type Props = {
  params: { slug: string };
};

const getDataUser = async (params: string) => {
  const res = await fetch(`https://api.github.com/users/${params}`);

  return res.json();
};

const SearchDetails = async ({ params }: Props) => {
  const dataUser = await getDataUser(params.slug);

  return (
    <div>
      <p>Details User: {params.slug}</p>
      <div>{JSON.stringify(dataUser)}</div>

      <div style={{ marginTop: "10px" }}>
        <Suspense fallback={<div>Sedang mengambil data...</div>}>
          <SectionRepository slug={params.slug} />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchDetails;
