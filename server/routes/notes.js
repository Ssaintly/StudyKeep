import express from 'express';

import { getnotes, createPost} from '../controllers/notes.js';

const router = express.Router();


// http://localhost:5000/notes

router.get('/', getnotes);
router.post('/', createPost);

export default router;