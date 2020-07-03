import React, { useState } from 'react'

const Form = () => {
  return (
    <form>
      <h2>Add your expenses</h2>

      <div className="campo">
        <label>Name Expense</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="example: Cinema"
        />
      </div>

      <div className="campo">
        <label>Amount Expense</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="example: 400"
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
