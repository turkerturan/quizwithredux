import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch } from "react-redux";
import { setUserAnswers } from "../app/questionSlice";


export default function AnswersButton({ item }) {

    const answers = item.answerList

    const dispatch = useDispatch()

    const [alignment, setAlignment] = React.useState();

    const handleChange = (event, answer) => {
        setAlignment(event.target.value)
        dispatch(setUserAnswers({ id: item.id, answer: event.target.value }))
    };

    const answerButton = answers.map((item) => {
        return (
            <ToggleButton value={item} >{item}</ToggleButton>
        )
    })


    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            {answerButton}
        </ToggleButtonGroup>
    );
}