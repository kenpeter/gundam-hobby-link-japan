const queueModel = require("../models/queue");

exports.oneRandomPic = (req, res, next) => {
  // count then exec
  queueModel.count().exec((err, count) => {
    // random
    const random = Math.floor(Math.random() * count);
    // find one, skip_random
    queueModel
      .findOne()
      .skip(random)
      .exec((err1, doc) => {
        if (err1) console.error(err1);

        // file is symbolic link in public
        // e.g. img http://localhost:8000/files/ban951243/ban951243_1.png
        res.status(200).json(doc);
      });
  });
};

// 5cd38d4ab12dcc8d418c0108
exports.onePic = (req, res, next) => {
  let query = { _id: req.params.id };

  queueModel.findOne(query, (err, doc) => {
    res.status(200).json(doc);
  });
};

exports.likeit = (req, res, next) => {
  let query = { _id: req.params.id };
  queueModel.findOneAndUpdate(
    query,
    { $inc: { likeit: 1 } },
    { upsert: true },
    (err, doc) => {
      if (err) return res.send(500, { error: err });
      return res.send({ update: "success" });
    }
  );
};
