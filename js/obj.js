function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = () => console.log(this.name);
}
const player1 = new Player("habert", "X");
const player2 = new Player("jean", "Y");
player1.sayName();
player2.sayName();
