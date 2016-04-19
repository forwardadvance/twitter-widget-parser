module.exports = function url(id, lang) {
  return [
    'http://cdn.syndication.twimg.com/widgets/timelines/',
    id,
    '?&lang=',
    (lang || 'en'),
    '&callback=JSON_CALLBACK',
    '&suppress_response_codes=true&rnd=',
    Math.random()
  ].join('');
}
