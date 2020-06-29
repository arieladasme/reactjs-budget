import React, { Fragment } from 'react'

const Question = () => {
  return (
    <Fragment>
      <h2>Enter your budget</h2>

      <form>
        <input type="number" className="u-full-width" placeholder="Budget" />
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Define budfget"
        />
      </form>
    </Fragment>
  )
}

export default Question
