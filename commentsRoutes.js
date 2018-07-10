const express = require('express')
const router = express.Router()

const queries = require('./commentsQueries')


router.get('/', (req, res) => {
  queries.list()
    .then(comments => {
      res.json(comments)
    })   
})

router.get('/:id', (req, res) => {
  queries.read(req.params.id)
    .then(comment => {
      res.json(comment)
    })
})

router.post('/', (req, res) => {
  
    queries.create(req.body)
    .then(newComment => {
      res.json(newComment)
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
  queries.update(request.params.id, request.body).then(comment => {
    response.json({
      comment
    });
  }).catch(next);
});



module.exports = router;