import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/postController.mjs';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;