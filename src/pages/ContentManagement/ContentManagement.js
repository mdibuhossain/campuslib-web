import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import PageLayout from '../../Layout/PageLayout';
import ListOfRequest from '../../components/ListOfRequest';
import useUtility from '../../Hooks/useUtility';

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

const TabSection = ({ activeHandler, _isActive }) => (
    <section className="px-2 my-10">
        <nav className="flex justify-center w-full md:w-5/12 m-auto p-0">
            <Button name="_books" onClick={activeHandler} variant="outlined" style={{ borderRadius: '0px', borderTopLeftRadius: "0.375rem", borderBottomLeftRadius: "0.375rem", color: "inherit", backgroundColor: _isActive["_books"] ? "rgb(56 189 248)" : "white" }} className="flex-1">BOOKS</Button>

            <Button name="_questions" onClick={activeHandler} variant="outlined" style={{ borderRadius: '0px', color: "inherit", backgroundColor: _isActive["_questions"] ? "rgb(56 189 248)" : "white" }} className="flex-1">QUESTIONS</Button>

            <Button name="_syllabus" onClick={activeHandler} variant="outlined" style={{ borderRadius: '0px', borderTopRightRadius: "0.375rem", borderBottomRightRadius: "0.375rem", color: "inherit", backgroundColor: _isActive["_syllabus"] ? "rgb(56 189 248)" : "white" }} className="flex-1">SYLLABUS</Button>
        </nav>
    </section>
)

const ContentManagement = ({ isMyContent = false, pageTitle }) => {
    const { _isActive, activeHandler } = TabActive();
    const { books, questions, syllabus } = useUtility()
    return (
        <PageLayout>
            <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>{pageTitle}</Typography>
            <TabSection _isActive={_isActive} activeHandler={activeHandler} />
            {
                _isActive["_books"] && <ListOfRequest content={books} status={isMyContent} title="Book" />
            }
            {
                _isActive["_questions"] && <ListOfRequest content={questions} status={isMyContent} title="Question" />
            }
            {
                _isActive["_syllabus"] && <ListOfRequest content={syllabus} status={isMyContent} title="Syllabus" />
            }
            <TabSection _isActive={_isActive} activeHandler={activeHandler} />
        </PageLayout>
    );
};

export default ContentManagement;