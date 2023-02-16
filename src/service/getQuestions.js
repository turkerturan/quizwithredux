import { shuffle } from "../helpers/shuffle"

export async function getQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple")

        const data = await response.json()

        return data.results.map((q) => {
            const answerList = shuffle(q.incorrect_answers.concat(q.correct_answer))

            return {
                question: q.question,
                correctAnswer: q.correct_answer,
                answerList,
                id: crypto.randomUUID(),
                userAnswer: ""
            }
        })

    } catch (error) {
        console.log(error)
    }
}