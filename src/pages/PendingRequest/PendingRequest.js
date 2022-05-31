import { FolderIcon } from '@heroicons/react/outline';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import styled from '@emotion/styled';

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

const ListOfRequest = ({ content, title }) => {
    // const [dense, setDense] = useState(false);
    // const [secondary, setSecondary] = useState(false);
    if (content?.length > 0)
        return (
            <Demo>
                <Typography variant='h6' sx={{ ml: 2 }}>{title}</Typography>
                <List >
                    {content.map(item => (
                        !item?.status &&
                        <ListItem
                            key={item?._id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item?.book_name}
                            // secondary={secondary ? 'Secondary text' : null}
                            />
                        </ListItem>
                    ))}
                </List>
            </Demo>
        )
    return null
}

const PendingRequest = () => {
    const { books, questions, syllabus } = useAuth()
    return (
        <div>
            <ListOfRequest content={books} title="Books" />
            <ListOfRequest content={questions} title="Questions" />
            <ListOfRequest content={syllabus} title="Syllabus" />
        </div >
    );
};

export default PendingRequest;