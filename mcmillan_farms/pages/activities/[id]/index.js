import { activityItems } from "@/data/activityItems";

const Page = ({ found }) => {
  return <div>this is a page for {found.name}</div>;
};

export default Page;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = activityItems.map((vals) => {
    return { params: { id: vals.name } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const found = activityItems.find((val) => {
    return val.name === params.id;
  });
  return {
    props: {
      found,
    },
  };
};
