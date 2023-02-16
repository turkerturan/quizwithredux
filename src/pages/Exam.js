import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import QuestionCard from '../components/QuestionCard'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Exam() {

    const questionList = useSelector(state => state.questions.questionList)

    return (
        <div>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <ol>
                {questionList.map(item => <QuestionCard key={questionList.id} item={item} />)}
            </ol>
            <br></br>
            <br></br>
            <Button
                variant="contained"
                size='large'
                sx={{ display: "block", margin: "auto", minWidth: 400, marginBottom: 10 }}
            >
                <Link to={"/final"} style={{ textDecoration: 'none', color: 'white' }} >See the results!</Link >
            </Button>
        </div>
    )
}
