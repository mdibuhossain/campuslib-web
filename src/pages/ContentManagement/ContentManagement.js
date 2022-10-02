import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';
import ListOfRequest from '../../components/ListOfRequest';

const TabActive = () => {
    const activeList = {
        "_books": true,
        "_questions": false,
        "_syllabus": false
    }
    const [_isActive, _setIsActive] = useState(activeList)
    const activeHandler = (event) => {
        let tmpActiveList = { ...activeList }
        tmpActiveList["_books"] = false;
        tmpActiveList[event.target.name] = true;
        _setIsActive(prev => ({ ...prev, ...tmpActiveList }))
    }
    return {
        _isActive,
        activeHandler
    }
}

const ContentManagement = ({ isMyContent = false, pageTitle }) => {
    const { _isActive, activeHandler } = TabActive();
    console.log(_isActive)
    const { books, questions, syllabus, setUpdate, update } = useAuth()
    useEffect(() => {
        setUpdate(update + 1)
    }, [])
    return (
        <PageLayout>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>{pageTitle}</Typography>
            <section className="px-2 mb-10">
                <nav className="flex justify-center w-full md:w-5/12 m-auto p-0 border-solid border-2 border-gray-300 rounded-md overflow-hidden">
                    <Button name="_books" onClick={activeHandler} style={{ color: "inherit", backgroundColor: _isActive["_books"] ? "#ffa0f2" : "inherit" }} className="flex-1">BOOKS</Button>
                    <Button name="_questions" onClick={activeHandler} style={{ color: "inherit", backgroundColor: _isActive["_questions"] ? "#ffa0f2" : "inherit" }} className="flex-1">QUESTIONS</Button>
                    <Button name="_syllabus" onClick={activeHandler} style={{ color: "inherit", backgroundColor: _isActive["_syllabus"] ? "#ffa0f2" : "inherit" }} className="flex-1">SYLLABUS</Button>
                </nav>
            </section>
            {
                _isActive["_books"] && <ListOfRequest content={books} status={isMyContent} title="Book" />
            }
            {
                _isActive["_questions"] && <ListOfRequest content={questions} status={isMyContent} title="Question" />
            }
            {
                _isActive["_syllabus"] && <ListOfRequest content={syllabus} status={isMyContent} title="Syllabus" />
            }
        </PageLayout>
    );
};

export default ContentManagement;