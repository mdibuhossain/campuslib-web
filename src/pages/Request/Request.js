import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material';
import React from 'react';

const submit_data_format = {
    title: '',
    author: '',
    edition: '',
    download_link: '',
    categories: '',
    subcategories: ''
}

const Request = () => {
    const [cat, setCat] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [edition, setEdition] = React.useState('')
    const [dept, setDept] = React.useState('')
    const [downloadlink, setDownloadlink] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const tmpdata = {
            title: title,
            author: author,
            edition: edition,
            download_link: downloadlink,
            categories: cat,
            subcategories: dept
        }
    }

    return (
        <Box sx={{ mt: 5 }}>
            <h1 className="text-center text-4xl mb-9 text-red-700 font-bold">** This is page is under construction **</h1>
            <Grid container sx={{ alignItems: 'center' }}>
                <Grid item md={6}>
                    <Box sx={{ display: { md: "block", xs: "none" } }}>
                        <img style={{ width: "72%", margin: "auto" }} src="assets/images/request_banner.png" alt="request banner" />
                    </Box>
                </Grid>
                <Grid item md={6} sx={{ m: "auto" }}>
                    <Box sx={{ maxWidth: "450px", m: { md: "auto", xs: 2 }, p: 5, bgcolor: "white", borderRadius: 2, boxShadow: '0.65px 1.75px 10px rgb(0, 0, 0, 0.3)' }}>
                        <form onSubmit={handleSubmit}>
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
                                    <MenuItem value="books">Books</MenuItem>
                                    <MenuItem value="questions">Questions</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                sx={{ mb: 2 }}
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                required
                            />

                            {
                                (cat === 'books') &&
                                <Grid container spacing={{ md: 2 }} sx={{ transition: '0.5s ease-in-out' }}>
                                    <Grid item md={8} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                        <TextField
                                            sx={{ mb: 2 }}
                                            id="outlined-basic"
                                            label="Author"
                                            variant="outlined"
                                            onChange={(e) => setAuthor(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                        <TextField
                                            sx={{ mb: 2 }}
                                            id="outlined-basic"
                                            label="Edition"
                                            variant="outlined"
                                            type="number"
                                            onChange={(e) => setEdition(e.target.value)}
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
                                    value={dept}
                                    label="Department"
                                    onChange={(e) => setDept(e.target.value)}
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
                                variant="outlined"
                                onChange={(e) => setDownloadlink(e.target.value)}
                                fullWidth
                                required
                            />
                            <Button
                                type='submit'
                                sx={{ width: "100%" }}
                                variant="contained"
                                disabled={(cat && title && dept && downloadlink) ? false : true}
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