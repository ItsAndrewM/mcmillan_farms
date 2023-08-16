import Layout from "@/components/layout/layout";
import layoutStyles from "@/components/layout/layout.module.css";

const Page = () => {
  return (
    <Layout>
      <section className={layoutStyles.section}>
        <div>This is a page for contact us</div>
      </section>
    </Layout>
  );
};

export default Page;
