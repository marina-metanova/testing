Ext.define('TestApp.view.home.HomeViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.homeViewModel',

	routes : {
		'home' : 'onHome',
		'about' : 'onAbout',
	},

});
