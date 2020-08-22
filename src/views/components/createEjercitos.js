const EjercitoClass = require('./ejercitosComponent'),
addPowerToUnity = require('./addPowerToUnityComponent');

let Chinos = new EjercitoClass();
let Ingleses = new EjercitoClass();
let Bizantinos = new EjercitoClass();

// 1. asign values to the ejercitos
Chinos.civilization = 'Chinos';
Ingleses.civilization = 'Ingleses';
Bizantinos.civilization = 'Bizantinos';

Chinos._id = '4nl4oy0kdxi93q9';
Ingleses._id = '4nl4oy0kdxi93qa';
Bizantinos._id = '4nl4oy0kdxi93qb';

// 2. Chinos
Chinos.piqueros.set_soldier = 2;
Chinos.arqueros.set_soldier = 25;
Chinos.caballeros.set_soldier = 2;

// 3. Ingleses
Ingleses.piqueros.set_soldier = 10;
Ingleses.arqueros.set_soldier = 10;
Ingleses.caballeros.set_soldier = 10;

// 4. Bizantinos
Bizantinos.piqueros.set_soldier = 5;
Bizantinos.arqueros.set_soldier = 8;
Bizantinos.caballeros.set_soldier = 15;

// set points
let collectionEjercitos = [Chinos, Ingleses, Bizantinos];
const setPoints = () => {
    collectionEjercitos.forEach(obj => {
        obj.piqueros.score = ((obj.piqueros.set_soldier) 
        ? (obj.piqueros.set_soldier * obj.piqueros.score) : (obj.piqueros.default * obj.piqueros.score))

        obj.arqueros.score = ((obj.arqueros.set_soldier) 
        ? (obj.arqueros.set_soldier * obj.arqueros.score) : (obj.arqueros.default * obj.arqueros.score))

        obj.caballeros.score = ((obj.caballeros.set_soldier) 
        ? (obj.caballeros.set_soldier * obj.caballeros.score) : (obj.caballeros.default * obj.caballeros.score))

        obj.points = obj.piqueros.score + obj.arqueros.score + obj.caballeros.score;
    })
}
setPoints();

// 5. points



module.exports = { collectionEjercitos, setPoints };