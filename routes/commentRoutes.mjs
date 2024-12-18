import express from 'express';
import { getComments, createComment, updateComment, deleteComment } from '../controllers/commentController.mjs';

const router = express.Router();

router.get('/', getComments);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);

export default router;