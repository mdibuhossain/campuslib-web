import { useMutation } from '@apollo/client';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';
import { POST_BOOK, POST_QUESTION, POST_SYLLABUS } from '../../queries/query';


const Request = () => {
    const { user, token } = useAuth()
    const [blink, setBlink] = useState(false);

    const API = {
        'post_book': POST_BOOK,
        'post_question': POST_QUESTION,
        'post_syllabus': POST_SYLLABUS,
    }

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
            [e.target.name]: e.target.value.trim(),
            "added_by": user?.email
        })
    }

    const [postContent, { data, loading: postLoading }] = useMutation((API[`post_${dataStruct?.sub_categories}`] || POST_BOOK), {
        variables: {
            ...dataStruct,
            token
        }
    })

    useEffect(() => {
        if (data?.addBook || data?.addSyllabus || data?.addQuestion) {
            alert("Request submit successfully")
        }
    }, [data])

    const handlePost = (e) => {
        e.preventDefault()
        postContent({ variables: { ...dataStruct, token } })
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
                                        value={dataStruct.categories}
                                        label="Department"
                                        name="categories"
                                        onChange={handleFormFillUp}
                                        required
                                        disabled={!user?.email}
                                    >
                                        <MenuItem value="cse">CSE</MenuItem>
                                        <MenuItem value="eee">EEE</MenuItem>
                                        <MenuItem value="math">MATH</MenuItem>
                                        <MenuItem value="sta">STATISTICS</MenuItem>
                                        <MenuItem value="islamic">ISLAMIC</MenuItem>
                                        <MenuItem value="nonacademic">NON ACADEMIC</MenuItem>
                                    </Select>
                                </FormControl>

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
                                    postLoading ?
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