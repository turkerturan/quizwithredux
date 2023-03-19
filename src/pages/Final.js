import React from 'react'
import { useSelector } from 'react-redux'
import ResultQuestionCard from '../components/ResultQuestionCard'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Final() {

    const questionList = useSelector(state => state.questions.questionList)

    return (
        <div>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <ol>
                {questionList.map(item => <ResultQuestionCard key={questionList.id} item={item} />)}
            </ol>
            <br></br>
            <br></br>
            <br></br>
            <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }} >
                <Button
                variant="contained"
                sx={{ display: "block", margin: "auto", minWidth: 250 }}
                >
                Back to INTRO and try again!
                </Button>
            </Link >
        </div>
    )
}
