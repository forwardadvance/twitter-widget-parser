require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;

var parser = require('../js/lib/parser');
var fixture = require('./lib/fixture');

describe('parser', function() {
  var $;

  beforeEach(() => {
    $ = parser.get$(fixture);
  });

  it('can get cheerio', () => {
    expect($).to.be.defined;
  });

  it('can get tweets', () => {
    var tweets = parser.getTweets($);
    expect(tweets.length).to.equal(20);
    expect(tweets[0]).
  });

  describe('tweet', function() {
    var tweet;

    beforeEach(() => {
      tweet = parser.getTweets($).first();
    });

    it('can get a tweet attr', () => {
      var id = parser.getId(tweet);
      expect(id).to.equal('721000382273597441');
    });

    it('can get a tweet html', () => {
      var html = parser.getHTML(tweet);
      assert.isString(html)
    });
    it('can get a tweet text', () => {
      var text = parser.getText(tweet);
      console.log(text)
      assert.isString(text)
    });
  })
});


