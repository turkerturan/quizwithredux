import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { getQuestions } from "../service/getQuestions";
import { setQuestionList } from "../app/questionSlice";

export default function Intro() {

    const dispatch = useDispatch()

    React.useEffect(() => {
        getQuestions().then(questionList => {
            dispatch(setQuestionList(questionList))
        })
    }, [dispatch])

    const start = "-->START QUIZ!<--"


    return (
        <>
            <Header />
            <Card sx={{ display: 'block', maxWidth: 500, margin: "auto", marginTop: 40 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 35, textAlign: 'center' }} gutterBottom>
                        Ready for TRIVIA QUIZ?
                    </Typography>
                </CardContent>
                <CardActions sx={{display: "block", margin:"auto"}}>
                    <Link to={"/exam"} style={{ textDecoration: 'none', color: 'black' }}  >
                        <Button
                        size="big"
                        sx={{ display:"block", fontSize: 20, alignItems: 'center', margin: 'auto' }}
                        >
                        {start}
                        </Button>
                    </Link >
                </CardActions>
            </Card>
        </>
    );
}
