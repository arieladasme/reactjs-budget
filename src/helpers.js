export const reviewBudget = (budget, remaining) => {
  let bgcolor

  if (budget / 4 > remaining) {
    bgcolor = 'alert alert-danger animate__animated animate__flash'
  } else if (budget / 2 > remaining) {
    bgcolor = 'alert alert-warning animate__animated animate__flash'
  } else {
    bgcolor = 'alert alert-success'
  }

  return bgcolor
}
