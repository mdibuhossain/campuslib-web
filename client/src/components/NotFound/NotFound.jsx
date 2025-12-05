import React from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../../Layout/PageLayout";
import NotFoundStyle from "./NotFoundStyle.module.css";

const NotFound = ({title = "This Page Could Not Be Found"}) => {
  return (
    <PageLayout>
      <div className="mt-10">
        <div className={NotFoundStyle.notfound}>
          <div className={NotFoundStyle.notfound_404}>
            <h1>404</h1>
          </div>
          <h2>Oops! {title}</h2>
          <p className="text-red-500">
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <NavLink to="/">Go To Homepage</NavLink>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
