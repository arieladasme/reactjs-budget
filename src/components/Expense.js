import React from 'react'
import PropTypes from 'prop-types'

const Expense = ({ expense }) => (
  <li className="gastos">
    <p className="animate__animated animate__fadeIn">
      {expense.name}
      <span className="gasto">${expense.quantity}</span>
    </p>
  </li>
)

Expense.propTypes = {
  expense: PropTypes.object.isRequired,
}
export default Expense
