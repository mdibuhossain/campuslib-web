import DeleteIcon from '@mui/icons-material/Delete';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
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
    const { user, setUpdate, update } = useAuth();
    const { Services } = useServices();

    const deleteRequest = (title, item) => {
        Services("DELETE", title.toLowerCase(), item)
        setUpdate(update + 1);
    }

    return (
        <Demo>
            <Typography variant='h6' sx={{ ml: 2 }}>{title}</Typography>
            <List >
                {content.map(item => (
                    (item?.status === status) && (item?.added_by === user?.email) &&
                    <ListItem
                        key={item?._id}
                        secondaryAction={
                            !item?.status && <IconButton edge="end" aria-label="delete" onClick={() => deleteRequest(title, item)}>
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
                                    ( {item?.categories} ) {!item?.status && '|'} {!item?.status && <NavLink to="#" style={{ color: 'rgb(59 130 246)' }}>Edit</NavLink>} | ( {item?.added_by} )
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