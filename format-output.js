module.exports = formatOutput

function formatOutput (response) {
  var output = 'Here are your Articles: '
  for (var i = 0; i < (5 || response.articles.length); i++) {
    var articleCount = i + 1
    if (response.articles[i].title !== null && response.articles[i].description !== null) {
      output = output + articleCount + '. ' + response.articles[i].title + '  ' + response.articles[i].description + ' '
    } else if (response.articles[i].title !== null && response.articles[i].description === null) {
      output = output + articleCount + '. ' + response.articles[i].title + '  ' + ' no description ' + ' '
    } else if (response.articles[i].title === null && response.articles[i].description !== null) {
      output = output + articleCount + '. ' + ' no title ' + '  ' + response.articles[i].description + ' '
    } else {
      output = output + articleCount + '. ' + ' no title ' + '  ' + ' no description ' + ' '
    }
  }
  return output
}
