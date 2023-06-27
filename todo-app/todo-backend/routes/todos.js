const express = require('express');
const redis = require('../redis')
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  let get_todos = await redis.getAsync('get_todos')
  if (!get_todos) get_todos = 1
  else get_todos = parseInt(get_todos) + 1
  await redis.setAsync('get_todos', get_todos)
  console.log('get_todos', get_todos)

  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  let added_todos = await redis.getAsync('added_todos')
  if (!added_todos) added_todos = 1
  else added_todos = parseInt(added_todos) + 1
  await redis.setAsync('added_todos', added_todos)
  console.log('added_todos', added_todos)

  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const toSend = req.todo
  res.json(toSend); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const toChange = req.todo
  if (req.body.text) toChange.text = req.body.text
  toChange.done = req.body.done || false
  await toChange.save()
  res.json(toChange); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
