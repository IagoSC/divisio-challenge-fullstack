import express from 'express'
import pokemonController from '../controllers/pokemon'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/pokemons', (req, res) => {
  console.log(req.params);
  const result = pokemonController.getAllPokemons(20, 0);
})

export default router
