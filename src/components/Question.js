import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
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
    saveBudget(quantity)
    saveRemaining(quantity)
    updateQuestion(false)
  }

  return (
    <Fragment>
      <h2>{/* Enter your budget */}Ingresa tu presupuesto</h2>
      {error ? <Error message="Presupuesto mal ingresado" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          /* placeholder="Budget" */
          placeholder="Ingresa presupuesto"
          onChange={defineBudget}
        />
        <input
          type="submit"
          className="u-full-width btn from-top "
          /* value="Define budget" */
          value="Ingresar"
        />
      </form>
    </Fragment>
  )
}

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
}
export default Question
