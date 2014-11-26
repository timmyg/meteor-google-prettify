Package.describe({
  name: 'timmyg13:google-prettify',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('timmyg13:google-prettify.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timmyg13:google-prettify');
  api.addFiles('timmyg13:google-prettify-tests.js');
});
