Ext.define('TestApp.view.photos.PhotoDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.photodialogcontroller',

    deleteImage: function( ) {
        const vm = this.getViewModel();
        const dialog = vm.getView();
        const record = vm.getData().record;

        dialog.hide();

        Ext.Msg.confirm("Confirmation", `Are you sure you want to delete user: ${record.data.author}?`, function (answer) {
            if (answer === 'yes') {
                record.erase({
                    success: function (record) {
                    },
                    failure: function (rec, res) {
                        dialog.show();
                        Ext.Msg.alert('Invalid data deleting!');
                    }
                });
            } else {
                dialog.show();
            }
        });

    }
});
