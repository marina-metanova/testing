Ext.define('TestApp.view.about.About', {
    extend: 'Ext.Panel',
    xtype: 'about',

    controller: 'aboutController',

    title: 'About us',
    html: '<p>Some nice text here...</p>'
});