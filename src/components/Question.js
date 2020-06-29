import React, { Fragment, useState } from 'react'

const Question = () => {
  const [quantity, saveQuantity] = useState(0)

  // Read budget
  const defineBudget = e => {
    saveQuantity(parseInt(e.target.value, 10))
  }

  // Submit
  const addBudget = e => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <h2>Enter your budget</h2>

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
