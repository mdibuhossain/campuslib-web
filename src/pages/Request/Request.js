import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const Request = () => {
    const [cat, setCat] = React.useState('');
    const [dept, setDept] = React.useState('');

    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ maxWidth: "400px", m: 'auto', px: 2 }}>
                <form>
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

                    <TextField fullWidth sx={{ mb: 2 }} id="outlined-basic" label="Title" variant="outlined" required />

                    {
                        (cat === 'books') &&
                        <Grid container spacing={{ md: 2 }}>
                            <Grid item md={8} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                <TextField fullWidth sx={{ mb: 2 }} id="outlined-basic" label="Author" variant="outlined" />
                            </Grid>
                            <Grid item md={4} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                <TextField fullWidth sx={{ mb: 2 }} id="outlined-basic" label="Edition" variant="outlined" type="number" />
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

                    <TextField fullWidth sx={{ mb: 2 }} id="outlined-basic" label="Download link" variant="outlined" type="number" required />
                </form>
            </Box>
        </Box>
    );
};

export default Request;