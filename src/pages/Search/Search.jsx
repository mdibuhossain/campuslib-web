import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import { Button, CircularProgress } from '@mui/material';
import PageLayout from '../../Layout/PageLayout';
import useUtility from '../../Hooks/useUtility';

const Search = () => {
    const { allData, dataLoading } = useUtility();
    const [search_text, setSearch_Text] = useState('')
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        const tmp_res = allData?.filter(info => (
            (info?.book_name?.toLowerCase()?.includes(search_text.toLowerCase()) ||
                info?.author?.toLowerCase()?.includes(search_text.toLowerCase()) ||
                info?.categories?.includes(search_text.toLowerCase()) ||
                info?.subcategories?.includes(search_text.toLowerCase())) && (search_text.length > 0)
        ))
        setSearchData(tmp_res);
    }, [search_text, allData])

    return (
        <PageLayout>
            <Box sx={{ width: 'min(90vw, 50rem)', m: 'auto', mt: 2 }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto', m: 'auto'
                    }}
                >
                    <Button sx={{ p: '10px' }}>
                        <SearchIcon />
                    </Button>
                    <InputBase
                        sx={{ ml: 1, pr: 2, flex: 1 }}
                        placeholder="Search"
                        value={search_text}
                        onChange={(e) => {
                            e.preventDefault()
                            setSearch_Text(e.target.value)
                        }}
                    />
                </Paper>
                <Box sx={{ p: 2, mt: 2, ...(searchData.length && { border: 1, borderRadius: 2, borderColor: 'rgba(0, 0, 0, 0.15)' }) }}>
                    {
                        (dataLoading) && <CircularProgress color="inherit" />
                    }
                    {
                        searchData.length ?
                            <div>
                                {
                                    searchData.map((item, index) => (
                                        <a href={item?.download_link} key={index} target="_blank" rel="noreferrer">
                                            <Paper sx={{ my: 2, p: 2, color: 'rgba(0, 0, 0, 0.7)' }}>
                                                <strong>{item?.book_name}</strong>
                                                <p className='text-blue-500 font-semibold text-sm'>{item?.edition ? item?.edition + 'E' : ''} <em>{item?.author ? ' - ' + item?.author : ''}</em> <span style={{ color: 'rgba(0, 0, 0, 0.7)' }}>({item?.categories})</span></p>
                                            </Paper>
                                        </a>
                                    ))
                                }
                            </div>
                            : ''
                    }
                </Box>
            </Box>
        </PageLayout>
    );
};

export default Search;