import { CircularProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useUtility from "../../Hooks/useUtility";
import DepartmentStyle from "./Department.style";

const Departments = () => {
  const { getDepartments, deptLoading } = useUtility()
  return (
    <div className="w-full m-auto mb-5">
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, textAlign: "center", p: 2, color: "#707af4" }}
      >
        departments
      </Typography>
      <div className="flex flex-wrap justify-center">
        {deptLoading ? (
          <CircularProgress color="info" />
        ) : (
          getDepartments?.map(
            (item) =>
              item && (
                <NavLink key={item} to={`/department/${item}`}>
                  <div className="rounded-xl m-5 cursor-pointer">
                    <DepartmentStyle tag={item} />
                  </div>
                </NavLink>
              )
          )
        )}
      </div>
    </div>
  );
};

export default Departments;
