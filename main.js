let chuot = new Rat();
let meo = new Cat();
chuot.setWeightMouse(10);
chuot.getWeightMouse();
chuot.setNameMouse("jerry");
chuot.getNameMouse();
chuot.setSpeedMouse(100);
chuot.getSpeedMouse();
chuot.setStatusMouse(true);
chuot.getStatusMouse();
chuot.actionMouse("chit chit");
document.write("i'm " +  chuot.getNameMouse() + "nang " + chuot.getWeightMouse()
+ " kha nang chay " +  chuot.getSpeedMouse() + " dac diem nhan dang " +  chuot.say + "</br>");
meo.setWeightCat(40);
meo.getWeightCat();
meo.setNameCat("tom");
meo.getNameCat();
meo.setSpeedCat(150);
meo.getSpeedCat();
meo.getSayCat("meo meo");
document.write()
document.write("i'm " +  meo.getNameCat() + "nang " +  meo.getWeightCat()
    + " kha nang chay " +  meo.getSpeedCat()+ " dac diem nhan dang " + meo.say + "</br>");

meo.catchTheMouse(chuot);
meo.eatTheMouse(chuot);
// console.log(meo.catWeight(chuot))
//let catWeight = meo.catWeight(chuot)
document.write( "can nang cua meo sau khi an chuot la : " + meo.catWeight(chuot) + "<br>");
chuot.getStatusMouse();