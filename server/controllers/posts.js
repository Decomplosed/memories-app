import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = PostMessage.find();
  } catch (error) {}
};

export const createPost = (req, res) => {
  res.send('Post Creation');
};
