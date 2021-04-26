const Dog = require('./js/Dog.js');
const Cat = require('./js/Cat.js');
const Hamster = require('./js/Hamster.js');
const Chicken = require('./js/Chicken.js');
const Parrot = require('./js/Parrot.js');
const Goldenfish = require('./js/Goldenfish.js');
const Nemo = require('./js/Nemo.js');

const rexas = new Dog('Rexas', 'rudas');
const rainis = new Cat('Rainis', 'margas');
const keksas = new Hamster('Keksas', 'pilkas');
const cypsius = new Chicken('Cypsius', 'baltas');
const jack = new Parrot('Jack', 'raudonas');
const litas = new Goldenfish('Litas', 'auksinis');
const frenkas = new Nemo('Frenkas', 'vaivorykstinis');


rexas.voice();
rexas.introduce();

rainis.voice();
rainis.introduce();

keksas.voice();
keksas.introduce();

cypsius.voice();
cypsius.introduce();
cypsius.flyAway();

jack.voice();
jack.introduce();
jack.flyAway();

litas.voice();
litas.introduce();
litas.swimAway();
litas.makeWish();

frenkas.voice();
frenkas.introduce();
frenkas.swimAway();