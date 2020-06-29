import React, { Fragment, useState } from 'react'
import Error from './Error'

const Question = () => {
  const [quantity, saveQuantity] = useState(0)
  const [error, saveError] = useState(false)

  // Read budget
  const defineBudget = e => {
    saveQuantity(parseInt(e.target.value, 10))
  }

  // Submit
  const addBudget = e => {
    e.preventDefault()

    // Validate budget entry
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true)
      return
    }

    saveError(false)
  }

  return (
    <Fragment>
      <h2>Enter your budget</h2>
      {error ? <Error message="Te budget is wrong" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Budget"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Define budget"
        />
      </form>
    </Fragment>
  )
}

export default Question
