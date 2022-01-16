const axios = require('axios');

const findNumberOfCommits = (commitURL) => 1;

module.exports = {
  get(req, res) {
    const openPRCommits = [];
    // GOAL: need to return the number of commits for each open pull request
    // return the reulst as [ {pull request title: 'xxx', number of commits: 8}, {}, {}]
    // repoURL is the github repository url that the client is requesting
    const repoURL = req.query.url;
    // usernameAndRepo is the section of repoURL that only contains the 'username/repo'
    const usernameAndRepo = repoURL.slice(repoURL.indexOf('.com/') + 5);
    console.log(usernameAndRepo);
    // pullRequestURL will be the URL we need to use to fetch information about pull requests
    const pullRequestURL = `https://api.github.com/repos/${usernameAndRepo}/pulls`;
    // then we need to request from the github API the information about that repo's pulls
    axios.get(pullRequestURL)
      .then(async (response) => {
        // console.log('here', res.data);
        for (let i = 0; i < response.data.length; i += 1) {
          console.log(i, '\n\n', response.data[i].title, '\n', response.data[i].commits_url);
          const numCommits = await findNumberOfCommits(response.data[i].commits_url);
          openPRCommits.push({
            pull_request_title: response.data[i].title,
            number_of_commits: numCommits,
          });
        }
        return openPRCommits;
      })
      .then((response) => {
        console.log(response);
        res.send(response);
      });
    // after this we need to change the information to only display open pull requests
    // after this we need to request from the github API the number of commits per each open request
  },
};
