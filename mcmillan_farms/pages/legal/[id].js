import { usePathname } from "next/navigation";
import { getAllLegalIds, getLegalData } from "../../lib/legal";
import layoutStyles from "../../components/layout/layout.module.css";
import Layout from "../../components/layout/layout";
import Head from "next/head";

const Page = ({ legalData }) => {
  const pathname = usePathname();
  return (
    <Layout>
      <Head>
        <title>{`McMillan Farms | ${
          pathname.split("/")[pathname.split("/").length - 1] ===
          "privacy-policy"
            ? "Privacy Policy"
            : "Terms and Conditions"
        }`}</title>
        <meta
          name="description"
          content={`${
            pathname.split("/")[pathname.split("/").length - 1] ===
            "privacy-policy"
              ? "This Privacy Policy describes McMillan Farms policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
              : "Terms and Conditions"
          }`}
          key="desc"
        />
      </Head>
      <div
        className={layoutStyles.postWrapper}
        dangerouslySetInnerHTML={{ __html: legalData.contentHtml }}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllLegalIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const legalData = await getLegalData(params.id);
  return {
    props: {
      legalData,
    },
  };
};

export default Page;
