import React, { useState, useEffect } from 'react'
import 'animate.css'
//import './node_modules/animate.css/animate.min.css'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import BudgetControl from './components/BudgetControl'

function App() {
  const [budget, saveBudget] = useState(0)
  const [remaining, saveRemaining] = useState(0)
  const [showQuestion, updateQuestion] = useState(true)
  const [expenses, saveExpenses] = useState([])
  const [expense, saveExpense] = useState({})
  const [createExpense, saveCreateExpense] = useState(false)

  // useEffect: update remaining
  useEffect(() => {
    if (createExpense) {
      // Add new budget
      saveExpenses([...expenses, expense])

      // Subtract from budget
      const remainingBudget = remaining - expense.quantity
      saveRemaining(remainingBudget)

      // Reset to false
      saveCreateExpense(false)
    }
  }, [expense, createExpense, expenses, remaining])

  return (
    <div className="container">
      <header>
        <h1 className="animate__animated animate__zoomInDown">
          {/* Weekly Expense */}
          Gasto Semanal
        </h1>
        <div className="contenido-principal contenido animate__animated animate__zoomIn">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row animate__animated animate__zoomIn">
              <div className="one-half column">
                <Form
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
                <BudgetControl budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
