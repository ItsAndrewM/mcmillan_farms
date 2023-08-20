import Layout from "@/components/layout/layout";
import layoutStyles from "../../../../components/layout/layout.module.css";
import { usePathname } from "next/navigation";
import { data } from "@/data/data";

const Page = ({ activityData }) => {
  const pathname = usePathname();
  return (
    <Layout>
      <section className={layoutStyles.section}>{pathname}</section>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const keys = Object.keys(data);
  const pathsArr = keys.map((ele) => {
    const a = data[ele].map((vals) => {
      return { params: { id: ele, slug: `${vals.slug}` } };
    });
    return a;
  });
  const attractionPaths = pathsArr[0];
  const productPaths = pathsArr[1];
  console.log(attractionPaths);
  const idPaths = keys.map((ele) => {
    return { params: { id: ele } };
  });
  return {
    paths: [...attractionPaths, ...productPaths],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const activityData = params;
  return {
    props: {
      activityData,
    },
  };
};

export default Page;
