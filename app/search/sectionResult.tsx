import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  query: string;
};

const SectionResult = ({ query }: Props) => {
  const { data, isLoading } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );

  return (
    <div>
      <p>Hasil pencarian: {query}</p>
      <div>{isLoading ? <p>Loading...</p> : JSON.stringify(data)}</div>
    </div>
  );
};

export default SectionResult;
