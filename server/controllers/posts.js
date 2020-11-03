import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {}
};

export const createPost = (req, res) => {
  res.send('Post Creation');
};
