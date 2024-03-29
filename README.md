# open-github-pull-requests-api

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="github.com/mbolsen/open-github-pull-requests-api">
  </a>

<h3 align="center">GitHub Open Pull Requests API</h3>

  <p align="center">
   This API is designed to return how many commits were made per open pull request for a given GitHub repo.
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#running-the-tests">Running the Tests</a></li>
    <li><a href="#design-choices">Design Choices</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Example response using Postman:
<br/>
<img width="517" alt="Screen Shot 2022-01-17 at 12 30 52 PM" src="https://user-images.githubusercontent.com/89269242/149827715-aa64b540-2341-4903-8f0a-74e23507ffde.png">

Example of the app running from the simple user interface provided
<br/>
<img width="570" alt="Screen Shot 2022-01-17 at 12 33 41 PM" src="https://user-images.githubusercontent.com/89269242/149828070-5e1828d9-919e-4827-862b-848a8dc5174b.png">

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [React.js](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Axios](https://axios-http.com/)
* [Jest](https://www.jestjs.io/)
* [Webpack](https://webpack.js.org/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a copy running:
1. clone the repo -   
   ```sh
   git clone https://github.com/mbolsen/open-github-pull-requests-api.git
   ```
2. install the necessary libraries -   
   ```sh
   npm install
   ```
3. To use the optional simple user interface, you will need to build the webpack run this -
   ```sh 
   npm run build
   ```
4. start the server -
   ```sh 
   npm start
   ```
6. If you want to use the user interface provided and did step 3, then go to localhost:3000 and a page will load with the user interface.
7. If you want to call this API from somewhere other than the user interface provided then send a request to 
      ```sh
      localhost:3000/open-pulls?url=<github url>
      ```
  and the data will be returned.
  
  The data will be returned in the following format:
  ```sh
  [
    { 
      "pull_request_title": 'example-title1',
      "number_of_commits": 4,
    },
    { 
      "pull_request_title": 'example-title2',
      "number_of_commits": 83,
    },
   ]
   ```
   
<!-- Running Tests -->
### Running the tests
  If you would like to run the testing suite, then run this command:
    ```
    npm run test  
    ``` 
  You should see something like this:
  <br/>
  <img width="752" alt="Screen Shot 2022-01-17 at 8 09 46 PM" src="https://user-images.githubusercontent.com/89269242/149864244-3707e524-4316-4022-8b76-a1fa465a04da.png">

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DESIGN CHOICES -->
## Design Choices

There were a few design choices that were made:
  1. I decided to serve the simple user app with the same server, for simplicity purposes.  This app could have been on a different server.
  2. Clean code and seperation of concerns.  There are two large benefits to this.  The first is that it is much easier to read for someone else or myself in the future.  There is also the benefit of easy expansion in the future if desired.  To do this simply make a new controller with the desired functionality and update the routes with the new function.
  3. Lots of comments in the code.  This makes it more readable for others (or ourselves in the future).  I give credit to Ian Swensen's comments repo.  <a href="https://github.com/Ian-Engineer/good-comments">https://github.com/Ian-Engineer/good-comments</a>
  4. The client app is built with React because I enjoy working with React.  There are a handful of other ways it could be built, but I decided on React.  The downside of this is that the webpack needs to be ran to bundle the javascript.  I also considered including the bundle for ease, but ultimately decided not to because it typically isn't included.
  5. I used a process.env file in the root directory.  If a user includes a GITHUB_TOKEN, then the amount of requests to the GitHub API can be higher.  If a GITHUB_TOKEN is not in the .env file in the root directory, then it will still work, but fewer requests can be made.
  6. Testing - Making test calls to the API allows for each line to be tested.  I prefer this over making more tests for smaller functions.  Mocking the data is good because then we don't have to call the actual GitHub API and use up our calls per day.  I also could have added testing from the client side, but since the purpose of this app is an API and not a client app I didn't focus my energy there.
  7. I will continue to think of a more optimized solution.  I enjoyed working with the promises on the get('open-pulls') route.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Matt Olsen - mbolsen@gmail

Project Link: [github.com/mbolsen/open-github-pull-requests-api](github.com/mbolsen/open-github-pull-requests-api)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
  This is the readme template I love to use.  Many thanks to othneildrew!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
