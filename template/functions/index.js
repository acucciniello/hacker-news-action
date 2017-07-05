// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict'

process.env.DEBUG = 'actions-on-google:*'
const App = require('actions-on-google').ApiAiApp
const functions = require('firebase-functions')

// [START YourAction]
exports.yourAction = functions.https.onRequest((request, response) => {
  const app = new App({request, response})
  console.log('Request headers: ' + JSON.stringify(request.headers))
  console.log('Request body: ' + JSON.stringify(request.body))

  // Fulfill action business logic

  function welcomeIntent (app) {
    // Complete your fulfillment logic and send a response
    app.tell('Hello, World!')
  }

  function TopNewsIntent (app) {
    app.tell('We are in the Top News Intent')
  }

  const actionMap = new Map()
  actionMap.set('input.welcome', welcomeIntent)
  actionMap.set('topnews', TopNewsIntent)

  app.handleRequest(actionMap)
})
// [END YourAction]
