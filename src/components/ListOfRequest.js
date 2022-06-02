import DeleteIcon from '@mui/icons-material/Delete';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Avatar, Chip, IconButton, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../Hooks/useAuth';
import useServices from '../Hooks/useServices';
import axios from 'axios';

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    margin: 'auto',
    width: '95%',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '6px'
}));

const ListOfRequest = ({ content, title, status }) => {
    const { user, setUpdate, update, admin } = useAuth();
    const { Services } = useServices();

    const deleteRequest = (title, item) => {
        if (window.confirm("Are you sure want to delete?")) {
            Services("DELETE", title.toLowerCase(), item)
            setUpdate(update + 1);
        }
    }

    const handleStatus = (_id, status) => {
        Services("STATUS_UPDATE", title.toLowerCase(), { _id, status })
        setUpdate(update + 1);
    }

    return (
        <Demo>
            <Typography variant='h6' sx={{ ml: 2 }}>{title}</Typography>
            <List >
                {content.map(item => (
                    (admin || ((item?.status === status) && (item?.added_by === user?.email))) &&
                    <ListItem
                        key={item?._id}
                        secondaryAction={
                            (admin || !item?.status) && <IconButton edge="end" aria-label="delete" onClick={() => deleteRequest(title, item)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <Box sx={{ display: 'flex' }}>
                            <ListItemAvatar>
                                <Avatar sx={{ p: 1 }}>
                                    <BookOpenIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <a href={!(item?.download_link?.startsWith('https://') || item?.download_link?.startsWith('http://')) ? 'http://' + item?.download_link : item?.download_link} target="_blank" rel="noreferrer">
                                    <Typography>
                                        <strong>{item?.book_name} {item?.edition && ' - ' + item?.edition + 'E'}</strong><em>{item?.author && ' by ' + item?.author}</em>
                                    </Typography>
                                </a>
                                <Typography variant='caption'>
                                    ( {item?.categories} ) &nbsp;

                                    {admin && (!item?.status ? <button onClick={() => handleStatus(item?._id, true)} className="bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs">allow</button> : <button onClick={() => handleStatus(item?._id, false)} className="bg-red-500 hover:bg-red-400 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs">hide</button>)} &nbsp;

                                    {(admin || !item?.status) && <button className="bg-green-500 hover:bg-green-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs">edit</button>}&nbsp;

                                    ( {item?.added_by} ){admin && (item?.added_by === user?.email) && <span style={{ color: 'red' }}> ( Admin )</span>}
                                </Typography>
                            </Box>
                        </Box>
                    </ListItem>
                ))
                }
            </List >
        </Demo >
    )
}

export default ListOfRequest;