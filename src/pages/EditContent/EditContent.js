import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, Chip, FormControl, Grid, InputLabel, ListSubheader, MenuItem, Select, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth';
import useUtility from '../../Hooks/useUtility';
import PageLayout from '../../Layout/PageLayout';
import { GET_BOOKS, GET_QUESTIONS, GET_SYLLABUS, UPDATE_BOOK, UPDATE_QUESTION, UPDATE_SYLLABUS } from '../../queries/query';
import { tagTitle } from '../../utility/tagTitle';
import { semesterList } from '../../utility/semesterList';

const EditContent = () => {
    const [specialDept, setSpecialDept] = useState(false);
    const [deptName, setDeptName] = useState('');
    const { id } = useParams()
    const navigate = useNavigate()
    const { token } = useAuth()
    const { books, questions, syllabus, deptLoading, getDepartments } = useUtility()
    let product = books?.find(item => item?._id === id)
    if (!product?._id)
        product = questions?.find(item => item?._id === id)
    if (!product?._id)
        product = syllabus?.find(item => item?._id === id)

    useEffect(() => {
        setDeptName(product?.categories)
        if (getDepartments.length > 0 && product?.categories) {
            if (!(getDepartments?.includes(product?.categories))) {
                setDeptName('others')
                setSpecialDept(true)
            }
        }
    }, [deptLoading])

    const [dataStruct, setDataStruct] = useState(product)
    const [semester, setSemester] = React.useState(product?.semester)

    const updateContentFromCache = (arg, comp) => {
        const res = [...arg]
        const indx = res.findIndex((unit) => unit?._id === comp?._id)
        res[indx] = dataStruct
        return res
    }

    const [updateBook, { loading: bookUpdateLoading }] = useMutation(UPDATE_BOOK, {
        update(cache, { data: { editBook } }) {
            const { getBooks } = cache.readQuery({
                query: GET_BOOKS,
            });
            cache.writeQuery({
                query: GET_BOOKS,
                data: {
                    getBooks: updateContentFromCache(getBooks, editBook),
                },
            });
        },
    })

    const [updateQuestion, { loading: questionUpdateLoading }] = useMutation(UPDATE_QUESTION, {
        update(cache, { data: { editQuestion } }) {
            const { getQuestions } = cache.readQuery({
                query: GET_QUESTIONS,
            });
            cache.writeQuery({
                query: GET_QUESTIONS,
                data: {
                    getQuestions: updateContentFromCache(getQuestions, editQuestion),
                },
            });
        },
    })

    const [updateSyllabus, { loading: syllabusUpdateLoading }] = useMutation(UPDATE_SYLLABUS, {
        update(cache, { data: { editSyllabus } }) {
            const { getAllSyllabus } = cache.readQuery({
                query: GET_SYLLABUS,
            });
            cache.writeQuery({
                query: GET_SYLLABUS,
                data: {
                    getAllSyllabus: updateContentFromCache(getAllSyllabus, editSyllabus),
                },
            });
        },
    })

    const handleSemester = (event) => {
        const { target: { value } } = event;
        setSemester(value)
        handleSubmit(event);
    }

    const handleSubmit = (e) => {
        setDataStruct({
            ...dataStruct,
            [e.target.name]: e.target.value
        })
    }

    const specialDeptCaseHandler = (e) => {
        if (e.target.value.trim() === 'others') {
            setSpecialDept(true)
        }
        else {
            handleSubmit(e)
            setSpecialDept(false)
        }
        setDeptName(e.target.value.trim())
    }

    const handlePost = (e) => {
        e.preventDefault()
        if (window.confirm("Are you sure want to update?")) {
            if (dataStruct?.sub_categories === 'syllabus')
                updateSyllabus({ variables: { token, ...dataStruct } })
            else if (dataStruct?.sub_categories === 'book')
                updateBook({ variables: { token, ...dataStruct } })
            else if (dataStruct?.sub_categories === 'question')
                updateQuestion({ variables: { token, ...dataStruct } })
            e.target.reset()
            navigate(-1)
        }
    }

    return (
        <PageLayout>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>EDIT CONTENT</Typography>
            <Box sx={{ maxWidth: "450px", m: { md: "auto", xs: 2 }, p: 5, bgcolor: "white", borderRadius: 2, boxShadow: '0.65px 1.75px 10px rgb(0, 0, 0, 0.3)' }}>
                <form onSubmit={handlePost}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dataStruct?.sub_categories}
                            label="Category"
                            name="sub_categories"
                            onChange={handleSubmit}
                            required
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
                        value={dataStruct?.book_name}
                        name="book_name"
                        variant="outlined"
                        onChange={handleSubmit}
                        fullWidth
                        required
                    />

                    {
                        (dataStruct?.sub_categories === 'book') &&
                        <Grid container spacing={{ md: 2 }} sx={{ transition: '0.5s ease-in-out' }}>
                            <Grid item md={8} xs={12} sx={{ transition: '0.5s ease-in-out' }}>
                                <TextField
                                    sx={{ mb: 2 }}
                                    id="outlined-basic"
                                    label="Author"
                                    value={dataStruct?.author}
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
                                    value={dataStruct?.edition}
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
                            value={deptName}
                            label="Department"
                            name="categories"
                            onChange={specialDeptCaseHandler}
                            required
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
                            defaultValue={dataStruct?.categories}
                            label="Unknown Department Name"
                            name="categories"
                            variant="outlined"
                            onChange={handleSubmit}
                            fullWidth
                            required
                        /> : null
                    }

                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel htmlFor="semester-select">Semester</InputLabel>
                        <Select
                            value={semester ?? []}
                            multiple
                            id="semester-select"
                            label="Semester"
                            name="semester"
                            onChange={handleSemester}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {
                                semesterList.map((sem) => {
                                    if (sem?.title) {
                                        return (
                                            <ListSubheader key={sem.title} sx={{ fontWeight: "700" }}>{sem.title}</ListSubheader>
                                        )
                                    }
                                    return (
                                        <MenuItem key={sem} value={sem} sx={{ ml: 1 }}>{sem}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                    <TextField
                        sx={{ mb: 2 }}
                        id="outlined-basic"
                        label="Download link"
                        value={dataStruct?.download_link}
                        name="download_link"
                        variant="outlined"
                        onChange={handleSubmit}
                        fullWidth
                        required
                    />
                    {
                        (syllabusUpdateLoading || questionUpdateLoading || bookUpdateLoading) ?
                            <LoadingButton sx={{ width: "100%" }} loading variant="contained">Loading</LoadingButton>
                            : <Button
                                type='submit'
                                sx={{ width: "100%" }}
                                variant="contained"
                                disabled={(dataStruct?.sub_categories && dataStruct?.book_name && dataStruct?.categories && dataStruct?.download_link) ? false : true}
                            >
                                submit
                            </Button>
                    }
                </form>
            </Box>
        </PageLayout>
    );
};

export default EditContent;