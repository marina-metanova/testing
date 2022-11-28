Ext.define('TestApp.view.home.HomeController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.homeController',

	listen: {
		global: {
			reloadumusers: 'reloadUserStore'
		}
	},

	logout: function () {
		const view = Ext.Viewport.down('home');
		localStorage.removeItem("loginUser");
		view.destroy();
		Ext.Viewport.add({xtype: 'main'});
	},

	reloadUserStore: function ( ) {
		const usersStore = this.getViewModel().getStore('users');

		if (usersStore) usersStore.load();
	}
});
