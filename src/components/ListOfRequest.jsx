import DeleteIcon from '@mui/icons-material/Delete';
import { BookOpenIcon } from '@heroicons/react/outline';
import { Avatar, CircularProgress, IconButton, LinearProgress, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '../Hooks/useAuth';
import { DELETE_BOOK, DELETE_QUESTION, DELETE_SYLLABUS, GET_BOOKS, GET_QUESTIONS, GET_SYLLABUS, UPDATE_STATUS_BOOK, UPDATE_STATUS_QUESTION, UPDATE_STATUS_SYLLABUS } from '../queries/query';
import { useMutation } from '@apollo/client';
import useUtility from '../Hooks/useUtility';

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
    const { user, admin, token } = useAuth();
    const { dataLoading } = useUtility();

    const updateContentStatusFromCache = (arg, comp) => {
        const res = [...arg]
        const indx = res.findIndex((unit) => unit?._id === comp?._id)
        res[indx] = { ...res[indx], status: !res[indx]?.status }
        return res
    }

    const [updateStatusBook, { loading: updateStatusBookloading }] = useMutation(UPDATE_STATUS_BOOK, {
        update(cache, { data: { editBookStatus } }) {
            const { getBooks } = cache.readQuery({
                query: GET_BOOKS,
            });
            cache.writeQuery({
                query: GET_BOOKS,
                data: {
                    getBooks: updateContentStatusFromCache(getBooks, editBookStatus),
                },
            });
        },
    })
    const [updateStatusQuestion, { loading: updateStatusQuestionloading }] = useMutation(UPDATE_STATUS_QUESTION, {
        update(cache, { data: { editQuestionStatus } }) {
            const { getQuestions } = cache.readQuery({
                query: GET_QUESTIONS,
            });
            cache.writeQuery({
                query: GET_QUESTIONS,
                data: {
                    getQuestions: updateContentStatusFromCache(getQuestions, editQuestionStatus),
                },
            });
        },
    })
    const [updateStatusSyllabus, { loading: updateStatusSyllabusloading }] = useMutation(UPDATE_STATUS_SYLLABUS, {
        update(cache, { data: { editSyllabusStatus } }) {
            const { getAllSyllabus } = cache.readQuery({
                query: GET_SYLLABUS,
            });
            cache.writeQuery({
                query: GET_SYLLABUS,
                data: {
                    getAllSyllabus: updateContentStatusFromCache(getAllSyllabus, editSyllabusStatus),
                },
            });
        },
    })

    const deleteContentFromCache = (arg, comp) => {
        return arg.filter((unit) => unit?._id !== comp?._id)
    }

    const [deleteContentBook, { loading: deleteBookLoading }] = useMutation(DELETE_BOOK, {
        update(cache, { data: { deleteBook } }) {
            const { getBooks } = cache.readQuery({
                query: GET_BOOKS,
            });
            cache.writeQuery({
                query: GET_BOOKS,
                data: {
                    getBooks: deleteContentFromCache(getBooks, deleteBook),
                },
            });
        },
    })
    const [deleteContentQuestion, { loading: deleteQuestionLoading }] = useMutation(DELETE_QUESTION, {
        update(cache, { data: { deleteQuestion } }) {
            const { getQuestions } = cache.readQuery({
                query: GET_QUESTIONS,
            });
            cache.writeQuery({
                query: GET_QUESTIONS,
                data: {
                    getQuestions: deleteContentFromCache(getQuestions, deleteQuestion),
                },
            });
        },
    })
    const [deleteContentSyllabus, { loading: deleteSyllabusLoading }] = useMutation(DELETE_SYLLABUS, {
        update(cache, { data: { deleteSyllabus } }) {
            const { getAllSyllabus } = cache.readQuery({
                query: GET_SYLLABUS,
            });
            cache.writeQuery({
                query: GET_SYLLABUS,
                data: {
                    getAllSyllabus: deleteContentFromCache(getAllSyllabus, deleteSyllabus),
                },
            });
        },
    })

    const deleteRequest = (title, item) => {
        if (window.confirm("Are you sure want to delete?")) {
            if (title.toLowerCase() === 'book')
                deleteContentBook({ variables: { token, _id: item?._id } })
            else if (title.toLowerCase() === 'question')
                deleteContentQuestion({ variables: { token, _id: item?._id } })
            else if (title.toLowerCase() === 'syllabus')
                deleteContentSyllabus({ variables: { token, _id: item?._id } })
        }
    }

    const handleStatus = (_id, status) => {
        if (title.toLowerCase() === 'book')
            updateStatusBook({ variables: { _id, status, token } })
        else if (title.toLowerCase() === 'question')
            updateStatusQuestion({ variables: { _id, status, token } })
        else if (title.toLowerCase() === 'syllabus')
            updateStatusSyllabus({ variables: { _id, status, token } })
    }

    return (
        <Demo className='shadow-2xl'>
            <Box sx={{ height: 5 }}>
                {((updateStatusSyllabusloading ||
                    updateStatusQuestionloading ||
                    updateStatusBookloading ||
                    deleteSyllabusLoading ||
                    deleteQuestionLoading ||
                    deleteBookLoading) && !dataLoading) && <LinearProgress />}
            </Box>
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

                                            {(admin || !item?.status || status) && <NavLink to={`/edit/${item?._id}`} className="bg-green-500 hover:bg-green-600 rounded-full px-2 py-0.5 font-semibold text-gray-50 hover:text-gray-50 text-xs mr-2">edit</NavLink>}

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
            <Box sx={{ height: 5 }}>
                {((updateStatusSyllabusloading ||
                    updateStatusQuestionloading ||
                    updateStatusBookloading ||
                    deleteSyllabusLoading ||
                    deleteQuestionLoading ||
                    deleteBookLoading) && !dataLoading) && <LinearProgress />}
            </Box>
        </Demo>
    )
}

export default ListOfRequest;