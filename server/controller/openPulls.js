const axios = require('axios');

module.exports = {
  get(req, res) {
    // GOAL: return the number of commits for each open pull request
    // return the result as [ {pull_request_title: 'xxx', number_of_commits: 8}, {}, {}, ....]
    const openPRCommits = [];
    const promises = [];
    const config = {
      headers: {
        Authorization: process.env.GITHUB_TOKEN,
      },
    };
    console.log(req);
    // repoURL is the github repository url that the client is requesting
    const repoURL = req.query.url;
    // usernameAndRepo is the section of repoURL that only contains the 'username/repo'
    const usernameAndRepo = repoURL.slice(repoURL.indexOf('.com/') + 5);
    // pullRequestURL will be the URL we need to use to fetch information about pull requests
    const pullRequestURL = `https://api.github.com/repos/${usernameAndRepo}/pulls`;
    // then we need to request from the github API the information about that repo's pulls
    axios.get(pullRequestURL, config)
      .then(async (response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          // push each GET request into an array
          promises.push(
            axios.get(response.data[i].commits_url, config)
              .then((result) => {
                // after the axios request push the result in openPRCommits
                console.log('result', result.data.length);
                openPRCommits.push({
                  pull_request_title: response.data[i].title,
                  number_of_commits: result.data.length,
                });
              }),
          );
        }
        // once all of the promises are finished then send the results
        Promise.all(promises)
          .then(() => {
            console.log('SENDING', openPRCommits);
            res.send(openPRCommits);
          });
      })
    // if there is an error, then send the error to the client
    // github does have a rate limit on requests,
    // if requesting too much then the client needs a GITHUB TOKEN or to wait until it clears
      .catch((err) => {
        // we send a 200, because we want the message to display for the user
        res.status(200).send(`Error: ${err.response.statusText}`);
      });
  },
};
