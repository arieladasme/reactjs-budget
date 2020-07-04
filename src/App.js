import React, { useState, useEffect } from 'react'
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
    }

    // Subtract from budget
    const remainingBudget = remaining - expense.quantity
    saveRemaining(remainingBudget)

    // Reset to false
    saveCreateExpense(false)
  }, [expense, createExpense, expenses, remaining])

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
