const queueModel = require('../models/queue');

exports.oneRandomPic = (req, res, next) => {
  // count then exec
  queueModel.count().exec((err, count) => {
    // random
    const random = Math.floor(Math.random() * count);
    // find one, skip_random
    queueModel.findOne().skip(random).exec(
      (err1, doc) => {
        if(err1)
          console.error(err);
        res.status(200).json(doc);
      });
  
  });
};
