Ext.define('TestApp.view.photos.PhotosViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.photosviewmodel',

	stores: {
		photos: {
			type: 'photos',
			pageSize: 9
		}
	}
});