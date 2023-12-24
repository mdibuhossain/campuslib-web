import { CircularProgress, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useUtility from "../../Hooks/useUtility";
import { DepartmentCard, DepartmentStyle } from "./Department.style";

const Departments = () => {
  const { getDepartments, deptLoading } = useUtility();
  return (
    <div className="w-full m-auto mb-5">
      <Typography
        variant="h4"
        sx={{ fontWeight: 600, textAlign: "center", py: 5, color: "#707af4" }}
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
                <DepartmentCard key={item}>
                  <NavLink to={`/department/${item}`}>
                    <DepartmentStyle tag={item} />
                  </NavLink>
                </DepartmentCard>
              )
          )
        )}
      </div>
    </div>
  );
};

export default Departments;
