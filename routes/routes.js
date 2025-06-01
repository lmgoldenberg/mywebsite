import {Router} from 'express'
import path from 'path';
const router = Router();
router.get('/', (req, res) => {
    res.sendFile(path.resolve('static/home.html'))
})
export default router;