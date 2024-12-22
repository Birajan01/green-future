import Idea from '../models/Idea.js';
import { validateIdea } from '../utils/validators.js';

export const createIdea = async (req, res) => {
  try {
    const { title, description, category, impact, resources } = req.body;
    
    // Validate input
    const validationError = validateIdea({ title, description, category, impact, resources });
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }
    
    const idea = await Idea.create({
      title,
      description,
      category,
      impact,
      resources,
      user: req.user._id,
    });

    const populatedIdea = await idea.populate('user', 'name email');
    res.status(201).json(populatedIdea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getIdeas = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const ideas = await Idea.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Idea.countDocuments();

    res.json({
      ideas,
      page,
      pages: Math.ceil(total / limit),
      total
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getIdeaById = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id)
      .populate('user', 'name email')
      .populate('comments.user', 'name')
      .populate('votes.user', 'name');
    
    if (idea) {
      res.json(idea);
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const voteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    
    if (!idea) {
      return res.status(404).json({ message: 'Idea not found' });
    }

    const alreadyVoted = idea.votes.find(
      (vote) => vote.user.toString() === req.user._id.toString()
    );

    if (alreadyVoted) {
      idea.votes = idea.votes.filter(
        (vote) => vote.user.toString() !== req.user._id.toString()
      );
    } else {
      idea.votes.push({ user: req.user._id });
    }

    const updatedIdea = await idea.save();
    const populatedIdea = await updatedIdea
      .populate('user', 'name email')
      .populate('votes.user', 'name');

    res.json(populatedIdea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};