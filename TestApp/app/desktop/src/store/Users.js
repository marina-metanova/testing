Ext.define('TestApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',

    model: 'TestApp.model.User',

    proxy: {
        type: 'rest',
            url: 'http://localhost:3000/persons',
            writer: {
            writeAllFields: true
        },
        limitParam: '_limit',
        pageParam: '_page',
        startParam: '_start',
        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'totalCount'
        }
    }
});


