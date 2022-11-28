Ext.define('TestApp.view.users.UsersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersController',


    showEditDialog: function( userData ) {
        const testDialog = Ext.create({
            xtype: 'userDialog'
        });

        const record = userData.ownerCmp.getRecord();
        testDialog.down('formpanel').setRecord(record);

        testDialog.getViewModel().set('isEdit', false);

        testDialog.show();
    },

    showAddDialog: function(  ) {
        const testDialog = Ext.create({
            xtype: 'userDialog'
        });

        testDialog.show();
    },

    onDelete: function( userData ) {
        const record = userData.ownerCmp.getRecord();

        Ext.Msg.confirm("Confirmation", `Are you sure you want to delete user: ${record.data.name}?`, function (answer ) {
            if (answer === 'yes') {
                record.erase({
                    success: function (record) {

                    },
                    failure: function (rec, res) {
                        Ext.Msg.alert('Invalid data deleting!');
                    }
                });
            }
        });

    }
});
