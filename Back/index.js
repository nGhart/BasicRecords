const express = require('express');
const cors = require('cors');
const app = express();
//const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectToDb = require('./config/connectToDb');
const animalController = require('./controller/animalController');
const diseaseController = require('./controller/diseaseController');
const feedController = require('./controller/feedController');
const matingController = require('./controller/matingController');
const medController = require('./controller/medController');
const quarantineController = require('./controller/quarantineControllers');
const vaccinationController = require('./controller/vaccinationController');
const profileController = require('./controller/profileController');

app.use(express.json());
app.use(cors());

dotenv.config();

connectToDb();

app.get('/animals', animalController.getAllAnimals);
app.post('/animals', animalController.createAnimal);
app.put('/animals/:id', animalController.editAnimal);
app.delete('/animals/:id', animalController.deleteAnimal);

app.get('/feeds', feedController.getAllFeeds);
app.post('/feeds', feedController.createFeed);
app.put('/feeds/:id', feedController.editFeed);
app.delete('/feeds/:id', feedController.deleteFeed);

app.get('/profiles', profileController.getAllProfiles);
app.post('/profiles', profileController.createProfile);
app.put('/profiles/:id', profileController.editProfile);
app.delete('/profiles/:id', profileController.deleteProfile);

app.get('/diseases', diseaseController.getAllDiseases);
app.post('/diseases', diseaseController.createDisease);
app.put('/diseases/:id', diseaseController.editDisease);
app.delete('/diseases/:id', diseaseController.deleteDisease);

app.get('/matings', matingController.getAllMatings);
app.post('/matings', matingController.createMating);
app.put('/matings/:id', matingController.editMating);
app.delete('/matings/:id', matingController.deleteMating);

app.get('/meds', medController.getAllMeds);
app.post('/meds', medController.createMed);
app.put('/meds/:id', medController.editMed);
app.delete('/meds/:id', medController.deleteMed);

app.get('/quarantines', quarantineController.getAllQuarantines);
app.post('/quarantines', quarantineController.createQuarantine);
app.put('/quarantines/:id', quarantineController.editQuarantine);
app.delete('/quarantines/:id', quarantineController.deleteQuarantine);

app.get('/vaccinations', vaccinationController.getAllVaccinations);
app.post('/vaccinations', vaccinationController.createVaccination);
app.put('/vaccinations/:id', vaccinationController.editVaccination);
app.delete('/vaccinations/:id', vaccinationController.deleteVaccination);

app.get('/', (req, res) => {
  res.send('hello');
});

PORT = 5000;

app.listen(PORT, function () {
  console.log('server is listening on ' + PORT);
});
