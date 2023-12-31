const Feed = require('../models/feed');

const getAllFeeds = async (request, response) => {
  try {
    const feeds = await Feed.find();
    response.json({ feeds });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const createFeed = async (request, response) => {
  try {
    const feedName = request.body.feedName;
    const feedQuantity = request.body.feedQuantity;
    const feedDatePurchased = request.body.feedDatePurchased;
    const feedServing = request.body.feedServing;
    const status = request.body.status;

    const feed = await Feed.create({
      feedName,
      feedQuantity,
      feedDatePurchased,
      feedServing,
      status,
    });
    response.json({ feed });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const editFeed = async (request, response) => {
  try {
    const feedId = request.params.id;

    const feedName = request.body.feedName;
    const feedQuantity = request.body.feedQuantity;
    const feedDatePurchased = request.body.feedDatePurchased;
    const feedServing = request.body.feedServing;
    const status = request.body.status;

    await Feed.findOneAndUpdate(
      { _id: feedId },
      {
        feedName,
        feedQuantity,
        feedDatePurchased,
        feedServing,
        status,
      }
    );
    const feed = await Feed.findById(feedId);
    response.json({ feed });
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

const deleteFeed = async (request, response) => {
  try {
    const feedId = request.params.id;
    await Feed.deleteOne({ _id: feedId });
    response.send('Deleted!');
  } catch (error) {
    console.log(error.message);
    response.sendStatus(400);
  }
};

module.exports = {
  getAllFeeds,
  createFeed,
  deleteFeed,
  editFeed,
};
