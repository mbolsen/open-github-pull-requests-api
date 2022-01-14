module.exports = {
  get: function (req, res) {
    //NOTE: this is the initial get request that will just return the req, this will change in a future commit.
    console.log(req);
    res.status(400).end(req);
  }
}