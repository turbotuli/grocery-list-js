let request = $.ajax({
  method: 'GET',
  url: '/groceries.json'
})

let dataToHtml = (data) => {
  let groceries = JSON.parse(data)
  let groceryList = new GroceryList('', Date())
  groceries["groceries"].forEach((item) => {
    let newItem = new GroceryItem(item.name, item.quantity)
    groceryList.addItem(newItem)
  })

  let html = groceryList.toHTML()
  $("#main").html(html)
}

request.done((data) => {
  dataToHtml(data)
})

$(document).ready(() => {
  $('#submit').on('click', (event) => {
    event.preventDefault()
    let newItem = new GroceryItem($('#grocery_name').val(), $('#grocery_quantity').val())
    let post = $.ajax({
      method: 'POST',
      data: { name: newItem.name, quantity: newItem.quantity },
      url: '/groceries.json'
    })

    post.done(() => {
      $('ul').append('<li>' + newItem.toString() + '</li>')
      $('#grocery_name').val('')
      $('#grocery_quantity').val('')
    })
  })
})
