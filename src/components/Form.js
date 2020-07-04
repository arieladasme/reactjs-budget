import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

const Form = () => {
  const [name, saveName] = useState('')
  const [quantity, saveQuantity] = useState(0)
  const [error, saveError] = useState(false)

  const addExpense = e => {
    e.preventDefault()

    // Validate
    if (quantity < 1 || isNaN(quantity) || name.trim() === '') {
      saveError(true)
      return
    }
    saveError(false)

    const expense = { name, quantity, id: shortid.generate() }
  }

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses</h2>
      {error ? (
        <Error message="The fields are mandatory or incorrect quote" />
      ) : null}
      <div className="campo">
        <label>Name Expense</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="example: Cinema"
          value={name}
          onChange={e => saveName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Amount Expense</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="example: 400"
          value={quantity}
          onChange={e => saveQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  )
}

export default Form
