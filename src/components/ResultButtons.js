import * as React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ResultButtons({ item }) {

    const answerList = item.answerList

    const correctAnswer = item.correctAnswer

    const userAnswer = item.userAnswer

    const answers = answerList.map((ans) => {

        if (ans === userAnswer && ans === correctAnswer) {
            return (
                <Button
                    variant="contained"
                    key={ans}
                    color="success"

                >
                    {ans}
                </Button>
            )
        } else if (ans === userAnswer && ans !== correctAnswer) {
            return (
                <Button
                    variant="contained"
                    key={ans}
                    color="error"

                >
                    {ans}
                </Button>
            )
        } else {
            return (
                <Button
                    variant="contained"
                    key={ans}
                    color="inherit"

                >
                    {ans}
                </Button>
            )
        }

    })

    return (
        <Stack direction="row" spacing={2}>
            {answers}
        </Stack>
    )
}


    // if (ans === userAnswer && ans === correctAnswer) { return String("success") }
    // else if (ans === userAnswer && ans !== correctAnswer) { return String("error") }
    // else { return String("secondary") 