import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useUtility from "../../Hooks/useUtility";
import NotFound from "../../components/NotFound/NotFound";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Helmet } from "react-helmet";

const ContentView = () => {
  const { id } = useParams();
  const { allData } = useUtility();
  const { state } = useLocation();

  if (state) {
    return MainView(state);
  } else {
    const item = allData.find((data) => data._id === id);
    return item ? (
      MainView(item)
    ) : (
      <NotFound title="Content could not be found" />
    );
  }
};

const MainView = (item) => {
  return (
    <>
      <Helmet>
        <title>{item?.book_name} | Campus Library</title>
        <meta
          name="description"
          content={`${item?.book_name} by ${item?.author}`}
        />
        <meta
          name="keywords"
          content={`${item?.categories}, ${item?.sub_categories}, online-library, library, BSMRSTU`}
        />
      </Helmet>
      <IFrame src={item?.download_link} />
    </>
  );
};

const IFrame = ({ src }) => {
  const processedSrc = src.includes("drive.google.com")
    ? src.replace("/view", "/preview")
    : src;

  return (
    <div className="h-[calc(100vh-64px)]">
      <iframe
        src={processedSrc}
        className="w-full h-full"
        allow="autoplay; encrypted-media"
      />
    </div>
  );
};

export default ContentView;
