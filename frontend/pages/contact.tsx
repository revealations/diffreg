import type { NextPage } from "next";
import RenderMap from "../components/Contact/NaverMap";
import Layout from "../components/Layout/Layout";

const Contact: NextPage = () => {
  return (
    <>
      <Layout>
        <RenderMap></RenderMap>
      </Layout>
    </>
  );
};

export default Contact;
