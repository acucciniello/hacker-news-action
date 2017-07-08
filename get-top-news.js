module.exports = getTopNews

// var path = require('path')
// var pathToEnv = path.join(__dirname, '.env')
// require('dotenv').config({path: pathToEnv})
// const https = require('https')
const got = require('got')
var Promise = require('promise')
var formatOutput = require('./format-output.js')
var apiKey = process.env.APIKEY
// var apiKey = '8b87b4978b22493cadeb351cce01d52a'
var url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + apiKey
// const request = require('request')
var rp = require('request-promise')
var options = {
    uri: url,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    family: 4,
    json: true // Automatically parses the JSON string in the response
}

function getTopNews() {
  return new Promise(function (resolve, reject) {
    rp(options)
        .then(function (data) {
          var output = formatOutput(data)
          resolve(output)
        })
        .catch(function (err) {
          console.log('error:', err)
          reject(err)
        })
  })
}
/*
  var url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + apiKey
  return new Promise(function (resolve, reject) {
    request({url: url, {family: 4}}, function (error, response, body) {
      if (error) {
        console.log('error:', error)
        reject(error)
      } else {
        console.log('statusCode:', response && response.statusCode)
        console.log('body:', body)
        var parsedRes = JSON.parse(body)
        var output = formatOutput(parsedRes)
        resolve(output)
      }
    })
  })
}*/

/*
function getTopNews (callback) {
  var url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + apiKey
    got(url, {family: 4})
      .then((response) => {
        var parsedRes = JSON.parse(response.body)
        var output = formatOutput(parsedRes)
        callback(null, output)
      })
      .catch((error) => {
        callback(error)
      })
}*/

/*
function getTopNews() {
  var url = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=' + apiKey
  return new Promise(function (resolve, reject) {
    https.get('https://google.com', (res) => {
      console.log('statusCode:', res.statusCode)
      console.log('headers:', res.headers)

      res.on('data', (d) => {
        var parsedRes = JSON.parse(d)
        var output = formatOutput(parsedRes)
        resolve(output)
      })
    }).on('error', (e) => {
      reject(e)
    })
  })
}*/
