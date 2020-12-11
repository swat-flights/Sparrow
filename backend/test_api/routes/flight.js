const express = require('express');
const router = express.Router();
const response = require('../utils/response');
const flightController = require('../controllers/flight');

//routes
router.get('/flight', list);
router.get('/flight/:id', getOne)
router.post('/flight', create);
router.patch('/flight/:id', update)
router.delete('/flight/:id', remove)

//routes handlers
async function list(req, res) {
  const origin = req.query.origin
  const destination = req.query.destination
  const departure = req.query.departure
  const arrival = req.query.arrival

  //if not query params, get all documents
  !origin && !destination && !departure && !arrival?
  await flightController.getAllFlights()
    .then((flights) => response.success(req, res, flights, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
    // await flightController.filterFlights(req.query)
  :await flightController.filterFlights(origin, destination, departure, arrival)
    .then((flights) => response.success(req, res, flights, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
};

async function getOne(req, res) {
  const flightId = req.params.id
  await flightController.getOneFlight(flightId)
    .then((flight) => response.success(req, res, flight, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
}

async function create(req, res) {
  const data = req.body
  await flightController.newFlight(data)
    .then((flight) => response.success(req, res, flight, 201))
    .catch((error) => response.error(req, res, 'Error on flight creation', 500, error))
}

async function update(req, res) {
  const id = req.params.id
  const newData = req.body
  await flightController.updateFlight(id, newData)
    .then((updatedFlight) => response.success(req, res, updatedFlight, 200))
    .catch((error) => response.error(req, res, 'Error updating', 500, error))
}

async function remove(req, res) {
  const id = req.params.id
  await flightController.removeFlight(id)
    .then((flighDeleted) => response.success(req, res, `Flight with id [${flighDeleted._id}]: correctly removed`, 200))
    .catch((error) => response.success(req, res, 'Internal Server Error', 500, error))
}
module.exports = router;
