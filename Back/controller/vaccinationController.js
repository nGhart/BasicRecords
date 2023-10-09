const Vaccination = require('../models/vaccination');

const getAllVaccinations = async (request, response) => {
  try {
    const vaccinations = await Vaccination.find();
    response.json({ vaccinations });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createVaccination = async (request, response) => {
  try {
    const medication = request.body.medication;
    const date = request.body.date;
    const nextDate = request.body.nextDate;
    const status = request.body.status;

    const vaccination = await Vaccination.create({
      medication,
      date,
      nextDate,
      status,
    });
    response.json({ vaccination });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editVaccination = async (request, response) => {
  try {
    const vaccinationId = request.params.id;
    const medication = request.body.medication;
    const nextDate = request.body.nextDate;
    const date = request.body.date;
    const status = request.body.status;
    await Vaccination.findOneAndUpdate(
      { _id: vaccinationId },
      {
        medication,
        date,
        nextDate,
        status,
      }
    );

    const vaccination = await Vaccination.findById(vaccinationId);

    response.json({ vaccination });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteVaccination = async (request, response) => {
  try {
    const vaccinationId = request.params.id;
    await Vaccination.deleteOne({ _id: vaccinationId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllVaccinations,
  createVaccination,
  deleteVaccination,
  editVaccination,
};
