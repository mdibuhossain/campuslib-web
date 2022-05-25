import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const Search = () => {
    const [totalData, setTotalData] = useState([])
    const [search_text, setSearch_Text] = useState('')
    const [searchData, setSearchData] = useState([])
    let tmp = []

    useEffect(() => {
        fetch(process.env.REACT_APP_JSON_URL)
            .then(res => res.json())
            .then(data => {
                for (const info in data) {
                    if (data[info].length) {
                        tmp.push(...data[info])
                    }
                }
                setTotalData(tmp)
            }
            )
    }, [])

    // console.log(totalData)

    useEffect(() => {
        const tmp_res = totalData?.filter(info => (
            (info?.book_name?.toLowerCase()?.includes(search_text.toLowerCase()) ||
                info?.author?.toLowerCase()?.includes(search_text.toLowerCase()) ||
                info?.categories?.includes(search_text.toLowerCase()) ||
                info?.subcategories?.includes(search_text.toLowerCase())) && (search_text.length > 0)
        ))
        setSearchData(tmp_res);
    }, [search_text, totalData])

    // console.log(searchData);

    return (
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

            {
                searchData.length ?
                    <Box sx={{ p: 2, mt: 2, border: 1, borderRadius: 2, borderColor: 'rgba(0, 0, 0, 0.15)' }}>
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
                    </Box>
                    : ''
            }

        </Box>
    );
};

export default Search;