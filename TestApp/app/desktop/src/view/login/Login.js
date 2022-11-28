Ext.define('TestApp.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'TestApp.view.login.LoginController',
        'TestApp.view.login.LoginViewModel'
    ],

    controller: 'loginController',
    viewModel: 'loginViewModel',

    buttons: {
        submit: {
            title: 'Login',
            formBind: true,
            handler: 'onSubmit',
            store: '{users}'
        }
    },

    items: [{
        xtype: 'emailfield',
        name: 'email',
        label: 'Email',
        required: true
    }, {
        xtype: 'passwordfield',
        name: 'password',
        label: 'Password',
        required: true
    }]
});