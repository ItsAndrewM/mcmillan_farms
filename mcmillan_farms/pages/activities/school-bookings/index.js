import Layout from "@/components/layout/layout";
import layoutStyles from "../../../components/layout/layout.module.css";

const Page = () => {
  return (
    <Layout>
      <section className={layoutStyles.section}>
        This is a page for school bookings
      </section>
    </Layout>
  );
};

export default Page;
