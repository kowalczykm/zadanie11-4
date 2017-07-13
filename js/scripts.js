function Phone(brand, price, color, dimensions) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.dimensions = dimensions;
}

Phone.prototype.printInfo = function(){
    console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the dimensions are " + this.dimensions + ".");
};

var SamsungGalaxyS6 = new Phone("Samsung", 1800, "blue", "120x12x231");
var iPhone6S = new Phone("Apple", 2000, "black", "332x32x43");
var OnePlusOne = new Phone("One Plus", 1500, "white", "546x234x22");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();