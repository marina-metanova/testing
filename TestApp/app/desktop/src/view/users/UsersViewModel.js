Ext.define('TestApp.view.users.UsersViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.usersViewModel',

	requires: [
		'TestApp.store.Users',
	],

	stores: {
		users: {
			type: "users",
			autoLoad: true,
			pageSize: 10,
			sorters: ['name', 'email']
		}
	}
});
