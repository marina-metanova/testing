Ext.define('TestApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginController',

    requires: [
        'TestApp.view.home.Home'
    ],

    onSubmit: function ( button ) {
        const form = this.getView();

        if (form.validate()) {
            form.mask('loadmask');
            button.disable();

            const record = form.getValues();
            const view = Ext.Viewport.down('main');
            const users = this.getViewModel().data.users.data.items;
            const isThereUser = users.some(el => el.data.email === record.email);

            if (isThereUser) {
                users.forEach((item) => {
                    const email = item.data.email;
                    const password = item.data.password;

                    if (record.email === email) {
                        if (record.password === password) {
                            localStorage.setItem("loginUser", record.email);
                            view.destroy();
                            Ext.Viewport.add({xtype: 'home'});
                        } else {
                            form.unmask();
                            button.enable();
                            Ext.Msg.alert('Wrong password!');
                        }
                    }
                });
            } else {
                form.unmask();
                button.enable();
                Ext.Msg.alert('There is no user with this email');
            }
        } else {
            form.unmask();
            Ext.Msg.alert('Invalid inpit data!');
        }
    }
});
