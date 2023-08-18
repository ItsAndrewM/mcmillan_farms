import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../../styles/utils.module.css"
import styles from "../../../styles/post.module.css"
import { activityItems } from "@/data/activityItems";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../lib/posts";
import Head from "next/head";
import Link from "next/link";


const Page = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={layoutStyles.section}>
        <div className={styles.wrapper}>
          <div
            className={utilStyles.lightText}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            {/* <Date dateString={postData.date} /> */}
            <Link href={`/stories/${postData.genre}`}>
              <small
                className={utilStyles.lightText}
                style={{ textTransform: "capitalize" }}
              >
                {postData.genre}
              </small>
            </Link>
            <small className={utilStyles.lightText}>{postData.author}</small>
          </div>
          <div
            className={layoutStyles.postWrapper}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
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
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
