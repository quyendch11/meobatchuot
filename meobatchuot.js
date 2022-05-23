class Rat {
    name;
    weight;
    speedMouse;
    status;
    say;

    constructor(name, weight, speedMouse, status, say, speed) {
        this.name = name;
        this.weight = weight;
        this.speedMouse = speed;
        this.status = status;
        this.say = say;
    }

    setNameMouse(name) {
        this.name = name;
    }

    getNameMouse() {
        return this.name;
    }

    setWeightMouse(weight) {
        this.weight = weight;
    }

    getWeightMouse() {
        return this.weight;
    }

    setSpeedMouse(speed) {
        this.speedMouse = speed;
    }

    getSpeedMouse() {
        return this.speedMouse;
    }

    setStatusMouse(status) {
        this.status = status;
    }

    getStatusMouse() {
        if (this.status) {
            document.write("mouse alive </br> ");
        } else {
            document.write("mouse was died </br>");
        }
    }

    Die() {
        return this.status = false;
    }

    noDie() {
        return this.status = true;
    }

    actionMouse(say) {
        this.say = say;
    }
}

class Cat {
    name;
    weight;
    speedCat;
    say;

    constructor(name, weight, speed, say) {
        this.name = name;
        this.weight = weight;
        this.speedCat = speed;
        this.say = say;
    }

    setNameCat(name) {
        this.name = name;
    }

    getNameCat() {
        return this.name;
    }

    setWeightCat(weight) {
        this.weight = weight;
    }

    getWeightCat() {
        return this.weight;
    }

    setSpeedCat(speed) {
        this.speedCat = speed;
    }

    getSpeedCat() {
        return this.speedCat;
    }

    getSayCat(say) {
        this.say = say;
    }

    catchTheMouse(rat) {
        if (rat.speedMouse < this.speedCat) {
            document.write("Mèo đã bắt được chuột </br>")
        } else {
            document.write("Mèo không bắt được chuột </br>")
        }
    }

    eatTheMouse(rat) {
        if (rat.status) {
            // this.weight = this.weight + rat.weight;
            rat.status = false;
            document.write("Chuột đã bị mèo ăn <br>");
            // return this.weight
        }

    }
    catWeight(rat)
    {
        return  this.weight += rat.weight;
    }
}
