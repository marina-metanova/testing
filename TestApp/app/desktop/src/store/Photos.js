Ext.define('TestApp.store.Photos', {
    extend: 'Ext.data.Store',
    alias: 'store.photos',

    model: 'TestApp.model.Photos',

    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/pictures',

        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'totalCount'
        },

        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',
    }

});
