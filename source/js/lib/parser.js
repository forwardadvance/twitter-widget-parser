var select = require('./selectors');
var cheerio = require('cheerio');

var parser = {
  get$: (str) => cheerio.load(str),
  getTweets: ($) => $(select.tweets),
  getId: (tweet) => tweet.attr(select.tweetIdAttr),
  getHTML: (tweet) => tweet.find(select.tweetText).html(),
  getText: (tweet) => tweet.find(select.tweetText).text(),
  parse: (str) => {
    var $ = cheerio.load(str);
    var result = {
      tweets: []
    };
    var tweets = parser.getTweets($).each((tweet) => {
      var tweet = {
        id: parser.getId(tweet),
        html: parser.getHTML(tweet),
        text: parser.getText(tweet),
      }
      result.tweets.push(tweet)
    });
  }
}

module.exports = parser
  // var response = {
  //   headers: data.headers,
  //   tweets: []
  // },
  // els,
  // el,
  // tweet,
  // x,
  // tmp;

  // if (data.body) {
  //   els = parser.getTweets(angular.element(data.body)[0]);
  //   for (x = 0; x < els.length; x++) {
  //     el = els[x];
  //     tweet = {};
  //     tweet.retweet = (el.getElementsByClassName('retweet-credit').length > 0);
  //     tweet.id = el.getAttribute('data-tweet-id');
  //     tmp = el.getElementsByClassName('e-entry-title')[0];
  //     tweet.html = tmp.innerHTML;
  //     tweet.text = tmp.textContent || tmp.innerText; // IE8 doesn't support textContent
  //     tmp = el.getElementsByClassName('p-author')[0];
  //     tweet.author = {
  //       url: tmp.getElementsByClassName('profile')[0].getAttribute('href'),
  //       avatar: tmp.getElementsByClassName('avatar')[0].getAttribute('src'),
  //       fullName: tmp.getElementsByClassName('p-name')[0].innerText,
  //       nickName: tmp.getElementsByClassName('p-nickname')[0].innerText
  //     };
  //     tweet.updated = el.getElementsByClassName('dt-updated')[0].innerText;
  //     tweet.permalink = el.getElementsByClassName('permalink')[0].getAttribute('href');
  //     if (el.getElementsByClassName('inline-media')[0]) {
  //       tweet.inlineMedia = el.getElementsByClassName('inline-media')[0].innerHtml;
  //     }
  //     response.tweets.push(tweet);
  //   }
  // }
  // return response;
// }
