class GroceryList {
  constructor(title, date) {
    this.title = title
    this.date = date
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  toHTML() {
    let html = `<h1>${this.title}</h1>`
    html += '<ul>'
    this.items.forEach((item) => {
      html += `<li>${item.toString()}</li>`
    })
    html += '</ul>'
    return html
  }
}
