import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../../Hooks/useAuth';
import Services from '../../services/Services';


const Request = () => {
    const { user } = useAuth()
    const submit_data_format = {
        book_name: '',
        author: '',
        edition: '',
        download_link: '',
        categories: '',
        status: false,
        added_by: user?.email
    }
    const [cat, setCat] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [edition, setEdition] = React.useState('')
    const [dept, setDept] = React.useState('')
    const [downloadlink, setDownloadlink] = React.useState('')
    const [dataStruct, setDataStruct] = React.useState(submit_data_format)

    const handleSubmit = (e) => {
        setDataStruct({
            ...dataStruct,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handlePost = (e) => {
        e.preventDefault()
        Services("POST_REQUEST", cat, dataStruct)
        e.target.reset()
    }


    return (
        <Box sx={{ mt: 8 }}>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item md={6}>
                    <Box sx={{ display: { md: "block", xs: "none" } }}>
                        <img style={{ width: "72%", margin: "auto" }} src="assets/images/request_banner.png" alt="request banner" />
                    </Box>
                </Grid>
                <Grid item md={6} sx={{ m: "auto" }}>
                    <Box sx={{ maxWidth: "450px", m: { md: "auto", xs: 2 }, p: 5, bgcolor: "white", borderRadius: 2, boxShadow: '0.65px 1.75px 10px rgb(0, 0, 0, 0.3)' }}>
                        <form onSubmit={handlePost}>
                            <FormControl fullWidth sx={{ mb: 2 }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cat}
                                    label="Category"
                                    onChange={(e) => setCat(e.target.value)}
                                    required
                                >
                                    <MenuItem value="syllabus">Syllabus</MenuItem>
                                    <MenuItem value="book">Books</MenuItem>
                                    <MenuItem value="question">Questions</MenuItem>
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
                            />

                            {
                                (cat === 'book') &&
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
                                >
                                    <MenuItem value="cse">CSE</MenuItem>
                                    <MenuItem value="eee">EEE</MenuItem>
                                    <MenuItem value="math">MATH</MenuItem>
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
                            />
                            <Button
                                type='submit'
                                sx={{ width: "100%" }}
                                variant="contained"
                                disabled={(cat && dataStruct.book_name && dataStruct.categories && dataStruct.download_link) ? false : true}
                            >
                                submit
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Request;