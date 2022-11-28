Ext.define('TestApp.view.photos.PhotoDialog', {
    extend: 'Ext.Dialog',
    xtype: 'photoDialog',

    requires: [
        'TestApp.view.photos.PhotoDialogViewModel',
        'TestApp.view.photos.PhotoDialogController',
    ],
    viewModel: 'photodialogviewmodel',
    controller: 'photodialogcontroller',

    closable: true,
    maskTapHandler: null,
    layout: 'fit',
    draggable: false,
    bind: {
        title: '{record.author}'
    },

    items: [{
        xtype: 'component',
        autoSize: true,
        bind: {
            html: '<img src="{record.url}" alt=`{record.author}` />'
        }
    }],

    buttons: {
        ok: {text: 'Delete', handler: 'deleteImage'}
    }
});