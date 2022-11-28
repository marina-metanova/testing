Ext.define('TestApp.view.photos.PhotosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.photoscontroller',

    showImageDialog: function( el, record ) {
        const dialog = Ext.create({
            xtype: 'photoDialog'
        });

        dialog.getViewModel().set('record', record);

        dialog.show();
    }
});
