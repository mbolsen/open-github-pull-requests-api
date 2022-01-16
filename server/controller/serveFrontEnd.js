const path = require('path');

module.exports = {
  get(req, res) {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  },
};
