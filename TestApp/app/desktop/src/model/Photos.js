Ext.define('TestApp.model.Photos', {
    extend: 'Ext.data.Model',

    fields: [
        'id',
        'url',
        'author'
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/pictures',
        writer: {
            writeAllFields: true
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});