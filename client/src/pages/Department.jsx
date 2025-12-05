import React from "react";
import { useParams } from "react-router-dom";
import BookShowcase from "../components/BookShowcase";
import useUtility from "../Hooks/useUtility";
import PageLayout from "../Layout/PageLayout";
import Banner from "./Home/Home.style";
import LinearLoadin from "../components/Linear_Loading/LinearLoadin";
import NotFound from "../components/NotFound/NotFound";
import { tagTitle } from "../utility/tagTitle";
import { Helmet } from "react-helmet";

const Department = () => {
  const { dept } = useParams();
  const { dataLoading, allData } = useUtility();
  if (!dataLoading) {
    // for testing purpose
    // const check = allData.find(it => it.categories.trim().toLowerCase() === dept.trim().toLowerCase())
    const check = tagTitle[dept];
    if (check) {
      return (
        <>
          <Helmet>
            <title>{tagTitle[dept]} | Campus Library</title>
            <meta
              name="description"
              content={`Get all the books, questions, and syllabus of ${tagTitle[dept]} department`}
            />
            <meta
              name="keywords"
              content={`${tagTitle[dept]}, books, questions, syllabus`}
            />
          </Helmet>
          <PageLayout>
            <Banner title={dept} src={dept} />
            <BookShowcase department={dept} />
          </PageLayout>
        </>
      );
    } else {
      return <NotFound />;
    }
  }
  return <LinearLoadin />;
};

export default Department;
