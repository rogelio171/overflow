import express from 'express'

const app = express.Router()

const question = {
    _id: 1,
    title: 'How use a component in Android?',
    description: 'I am looking an easy way to start using a component in Android with Kotlin.',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
        firstName: 'He',
        lastName: 'Man',
        email: 'ihavethepower@mastersofuniverse.com',
        password: 123456
    }
}

const questions = new Array(10).fill(question)

app.get('/', (req, res) => res.status(200).json(questions))

app.get('/:id', (req, res) => res.status(200).json(question))

export default app