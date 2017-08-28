Package.describe({
  name: 'stripe-connect',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Login service for stripe accounts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/darior87/meteor-accounts-stripe-connect',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse( function (api) {
    api.versionsFrom('1.2'); 
    if (api.export) api.export('StripeOAuth');     
    api.use('accounts-base', ['client', 'server']);
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);

    api.use('oauth', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('http', ['server']);
    api.use('underscore', 'server');
    api.use('templating', 'client');
    api.use('random', 'client');
    api.use('service-configuration', ['client', 'server']);
    
    api.addFiles(
    ['lib/stripe_configure.html', 'lib/stripe_configure.js', 
    'lib/stripe_login_button.css'],
    'client');

    api.addFiles("lib/accounts_stripe.js");
    api.addFiles('lib/stripe_client.js', 'client');
    api.addFiles('lib/stripe_server.js', 'server');
});
