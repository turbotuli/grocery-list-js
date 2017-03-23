describe('GroceryList', () => {
  describe('new GroceryList()', () => {
    it('takes arguments for the store name and date', () => {
      let groceryList = new GroceryList('Market Basket', '2016/09/02')

      expect(groceryList).toBeDefined()
      expect(groceryList.title).toBe('Market Basket')
      expect(groceryList.date).toBe('2016/09/02')
    })

    it('initalizes an empty array of items', () => {
      let groceryList = new GroceryList('Market Basket', '2016/09/02')

      expect(groceryList.items).toEqual([])
    })
  })

  describe('addItem()', () => {
    it('adds an item to the grocery list', () => {
      let bread = new GroceryItem('Loaf of bread')
      let groceryList = new GroceryList('Market Basket', '2016/09/02')
      groceryList.addItem(bread)

      expect(groceryList.items).toEqual([bread])
    })
  })

  describe('toHTML()', () => {
    let html

    beforeEach(() => {
      let groceryList = new GroceryList('Market Basket', '2016/09/02')
      groceryList.addItem(new GroceryItem('Eggs', 12))
      groceryList.addItem(new GroceryItem('Loaf of bread'))
      groceryList.addItem(new GroceryItem('Gallon of milk', 2))
      html = groceryList.toHTML()
    })

    it('presents the store name as the primary heading', () => {
      expect(html).toMatch('<h1>Market Basket</h1>')
    })

    it('contains an unordered list', () => {
      expect(groceryList.toHTML()).toMatch('<ul>')
      expect(groceryList.toHTML()).toMatch('</ul>')
    })

    it('contains the grocery items and quantities as list elements', () => {
      expect(groceryList.toHTML()).toMatch('<li>(12) Eggs</li>')
      expect(groceryList.toHTML()).toMatch('<li>(1) Loaf of bread</li>')
      expect(groceryList.toHTML()).toMatch('<li>(2) Gallon of milk</li>')
    })
  })
})
