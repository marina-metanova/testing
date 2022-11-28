Ext.define('TestApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'address',
            type: 'string'
        },
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/persons',
        writer: {
            writeAllFields: true
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
