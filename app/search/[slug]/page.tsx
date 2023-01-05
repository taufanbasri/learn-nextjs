import React from "react";

type Props = {
  params: { slug: string };
};

const SearchDetails = ({ params }: Props) => {
  return <div>Details User: {params.slug}</div>;
};

export default SearchDetails;
