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
// const App = require('actions-on-google').ApiAiApp
var getTopNews = require('./get-top-news.js')

exports.handler = function(event, context, callback) {
  getTopNews()
    .then((output) => {
      console.log(output)
      callback(null, {speech: output, data:{google:{expect_user_response: false}}})
    })
    .catch((error) => {
      console.log(error)
      var errorGet = 'We failed to get the news, try again.'
      callback(null, {speech: output, data:{google:{expect_user_response: false}}})
    })
}
