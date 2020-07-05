import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { reviewBudget } from '../helpers'

const BudgetControl = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: ${budget}</div>
      <div className={reviewBudget(budget, remaining)}>
        Restante: ${remaining}
      </div>
    </Fragment>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
}
export default BudgetControl
