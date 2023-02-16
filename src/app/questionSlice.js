import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionList: []
}

export const questionSlice = createSlice(
    {
        name: "questions",
        initialState,
        reducers: {
            setQuestionList(state, action) {
                state.questionList = action.payload
            },
            setUserAnswers(state, action) {
                const question = state.questionList.find(item => {
                    return item.id === action.payload.id
                })
                question.userAnswer = action.payload.answer
            }

        }
    }
)

export const { setQuestionList, setUserAnswers } = questionSlice.actions