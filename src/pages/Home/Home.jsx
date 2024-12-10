import React from "react";
import Departments from "../../components/Department/Departments";
import PageLayout from "../../Layout/PageLayout";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Campus Library</title>
        <meta
          name="description"
          content="Campus Library is an online library for BSMRSTU students."
        />
        <meta name="keywords" content="online-library, library, BSMRSTU" />
      </Helmet>
      <PageLayout>
        {/* <Banner src="home" title="CAMPUS LIBRARY" /> */}
        <Departments />
      </PageLayout>
    </>
  );
};

export default Home;
