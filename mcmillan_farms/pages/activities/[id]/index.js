import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import { activityItems } from "@/data/activityItems";

const Page = ({ found }) => {
  return (
    <Layout>
      <section className={layoutStyles.section}>
        <div>this is a page for {found.name}</div>
      </section>
    </Layout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = activityItems.map((vals) => {
    return { params: { id: vals.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const found = activityItems.find((val) => {
    return val.slug === params.id;
  });
  return {
    props: {
      found,
    },
  };
};
