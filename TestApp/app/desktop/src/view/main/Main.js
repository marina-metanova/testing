Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'TestApp.view.main.MainController',
        'TestApp.view.main.MainViewModel',
    ],

    controller: 'mainController',
    viewModel: 'mainViewModel',

    items: [
        {
            title: "Login",
            xtype: 'login'
        }
    ]
});
