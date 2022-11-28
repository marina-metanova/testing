Ext.define('TestApp.view.photos.ImageBox', {
    extend: 'Ext.Container',
    xtype: 'imagebox',

    bind: {
        cls: 'images-box'
    },

    items: [
        {
            xtype: 'container',
            bind: {
                html: '<div class="image-box"><figure><img src="{record.url}" alt="{record.author}" /></figure><h3>{record.author}</h3></div>'
            }
        }
    ]
});
