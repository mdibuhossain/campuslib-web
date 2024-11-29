import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import useUtility from "../../Hooks/useUtility";
import NotFound from "../../components/NotFound/NotFound";

const ContentView = () => {
  const { id } = useParams();
  const { allData } = useUtility();
  const {
    location: { state },
  } = useAuth();
  console.log(allData);

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
      <IFrame src={item?.download_link} />
    </>
  );
};

const IFrame = ({ src }) => {
  const processedSrc = src.includes("drive.google.com")
    ? src.replace("/view", "/preview")
    : src;
  console.log(processedSrc);

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
