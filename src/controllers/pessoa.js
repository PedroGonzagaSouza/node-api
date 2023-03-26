const nomeServ = require('../services/pessoa')

module.exports = (express)=>{
    
    const router = express.Router()
    router.get('/', async(req, res, next)=>{
        try{
            res.json(nomeServ.getNome(req.query))
        } catch(error) {
            next(error)
        }

    })

    router.get('/banco', async(req, res, next)=>{
        try{
            res.json(await nomeServ.getNomeBanco())
        } catch(error) {
            next(error)
        }
    })

    
}