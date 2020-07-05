import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Form = ({ saveExpense, saveCreateExpense }) => {
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

    saveExpense(expense)
    saveCreateExpense(true)

    // Reset form
    saveName('')
    saveQuantity(0)
  }

  return (
    <form onSubmit={addExpense}>
      {/* <h2>Add your expenses</h2> */}
      <h2>Ingresa tus gastos</h2>
      {error ? (
        <Error message="The fields are mandatory or incorrect quote" />
      ) : null}
      <div className="campo">
        <label>Descripción</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="ejemplo: Cerveza"
          value={name}
          onChange={e => saveName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Valor gastado</label>
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
        value="Ingresar gasto"
      />
    </form>
  )
}

Form.propTypes = {
  saveExpense: PropTypes.func.isRequired,
  saveCreateExpense: PropTypes.func.isRequired,
}

export default Form
