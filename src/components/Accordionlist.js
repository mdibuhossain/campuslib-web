import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useAuth } from '../Hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordionlist({ title, contents }) {
    const { dataLoading } = useAuth()
    const [showData, setShowData] = useState(null);
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        const activeDataHandler = () => {
            setShowData(contents?.filter(item => item?.status))
        }
        return activeDataHandler();
    }, [contents])

    return (
        <Accordion onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{ fontWeight: 600 }}>{title} - {showData?.length}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    dataLoading ? <CircularProgress color="inherit" /> :
                        <ol>
                            {
                                showData?.map((item, index) => (
                                    item?.status &&
                                    <li key={index} className="list-decimal ml-6 my-5">
                                        <a href={item?.download_link} target="_blank" rel="noreferrer">
                                            <strong>{item?.book_name} {item?.edition ? item?.edition + 'E' : ''}</strong> {item?.author ? ' - ' + item?.author : ''}
                                        </a>
                                    </li>
                                ))
                            }
                        </ol>
                }
            </AccordionDetails>
        </Accordion>
    );
}
