const getDataRepos = async (params: string) => {
  const res = await fetch(`https://api.github.com/users/${params}/repos`);
  // contoh delay
  await new Promise((r) => setTimeout(r, 2000));

  return res.json();
};

type Props = {
  slug: any;
};

const SectionRepository = async ({ slug }: Props) => {
  const dataRepos = await getDataRepos(slug);

  return (
    <>
      <p>List Repository:</p>
      <div>{JSON.stringify(dataRepos)}</div>
    </>
  );
};

export default SectionRepository;
