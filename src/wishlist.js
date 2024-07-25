import Car from "./car.js";

class WishList {
    constructor() {
        //Initialize the list to an empty array
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year){
        const nextCar = new Car (++this.nextId, make, model, year);
        this.list.push(nextCar);
    }

    remove(carId) {
        this.list = this.list.filter((car) => {
        return car.id != carId;
        });
    }

}

export default WishList;