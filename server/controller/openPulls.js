const axios = require('axios');

module.exports = {
  get(req, res) {
    // PSUEDOCODE:
    // GOAL: need to return the number of commits for each open pull request
    // repoURL is the github repository url that the client is requesting
    const repoURL = req.query.url;
    // usernameAndRepo is the section of repoURL that only contains the 'username/repo'
    const usernameAndRepo = repoURL.slice(repoURL.indexOf('.com/') + 5);
    console.log(usernameAndRepo);
    // pullRequestURL will be the URL we need to use to fetch information about pull requests
    const pullRequestURL = `https://api.github.com/repos/${usernameAndRepo}/pulls`;
    // then we need to request from the github API the information about that repo's pulls
    // after this we need to change the information to only display open pull requests
    // after this we need to request from the github API the number of commits per each open request
    axios.get('https://api.github.com/repos/mbolsen/javascript-app-templates/pulls');
    res.status(400).send('returning request');
  },
};
