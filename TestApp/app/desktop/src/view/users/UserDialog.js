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
        items: [{
            xtype: 'textfield',
            name: 'name',
            label: 'Full Name',
            allowBlank: false,
            required: true
        }, {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email',
            allowBlank: false,
            required: true,
            validators: 'email'
        }, {
            xtype: 'textfield',
            name: 'address',
            label: 'Address',
            allowBlank: false,
            required: true
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