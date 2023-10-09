const Animal = require('../models/animal');

const getAllAnimals = async (request, response) => {
  try {
    const animals = await Animal.find();
    response.json({ animals });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createAnimal = async (request, response) => {
  try {
    const name = request.body.name;
    const sex = request.body.sex;
    const dob = request.body.dob;
    const bred = request.body.bred;
    const breed = request.body.breed;
    const description = request.body.description;
    const pic = request.body.pic;
    const dame = request.body.dame;
    const sire = request.body.sire;
    const status = request.body.status;
    const grandDame = request.body.grandDame;
    const grandSire = request.body.grandSire;
    const weightCurrent = request.body.weightCurrent;
    const weightSale = request.body.weightSale;
    const totalService = request.body.totalService;
    const totalLitters = request.body.totalLitters;
    const totalKits = request.body.totalKits;
    const aliveKits = request.body.aliveKits;
    const deadKits = request.body.deadKits;
    const soldKits = request.body.soldKits;
    const butcheredKits = request.body.butcheredKits;

    const animal = await Animal.create({
      name,
      sex,
      dob,
      bred,
      breed,
      description,
      dame,
      sire,
      grandDame,
      grandSire,
      weightCurrent,
      weightSale,
      totalService,
      totalLitters,
      totalKits,
      aliveKits,
      deadKits,
      soldKits,
      butcheredKits,
      pic,
      status,
    });
    response.json({ animal });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editAnimal = async (request, response) => {
  try {
    //get ID
    const animalId = request.params.id;
    //get data
    const name = request.body.name;
    const sex = request.body.sex;
    const dob = request.body.dob;
    const bred = request.body.bred;
    const breed = request.body.breed;
    const description = request.body.description;
    const pic = request.body.pic;
    const dame = request.body.dame;
    const sire = request.body.sire;
    const status = request.body.status;
    const grandDame = request.body.grandDame;
    const grandSire = request.body.grandSire;
    const weightCurrent = request.body.weightCurrent;
    const weightSale = request.body.weightSale;
    const totalService = request.body.totalService;
    const totalLitters = request.body.totalLitters;
    const totalKits = request.body.totalKits;
    const aliveKits = request.body.aliveKits;
    const deadKits = request.body.deadKits;
    const soldKits = request.body.soldKits;
    const butcheredKits = request.body.butcheredKits;
    //update
    await Animal.findOneAndUpdate(
      { _id: animalId },
      {
        name,
        sex,
        dob,
        bred,
        breed,
        description,
        dame,
        sire,
        grandDame,
        grandSire,
        weightCurrent,
        weightSale,
        totalService,
        totalLitters,
        totalKits,
        aliveKits,
        deadKits,
        soldKits,
        status,
        butcheredKits,
        pic,
      }
    );
    //find updated
    const animal = await Animal.findById(animalId);
    //return updated
    response.json({ animal });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteAnimal = async (request, response) => {
  try {
    const animalId = request.params.id;
    await Animal.deleteOne({ _id: animalId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllAnimals,
  createAnimal,
  editAnimal,
  deleteAnimal,
};
