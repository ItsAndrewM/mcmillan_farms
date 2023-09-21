// "use client";
import Layout from "@/components/layout/layout";
import layoutStyles from "../../components/layout/layout.module.css";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import contactUsStyles from "../../styles/contactUs.module.css";
import utilStyles from "../../styles/utils.module.css";
import styles from "../..//styles/careers.module.css";
import { useState } from "react";
import { utapi } from "uploadthing/server";
import CareerUpload from "@/components/careerUpload/careerUpload";

const Page = () => {
  return (
    <Layout>
      <section className={layoutStyles.section}>
        <CareerUpload />
      </section>
    </Layout>
  );
};

export default Page;
