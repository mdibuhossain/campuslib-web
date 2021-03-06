import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import useServices from '../../Hooks/useServices';
import PageLayout from '../../Layout/PageLayout';


const Request = () => {
    const { user } = useAuth()
    const { Services } = useServices();
    const [blink, setBlink] = useState(false);

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

    const handleSubmit = (e) => {
        setDataStruct({
            ...dataStruct,
            [e.target.name]: e.target.value.trim(),
            "added_by": user?.email
        })
    }

    const handlePost = (e) => {
        e.preventDefault()
        Services("POST_REQUEST", dataStruct?.sub_categories, dataStruct)
        e.target.reset()
    }

    return (
        <PageLayout>
            <Box sx={{ mt: 8 }}>
                <Grid container sx={{ alignItems: 'center' }}>
                    <Grid item md={6}>
                        <Box sx={{ display: { md: "block", xs: "none" } }}>
                            <img style={{ width: "72%", margin: "auto" }} src="assets/images/request_banner.png" alt="request banner" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sx={{ m: "auto" }}>
                        <Box sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}>
                            <Typography variant='h5'>POST YOUR CONTENT</Typography>
                            {!user?.email &&
                                <NavLink to='/login' style={{ color: blink ? 'powderblue' : 'limegreen', textDecoration: 'underline' }}>??? require sign-in ???</NavLink>
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
                                        onChange={handleSubmit}
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
                                    onChange={handleSubmit}
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
                                                onChange={handleSubmit}
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
                                                onChange={handleSubmit}
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
                                        onChange={handleSubmit}
                                        required
                                        disabled={!user?.email}
                                    >
                                        <MenuItem value="cse">CSE</MenuItem>
                                        <MenuItem value="eee">EEE</MenuItem>
                                        <MenuItem value="math">MATH</MenuItem>
                                        <MenuItem value="sta">STATISTICS</MenuItem>
                                        <MenuItem value="islamic">Islamic</MenuItem>
                                        <MenuItem value="others">Others</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    sx={{ mb: 2 }}
                                    id="outlined-basic"
                                    label="Download link"
                                    name="download_link"
                                    variant="outlined"
                                    onChange={handleSubmit}
                                    fullWidth
                                    required
                                    disabled={!user?.email}
                                />
                                <Button
                                    type='submit'
                                    sx={{ width: "100%" }}
                                    variant="contained"
                                    disabled={!(dataStruct.sub_categories && dataStruct.book_name && dataStruct.categories && dataStruct.download_link)}
                                >
                                    submit
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </PageLayout>
    );
};

export default Request;