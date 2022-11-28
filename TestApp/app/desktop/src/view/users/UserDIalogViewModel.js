Ext.define('TestApp.view.users.UserDialogViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userdialogviewmodel',

    data: {
        isEdit: true,
        record: {
            name: '',
            email: '',
            address: ''
        }
    },

    formulas: {
        dialogTitle: function (get) {
            const isEditView = get('isEdit');

            return isEditView ? 'Add new user' : 'Edit user';
        },
        dialogButton: function (get) {
            const isEditView = get('isEdit');

            return isEditView ? 'Save' : 'Edit';
        },
        userInfoForm: function (get) {
            const dialog = this.getView();
            const dialogViewModel = dialog.getViewModel();

            const userInfo = {
                'name': get('name'),
                'email': get('email'),
                'address': get('address'),
            };

            return userInfo;
        }
    }
});
