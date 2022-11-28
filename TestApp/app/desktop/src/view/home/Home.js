Ext.define('TestApp.view.home.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',

    requires: [
        'TestApp.view.home.HomeController',
        'TestApp.view.home.HomeViewModel'
    ],

    controller: 'homeController',
    viewModel: 'homeViewModel',

    items: [
        {
            title: "Users",
            xtype: 'users'
        },
        {
            title: "Photos",
            xtype: 'photos'
        },
        {
            xtype: 'button',
            docked: 'top',
            textAlign: 'right',
            text: 'Logout',
            handler: 'logout'
        }
    ]
});
