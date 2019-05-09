// mock response from the api to use in the tests
const mockApiResponseFailure = {
  "data": {
    "status": "error",
    "code": "apiKeyInvalid",
    "message": "Your API key is invalid or incorrect. Check your key, or go to https://newsapi.org to create a free API key."
  },
  "status": 401,
  "statusText": "Unauthorized",
  "headers": {
    "pragma": "no-cache",
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-cache",
    "expires": "-1"
  },
  "config": {
    "transformRequest": {},
    "transformResponse": {},
    "timeout": 0,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "headers": {
      "Accept": "application/json, text/plain, */*"
    },
    "method": "get",
    "url": "https://newsapi.org/v2/top-headlines?country=us&apiKey=14d0e3b7a4c014287a7bf2b3b52d5edf3"
  },
  "request": {}
}

export default mockApiResponseFailure;