require('chai').should();
var expect = require('chai').expect;

var twitterWidgetParser = require('../js/twitter-widget-parser');

describe('urlGenerator', function() {
  it('generates a url', function() {
    var url = twitterWidgetParser.url(123)
    url.should.be.a("string");
  })

  it('generates an english url by default', function() {
    var url = twitterWidgetParser.url(123);
    var index = url.indexOf('lang=en');
    expect(index).not.to.equal(-1);
  })

  it('can generate a russian url', function() {
    var url = twitterWidgetParser.url(123, 'rs');
    var index = url.indexOf('lang=rs');
    expect(index).not.to.equal(-1);
  })

});
