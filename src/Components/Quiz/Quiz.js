import React, { Component } from 'react'
// import QuizOption from '../QuizOption/QuizOption'
import './Quiz.css'

export default class Quiz extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            questions: [
                {
                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { id: 1, answerText: 'New York', isCorrect: false },
                        { id: 2, answerText: 'London', isCorrect: false },
                        { id: 3, answerText: 'Paris', isCorrect: true },
                        { id: 4, answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { id: 1, answerText: 'Jeff Bezos', isCorrect: false },
                        { id: 2, answerText: 'Elon Musk', isCorrect: true },
                        { id: 3, answerText: 'Bill Gates', isCorrect: false },
                        { id: 4, answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { id: 1, answerText: 'Apple', isCorrect: true },
                        { id: 2, answerText: 'Intel', isCorrect: false },
                        { id: 3, answerText: 'Amazon', isCorrect: false },
                        { id: 4, answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { id: 1, answerText: '1', isCorrect: false },
                        { id: 2, answerText: '4', isCorrect: false },
                        { id: 3, answerText: '6', isCorrect: false },
                        { id: 4, answerText: '7', isCorrect: true },
                    ],
                },
            ],
            score: 0,
            showResult: false,
            currentQuestionIndex: 0
        }
        this.answerCorrectionChecker = this.answerCorrectionChecker.bind(this);
    }

    answerCorrectionChecker = (answer, event) => {
        event.preventDefault();
        if (answer.isCorrect) {
            this.setState((prevState) => {
                return{score: ++prevState.score};
            })
        }
        this.setState((prevState) => {
            return{currentQuestionIndex: ++prevState.currentQuestionIndex};
        })
        if (this.state.currentQuestionIndex === this.state.questions.length - 1) {
            this.setState({
                showResult: true
            })
        }
    }
    render() {



        return (
            <div>
                <div className='app-container'>
                    {this.state.showResult &&
                        <p className='result'>You scored {this.state.score} out of {this.state.questions.length}</p>
                    }
                    {!this.state.showResult &&
                        <div className='question-box'>
                           <div className='box-right'>
                           <p className='numberOf'>Question {this.state.currentQuestionIndex + 1 +  '/' +  this.state.questions.length}</p>
                            <p className='question-text'>{(this.state.currentQuestionIndex + 1) + '. ' + this.state.questions[this.state.currentQuestionIndex].questionText}</p>
                           </div>
                            <div className='answer-box'>
                                {this.state.questions[this.state.currentQuestionIndex].answerOptions.map((answer) => (
                                    <div key={answer.id}>
                                        <button onClick={(event) => this.answerCorrectionChecker(answer, event)} className='answer-btn'>{answer.answerText}</button>
                                    </div>
                                )
                                )}
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}
