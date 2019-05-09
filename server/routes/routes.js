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

        // file is symbolic link in public
        // e.g. img http://localhost:8000/files/ban951243/ban951243_1.png
        res.status(200).json(doc);
      });
  
  });
};
