const { test, jest, expect } = require('@jest/globals');
const request = require('supertest');
const express = require('express');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const router = require('../routes/routes.js');

const app = new express();
app.use('/', router);

const mock = new MockAdapter(axios);

mock.onGet('https://api.github.com/repos/test1/testRepo1/pulls').reply(
  200,
  [
    {
      title: 'test1a',
      commits_url: 'test1a',
    },
    {
      title: 'test1b',
      commits_url: 'test1b',
    }],
);

mock.onGet('test1a').reply(
  200,
  [0, 1, 2, 3, 4],
);

mock.onGet('test1b').reply(
  200,
  [0, 1, 2, 3],
);

mock.onGet('https://api.github.com/repos/test2/testRepo2/pulls').reply(
  200,
  [
    {
      title: 'test2a',
      commits_url: 'test2a',
    },
  ],
);

mock.onGet('test2a').reply(200, []);

describe('Open Pull Request Tests', () => {
  test('true should equal true', () => {
    expect(true).toBe(true);
  });

  test('responds to / and sends the client html page', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=UTF-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("<div id='root'>Loading page</div>");
  });

  test('responds to /open-pulls for url test1', async () => {
    const finalData = JSON.stringify([
      { pull_request_title: 'test1a', number_of_commits: 5 },
      { pull_request_title: 'test1b', number_of_commits: 4 },
    ]);

    const res = await request(app)
      .get('/open-pulls')
      .query({ url: 'https://github.com/test1/testRepo1' });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual(finalData);
  });

  test('responds to /open-pulls for test2 url', async () => {
    const finalData = JSON.stringify([
      { pull_request_title: 'test2a', number_of_commits: 0 },
    ]);

    const res = await request(app)
      .get('/open-pulls')
      .query({ url: 'https://github.com/test2/testRepo2' });
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual(finalData);
  });

  test('responds to /open-pulls for an invalid url', async () => {
    const finalData = 'Error: undefined';

    const res = await request(app)
      .get('/open-pulls')
      .query({ url: 'incorrect-url' });
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual(finalData);
  });
});
