let request = $.ajax({
  method: 'GET',
  url: '/groceries.json'
})

request.done((data) => {
  let groceries = JSON.parse(data)
  let groceryList = new GroceryList('', Date())
  groceries["groceries"].forEach((item) => {
    let newItem = new GroceryItem(item.name, item.quantity)
    groceryList.addItem(newItem)
  })

  let html = groceryList.toHTML()
  $("#main").append(html)
})

$(document).ready(() => {
  // Exceeds Expectation Part 2 Code Here
})
