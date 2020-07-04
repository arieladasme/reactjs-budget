export const reviewBudget = (budget, remaining) => {
  let bgcolor

  if (budget / 4 > remaining) {
    bgcolor = 'alert alert-danger'
  } else if (budget / 2 > remaining) {
    bgcolor = 'alert alert-warning'
  } else {
    bgcolor = 'alert alert-success'
  }

  return bgcolor
}
