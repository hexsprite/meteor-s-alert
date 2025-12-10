Package.describe({
    'summary': 'Simple and fancy notifications / alerts / errors for Meteor',
    'version': '3.2.1',
    'git': 'https://github.com/juliancwirko/meteor-s-alert.git',
    'name': 'juliancwirko:s-alert'
});

Package.onUse(function (api) {
    api.versionsFrom('3.0');
    api.use('mongo');
    api.use('templating');
    api.use('blaze');
    api.use('underscore');
    api.use(['session'], ['client']);
    api.addFiles([
        'client/s-alert.js',
        'client/s-alert-collection.js',
        'client/s-alert-default.css',
        'client/s-alert-template.html',
        'client/s-alert-template.js'
    ], 'client');
    api.export('sAlert', ['client']);
});

