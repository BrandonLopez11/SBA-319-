import Comment from '../models/commentModel.mjs';

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createComment = async (req, res) => {
    const comment = new Comment(req.body);
    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        Object.assign(comment, req.body);
        const updatedComment = await comment.save();
        res.json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });

        await comment.remove();
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
