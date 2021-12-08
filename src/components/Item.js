
 export class Item{

  static lastId = 0 // static é como se fosse uma variavel no class

  constructor(text){
    this.id = (((Item.lastId++) + (Math.random() * 1000)))
    this.text = text;
    this.done = false;
  }
}