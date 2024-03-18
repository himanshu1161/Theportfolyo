import Head from "next/head";
const PageHead = ({ page,data }) => {
  const userName = data?.user?.about?.name || "User";

  return (
    <Head>
      <title>{userName} | {page}</title>
    </Head>
  );
};

export default PageHead;
