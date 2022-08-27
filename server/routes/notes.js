import express from 'express';

import { getnotes, createPost, updatePost, deletePost } from '../controllers/notes.js';

const router = express.Router();


// http://localhost:5000/notes

router.get('/', getnotes);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;