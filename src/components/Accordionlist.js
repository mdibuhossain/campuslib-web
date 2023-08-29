import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import useUtility from "../Hooks/useUtility";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(2),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordionlist({ title, contents }) {
    const { dataLoading } = useUtility();
    const [showData, setShowData] = useState([]);
    const [data_1_1, setData_1_1] = useState([]);
    const [data_1_2, setData_1_2] = useState([]);
    const [data_2_1, setData_2_1] = useState([]);
    const [data_2_2, setData_2_2] = useState([]);
    const [data_3_1, setData_3_1] = useState([]);
    const [data_3_2, setData_3_2] = useState([]);
    const [data_4_1, setData_4_1] = useState([]);
    const [data_4_2, setData_4_2] = useState([]);
    const [other_data, setOther_data] = useState([]);
    const [expanded, setExpanded] = React.useState(true);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        const activeDataHandler = () => {
            setShowData(contents?.filter((item) => item?.status));
        };
        return activeDataHandler();
    }, [contents]);

    useEffect(() => {
        const filter = () => {
            setData_1_1(showData.filter((data) => data?.semester?.includes("1.1")))
            setData_1_2(showData.filter((data) => data?.semester?.includes("1.2")))
            setData_2_1(showData.filter((data) => data?.semester?.includes("2.1")))
            setData_2_2(showData.filter((data) => data?.semester?.includes("2.2")))
            setData_3_1(showData.filter((data) => data?.semester?.includes("3.1")))
            setData_3_2(showData.filter((data) => data?.semester?.includes("3.2")))
            setData_4_1(showData.filter((data) => data?.semester?.includes("4.1")))
            setData_4_2(showData.filter((data) => data?.semester?.includes("4.2")))
            setOther_data(showData.filter((data) => data?.semester?.length === 0))
        }
        return filter()
    }, [showData])
    
    if (showData?.length) {
        if (title === 'Books') {
            return (
                <div className="flex flex-col gap-0">
                    {IndividualAccordion("1st year 1st semester", data_1_1, handleChange)}
                    {IndividualAccordion("1st year 2nd semester", data_1_2, handleChange)}
                    {IndividualAccordion("2nd year 1st semester", data_2_1, handleChange)}
                    {IndividualAccordion("2nd year 2nd semester", data_2_2, handleChange)}
                    {IndividualAccordion("3rd year 1st semester", data_3_1, handleChange)}
                    {IndividualAccordion("3rd year 2nd semester", data_3_2, handleChange)}
                    {IndividualAccordion("4th year 1st semester", data_4_1, handleChange)}
                    {IndividualAccordion("4th year 2nd semester", data_4_2, handleChange)}
                    {IndividualAccordion("Undefine", other_data, handleChange)}
                </div>
            )
        } else {
            return InnerList(showData)
        }
    } else if (dataLoading) {
        return (
            <div>
                <CircularProgress color="inherit" />
            </div>
        );
    } else {
        return null;
    }
}

const IndividualAccordion = (title, showData, handleChange) => (
    <Accordion disabled={!showData?.length} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ fontWeight: 600 }}>
                {title} - ({showData?.length})
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            {InnerList(showData)}
        </AccordionDetails>
    </Accordion>
)

const InnerList = (showData) => (
    <ol>
        {showData?.map((item, index) => (
            <li key={index} className="list-decimal ml-6 my-5">
                <a href={item?.download_link} target="_blank" rel="noreferrer">
                    <strong>
                        {item?.book_name} {item?.edition ? item?.edition + "E" : ""}
                    </strong>{" "}
                    {item?.author ? " - " + item?.author : ""}
                </a>
            </li>
        ))}
    </ol>
)
