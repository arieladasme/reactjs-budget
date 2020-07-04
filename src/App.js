import React, { useState } from 'react'
import Question from './components/Question'
import Form from './components/Form'

function App() {
  const [budget, saveBudget] = useState(0)
  const [remaining, saveRemaining] = useState(0)
  const [showQuestion, updateQuestion] = useState(true)
  const [expenses, saveExpenses] = useState([])

  // Add new expense
  const addNewExpense = expense => {
    saveExpenses([...expenses, expense])
  }

  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>
        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form addNewExpense={addNewExpense} />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
