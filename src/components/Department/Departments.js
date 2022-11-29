import { useQuery } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { GET_DEPARTMENTS } from "../../queries/query";
import Department from "./Department.style";

const Departments = () => {
  const { data: { getDepartments = [] } = {}, loading: deptLoading } =
    useQuery(GET_DEPARTMENTS);
  return (
    <div className="w-full m-auto mb-5">
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, textAlign: "center", p: 2, color: "#707af4" }}
      >
        departments
      </Typography>
      <div className="flex flex-wrap justify-evenly">
        {deptLoading ? (
          <CircularProgress color="info" />
        ) : (
          getDepartments?.map((item) => (
            <NavLink to={`/${item}`}>
              <div key={item} className="rounded-xl m-5 cursor-pointer">
                <Department tag={item} />
              </div>
            </NavLink>
          ))
        )}
      </div>
    </div>
  );
};

export default Departments;
