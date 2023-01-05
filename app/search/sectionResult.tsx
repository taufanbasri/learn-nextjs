import Link from "next/link";
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
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.items.map((user: any, index: number) => (
            <ul key={index}>
              <li>
                <Link href={`search/${user.login}`}>{user.login}</Link>
              </li>
              <li>
                <Link href={user.html_url}>Repository</Link>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default SectionResult;
