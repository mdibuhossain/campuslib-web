import {
  Autocomplete,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { DepartmentCard, DepartmentStyle } from "./Department.style";
import { NavLink } from "react-router-dom";
import useUtility from "../../Hooks/useUtility";
import { tagTitle } from "../../utility/tagTitle";
import { useState } from "react";

const Departments = () => {
  const {
    getDepartments,
    setGetDepartments,
    searchedValue,
    setSearchedValue,
    deptLoading,
  } = useUtility();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event, newValue) => {
    if (newValue?.trim() === "" || newValue === null) {
      setGetDepartments(Object.keys(tagTitle));
    }
    // Trigger only when an option is selected from the list
    if (["click", "keydown"].includes(event.type) && newValue) {
      const dept = newValue?.split(" - ")[0]?.toLowerCase();
      const filteredDept = Object.keys(tagTitle).filter(
        (item) => item === dept
      );
      setSearchedValue(newValue);
      setGetDepartments(filteredDept);
    }
  };

  const handleResetSearch = (e) => {
    setInputValue(() => "");
    setSearchedValue(() => "");
    setGetDepartments(() => Object.keys(tagTitle));
  };

  const handleInputValueChange = (e, newValue) => {
    setInputValue(newValue);
  };

  return (
    <>
      <div className="w-full m-auto mb-5">
        <div className="w-[90vw] mx-auto flex justify-center py-5">
          <Autocomplete
            fullWidth
            disableClearable
            selectOnFocus={true}
            id="free-solo-2-demo"
            options={Object.keys(tagTitle).map(
              (option) => `${option.toUpperCase()} - ${tagTitle[option]}`
            )}
            value={searchedValue}
            inputValue={inputValue}
            onChange={handleChange}
            onInputChange={handleInputValueChange}
            isOptionEqualToValue={(option, value) => {
              // Show all options when input is empty
              if (value === "") return true;
              return option === value;
            }}
            sx={{
              "&.MuiAutocomplete-root": {
                maxWidth: "32rem",
                transition: "0.2s ease-in-out",
                "&.Mui-focused": {
                  maxWidth: "100%",
                },
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                placeholder={`Search for departments...`}
                variant="outlined"
                InputLabelProps={{
                  shrink: false,
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton onClick={handleChange}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleResetSearch}>
                        <RestartAltIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { borderRadius: "100px", width: "100%" },
                }}
              />
            )}
          />
        </div>
        {/* <Typography
          variant="h4"
          sx={{ fontWeight: 600, textAlign: "center", py: 5, color: "#707af4" }}
        >
          Departments
        </Typography> */}
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
    </>
  );
};

export default Departments;
