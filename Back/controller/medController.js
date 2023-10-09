const Med = require('../models/medication');

const getAllMeds = async (request, response) => {
  try {
    const meds = await Med.find();
    response.json({ meds });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createMed = async (request, response) => {
  try {
    const name = request.body.name;
    const expiryDate = request.body.expiryDate;
    const number = request.body.number;
    const supplier = request.body.supplier;
    const status = request.body.status;

    const med = await Med.create({
      name,
      expiryDate,
      number,
      supplier,
      status,
    });
    response.json({ med });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editMed = async (request, response) => {
  try {
    const medId = request.params.id;
    const name = request.body.name;
    const expiryDate = request.body.expiryDate;
    const number = request.body.number;
    const supplier = request.body.supplier;
    const status = request.body.status;

    await Med.findOneAndUpdate(
      { _id: medId },
      {
        name,
        expiryDate,
        number,
        supplier,
        status,
      }
    );
    //find updated
    const med = await Med.findById(medId);
    //return updated
    response.json({ med });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteMed = async (request, response) => {
  try {
    const medId = request.params.id;
    await Med.deleteOne({ _id: medId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllMeds,
  createMed,
  deleteMed,
  editMed,
};
