# Request Samples

In this repo I test 3 different ways to make requests,, the first is just a simple API gget request with the *request-promise* library, the second one is using the allegedly faster *req-fast* library and the last benchmark is a web scraping request using *cheerio* to process the HTML body.

## Usage

This is for running the benchmark
```javascript
// Fetch the repo
npm install
npm test
```

This is for using the actual function
 - npm install request-promise
 - copy index.js to your code and rename it to whatever you wish
 - import index.js
 - use the function apiRequest(YOUR-URL-HERE) as you please

*NOTE: the function returns a promise which means you can use it inside an async function*

## index.js

Index file contains 3 sample functions of a get request, the first one (usually the fastest) uses the request-promise module, the second one uses the req-fast module which is *sometimes* faster and lastly the scrapRequest scraps the URL (just for benchmarking.

## example.js

This file is the final implementation of the promisified functions and simple benchmarking script, it uses asynchronous functions in order to keep everything niceand ES6 compliant.
