import DeleteIcon from '@mui/icons-material/Delete';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Avatar, CircularProgress, IconButton, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../Hooks/useAuth';
import useServices from '../Hooks/useServices';

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
    const { user, admin, dataLoading } = useAuth();
    const { Services } = useServices();

    const deleteRequest = (title, item) => {
        if (window.confirm("Are you sure want to delete?")) {
            Services("DELETE_CONTENT", title.toLowerCase(), item)
        }
    }

    const handleStatus = (_id, status) => {
        Services("UPDATE_STATUS", title.toLowerCase(), { _id, status })
    }

    return (
        <Demo>
            <Typography variant='h6' sx={{ ml: 2 }}>{title}</Typography>
            {
                dataLoading ? <CircularProgress color="info" /> :
                    <List >
                        {content?.map(item => (
                            (admin || ((item?.status === status) && (item?.added_by === user?.email))) &&
                            <ListItem
                                key={item?._id}
                                secondaryAction={
                                    (admin || !item?.status) && <IconButton edge="end" aria-label="DELETE_CONTENT" onClick={() => deleteRequest(title, item)}>
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
                                            {admin && (!item?.status ? <button onClick={() => handleStatus(item?._id, true)} className="bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2">allow</button> : <button onClick={() => handleStatus(item?._id, false)} className="bg-red-500 hover:bg-red-400 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2">hide</button>)}

                                            {(admin || !item?.status) && <NavLink to={`/edit/${item?._id}`} className="bg-green-500 hover:bg-green-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2">edit</NavLink>}

                                            <span className="mr-2 inline-block">( {item?.categories} )</span>

                                            ( {item?.added_by} ){admin && (item?.added_by === user?.email) && <span style={{ color: 'red' }}> ( Admin )</span>}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItem>
                        ))
                        }
                    </List >
            }
        </Demo >
    )
}

export default ListOfRequest;