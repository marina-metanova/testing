Ext.define('TestApp.Application', {
	extend: 'Ext.app.Application',
	name: 'TestApp',
	requires: ['TestApp.*'],

	removeSplash: function () {
		Ext.getBody().removeCls('launching');
		const elem = document.getElementById("splash");
		elem.parentNode.removeChild(elem);
	},

	launch: function () {
		this.removeSplash();
		const loggedIn = localStorage.getItem("loginUser");

		Ext.Viewport.add({xtype: loggedIn ? 'home' : 'main'});
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
