import { useMutation } from '@apollo/client';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Typography, Tooltip } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';
import { POST_BOOK, POST_QUESTION, POST_SYLLABUS, GET_BOOKS, GET_QUESTIONS, GET_SYLLABUS } from '../../queries/query';
import useUtility from '../../Hooks/useUtility';
import { tagTitle } from '../../utility/tagTitle';


const Request = () => {
    const { user, token } = useAuth()
    const { getDepartments, deptLoading } = useUtility()
    const [blink, setBlink] = useState(false)
    const [specialDept, setSpecialDept] = useState(false)
    const [deptName, setDeptName] = useState('');

    const submit_data_format = {
        book_name: '',
        author: '',
        edition: '',
        download_link: '',
        categories: '',
        sub_categories: '',
        status: false,
        added_by: user?.email
    }
    const [dataStruct, setDataStruct] = React.useState(submit_data_format)

    useEffect(() => {
        const handleBlink = () => {
            if (!user?.email) {
                setBlink(!blink)
            }
        }
        let interval = setInterval(() => {
            handleBlink()
        }, 500)
        return () => clearInterval(interval)
    }, [blink, user])



    const handleFormFillUp = (e) => {
        setDataStruct({
            ...dataStruct,
            [e.target.name]: e.target.value.trim().toLowerCase(),
            "added_by": user?.email
        })
    }

    const specialDeptCaseHandler = (e) => {
        if (e.target.value.trim().toLowerCase() === 'others') {
            setSpecialDept(true)
        }
        else {
            handleFormFillUp(e)
            setSpecialDept(false)
        }
        setDeptName(e.target.value.trim().toLowerCase())
    }

    const postContentInCache = (arg, comp) => {
        return [...arg, comp]
    }

    const [postContentBook, { data: data1, loading: postBookLoading }] = useMutation(POST_BOOK, {
        update(cache, { data: { addBook } }) {
            const { getBooks } = cache.readQuery({
                query: GET_BOOKS
            })
            cache.writeQuery({
                query: GET_BOOKS,
                data: {
                    getBooks: postContentInCache(getBooks, addBook)
                }
            })
        }
    })
    const [postContentQuestion, { data: data2, loading: postQuestionLoading }] = useMutation(POST_QUESTION, {
        update(cache, { data: { addQuestion } }) {
            const { getQuestions } = cache.readQuery({
                query: GET_QUESTIONS
            })
            cache.writeQuery({
                query: GET_QUESTIONS,
                data: {
                    getQuestions: postContentInCache(getQuestions, addQuestion)
                }
            })
        }
    })
    const [postContentSyllabus, { data: data3, loading: postSyllabusLoading }] = useMutation(POST_SYLLABUS, {
        update(cache, { data: { addSyllabus } }) {
            const { getAllSyllabus } = cache.readQuery({
                query: GET_SYLLABUS
            })
            cache.writeQuery({
                query: GET_SYLLABUS,
                data: {
                    getAllSyllabus: postContentInCache(getAllSyllabus, addSyllabus)
                }
            })
        }
    })

    useEffect(() => {
        if (data1?.addBook || data2?.addQuestion || data3?.addSyllabus) {
            alert("Request submit successfully")
        }
    }, [data1, data2, data3])

    const handlePost = (e) => {
        e.preventDefault()
        if (dataStruct?.sub_categories === 'book')
            postContentBook({ variables: { ...dataStruct, token } })
        else if (dataStruct?.sub_categories === 'question')
            postContentQuestion({ variables: { ...dataStruct, token } })
        else if (dataStruct?.sub_categories === 'syllabus')
            postContentSyllabus({ variables: { ...dataStruct, token } })
        e.target.reset()
    }

    return (
        <PageLayout>
            <Box sx={{ mt: 8 }}>
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item md={6}>
                        <Box sx={{ display: { md: "block", xs: "none" } }}>
                            <img style={{ width: "72%", margin: "auto" }} src="assets/images/request_banner.webp" alt="request banner" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ m: "auto" }}>
                        <Box sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
                            <Typography variant='h5'>UPLOAD YOUR CONTENT</Typography>
                            {!user?.email &&
                                <NavLink to='/login' style={{ color: blink ? 'powderblue' : 'limegreen', textDecoration: 'underline' }}>→ require sign-in ←</NavLink>
                            }
                        </Box>
                        <Box sx={{ maxWidth: "450px", m: { md: "auto", xs: 2 }, p: 5, bgcolor: "white", borderRadius: 2, boxShadow: '0.65px 1.75px 10px rgb(0, 0, 0, 0.3)' }}>
                            <form onSubmit={handlePost}>
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="sub_categories"
                                        value={dataStruct?.sub_categories}
                                        label="Category"
                                        onChange={handleFormFillUp}
                                        required
                                        disabled={!user?.email}
                                    >
                                        <MenuItem value="syllabus">Syllabus</MenuItem>
                                        <MenuItem value="book">Book</MenuItem>
                                        <MenuItem value="question">Question</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    sx={{ mb: 2 }}
                                    id="outlined-basic"
                                    label="Title"
                                    name="book_name"
                                    variant="outlined"
                                    onChange={handleFormFillUp}
                                    fullWidth
                                    required
                                    disabled={!user?.email}
                                />
                                {
                                    (dataStruct?.sub_categories === 'book') &&
                                    <Grid container spacing={{ md: 2 }} sx={{ transition: '0.5s ease-in-out' }}>
                                        <Grid item md={8} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                            <TextField
                                                sx={{ mb: 2 }}
                                                id="outlined-basic"
                                                label="Author"
                                                name="author"
                                                variant="outlined"
                                                onChange={handleFormFillUp}
                                                fullWidth
                                                disabled={!user?.email}
                                            />
                                        </Grid>
                                        <Grid item md={4} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                            <TextField
                                                sx={{ mb: 2 }}
                                                id="outlined-basic"
                                                label="Edition"
                                                name="edition"
                                                variant="outlined"
                                                type="number"
                                                onChange={handleFormFillUp}
                                                fullWidth
                                                disabled={!user?.email}
                                            />
                                        </Grid>
                                    </Grid>
                                }

                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <InputLabel id="department-selection">Department</InputLabel>
                                    <Select
                                        labelId="department-selection"
                                        id="department-selection"
                                        value={deptName}
                                        label="Department"
                                        name="categories"
                                        onChange={specialDeptCaseHandler}
                                        required
                                        disabled={!user?.email}
                                    >
                                        {!deptLoading && getDepartments.map((item, index) => (
                                            item &&
                                            <MenuItem key={index} value={item}>
                                                <Tooltip title={tagTitle[item] || ''} placement="top-start" arrow>
                                                    <div className="w-full">{item.toUpperCase()}</div>
                                                </Tooltip>
                                            </MenuItem>
                                        ))}
                                        <MenuItem value="others">OTHERS</MenuItem>
                                    </Select>
                                </FormControl>

                                {
                                    specialDept ? <TextField
                                        sx={{ mb: 2 }}
                                        id="outlined-basic"
                                        label="Unknown Department Name"
                                        name="categories"
                                        variant="outlined"
                                        onChange={handleFormFillUp}
                                        fullWidth
                                        required
                                        disabled={!user?.email}
                                    /> : null
                                }

                                <TextField
                                    sx={{ mb: 2 }}
                                    id="outlined-basic"
                                    label="Download link"
                                    name="download_link"
                                    variant="outlined"
                                    onChange={handleFormFillUp}
                                    fullWidth
                                    required
                                    disabled={!user?.email}
                                />
                                {
                                    (postSyllabusLoading || postQuestionLoading || postBookLoading) ?
                                        <LoadingButton sx={{ width: "100%" }} loading variant="contained">Loading</LoadingButton>
                                        :
                                        <Button
                                            type='submit'
                                            sx={{ width: "100%" }}
                                            variant="contained"
                                            disabled={!(dataStruct.sub_categories && dataStruct.book_name && dataStruct.categories && dataStruct.download_link)}
                                        >
                                            UPLOAD
                                        </Button>
                                }
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </PageLayout>
    );
};

export default Request;