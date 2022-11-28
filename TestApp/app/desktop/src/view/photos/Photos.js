Ext.define('TestApp.view.photos.Photos',{
    extend: 'Ext.dataview.List',
    xtype: 'photos',
    userCls: 'image-gallery',

    requires: [
        'TestApp.view.photos.PhotosViewModel',
        'TestApp.view.photos.PhotosController',
        'TestApp.view.photos.ImageBox',
        'Ext.dataview.plugin.ListPaging',
        'Ext.grid.plugin.PagingToolbar'
    ],

    controller: 'photoscontroller',
    viewModel: 'photosviewmodel',
    bind: {
        store: '{photos}'
    },

    plugins: {
        listpaging: {
            autoPaging: true,
            bufferZone: 5
        }
    },

    itemConfig: {
        xtype: 'imagebox',
        viewModel: true
    },
    listeners: {
        select:  'showImageDialog'
    }
});
