const menu = {
  _meal: '',
  _price: 0,
  set mealToCheck(meal){
    if (typeof(meal) === 'string'){
      return this._meal = meal 
    }
  },
  set priceToCheck(price){
    if (typeof(price) === 'number'){
      return this._price = price
    }
  },
  get todaySpecial(){
    if (this._meal !== null && this._price !== null){
     return `Today’s Special is ${this._meal} for ${'$'+this._price}!`
    } 
    else {
      return 'Meal or price was not set correctly!'
    }
  }
};

menu.mealToCheck = 'sushi'
menu.priceToCheck = Math.floor(Math.random()*100)
console.log(menu.todaySpecial);
