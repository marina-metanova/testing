Ext.define('TestApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainController',

	routes: {
		'login': {
			action: 'onUser',
			before: 'onBeforeUser',
			name: 'login'
		},
		'home': {
			action: 'onUser',
			before: 'onBeforeUser',
			name: 'home'
		}
	},

	listen: {
		global: {
			reloadumusers: 'reloadUserStore'
		}
	},

	reloadUserStore: function ( ) {
		const usersStore = this.getViewModel().getStore('users');

		if (usersStore) usersStore.load();
	}
});
