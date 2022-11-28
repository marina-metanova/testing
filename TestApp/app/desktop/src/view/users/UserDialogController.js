Ext.define('TestApp.view.users.UserDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userdialogcontroller',

    dialogHandler: function (button) {
        const vm = this.getViewModel();
        const form = this.getView().down('formpanel');

        if (form.validate()) {
            form.mask('loadmask');
            button.disable();

            if (!vm.get('isEdit')) {
                const editUserInfo = form.getRecord();

                this._recordSave(editUserInfo, form, button);
            } else {
                const addUserData = new TestApp.model.User();
                delete addUserData.id;
                delete addUserData.data.id;

                this._recordSave(addUserData, form, button);
            }

        } else {
            Ext.Msg.alert('Invalid inpit data!');
        }
    },

    _recordSave: function (record, form, button) {
        const dialog = this.getView();

        form.fillRecord(record);

        record.save({
            success: function () {
                Ext.fireEvent('reloadumusers');

                dialog.hide();
            },
            failure: function (rec, res) {
                Ext.Msg.alert('Invalid data sending!');

                form.unmask();
                button.enable();
            }
        });
    }
});
