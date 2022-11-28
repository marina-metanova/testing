Ext.define('TestApp.view.users.UserDialog', {
    extend: 'Ext.Dialog',
    xtype: 'userDialog',

    requires: [
        'TestApp.view.users.UserDialogController',
        'TestApp.view.users.UserDialogViewModel',
    ],
    controller: 'userdialogcontroller',
    viewModel: 'userdialogviewmodel',

    closable: true,
    defaultFocus: 'textfield',
    maskTapHandler: null,
    layout: 'fit',
    width: 550,
    draggable: false,
    bind: {
        title: '{dialogTitle}'
    },

    items: [{
        xtype: 'formpanel',
        reference: 'form',
        autoSize: true,
        defaults: {
            xtype: 'textfield',
            allowBlank: false,
            required: true
        },
        items: [{
            name: 'name',
            label: 'Full Name'
        }, {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email',
            validators: 'email'
        }, {
            name: 'address',
            label: 'Address'
        }]
    }],

    buttons: [
        {
            xtype: 'button',
            bind: {
                text: '{dialogButton}'
            },
            handler: 'dialogHandler'
        }
    ]
});