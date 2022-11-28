Ext.define('TestApp.view.login.LoginViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.loginViewModel',

    requires: [
        'TestApp.store.Users',
    ],

    data: {
        record: {
            email: '',
            password: ''
        }
    },

    stores: {
        users: {
            type: "users",
            autoLoad: true
        }
    }
});
