import React, { Fragment } from 'react'

const BudgetControl = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: ${budget}</div>
      <div className="alert">Expense: ${remaining}</div>
    </Fragment>
  )
}

export default BudgetControl
