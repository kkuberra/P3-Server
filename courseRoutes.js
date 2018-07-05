const express = require('express')
const router = express.Router()

const queries = require('./courseQueries')


router.get('/', (req, res) => {
  queries.list()
    .then(locations => {
      res.json(locations)
    })   
})

router.get('/:id', (req, res) => {
  queries.read(req.params.id)
    .then(location => {
      res.json(location)
    })
})

router.post('/', (req, res) => {
  queries.create(req.body)
    .then(newLocation => {
      res.json(newLocation)
    })
})

router.delete("/:id", (request, response, next) => {
  queries.delete(request.params.id).then(() => {
    response.status(204).json({
      deleted: true
    });
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update(request.params.id, request.body).then(location => {
    response.json({
      location
    });
  }).catch(next);
});



module.exports = router;