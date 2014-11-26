Package.describe({
  name: 'timmyg13:google-prettify',
  summary: 'Google prettify packaged for meteor',
  version: '1.0.3',
  git: 'https://github.com/timmyg/meteor-google-prettify'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('timmyg13:google-prettify.js', 'client');
});
