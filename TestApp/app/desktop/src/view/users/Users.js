Ext.define('TestApp.view.users.Users',{
    extend: 'Ext.grid.Grid',
    xtype: 'users',
    cls: 'users-view',
    header: false,
    titleBar: {
        bind: {
            hidden: true,
        }
    },

    requires: [
        'TestApp.view.users.UsersViewModel',
        'TestApp.view.users.UsersController',
        'Ext.grid.rowedit.Plugin',
    ],

    controller:'usersController',
    viewModel: 'usersViewModel',
    bind: {
        store: '{users}'
    },

    plugins: [
        'pagingtoolbar'
    ],

    rowNumbers: true,

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: false,
            width: 150
        },

        {
            text: 'Email',
            dataIndex: 'email',
            editable: false,
            width: 230
        },

        {
            text: 'Address',
            dataIndex: 'address',
            editable: false,
            width: 270
        },

        {
            text: 'Edit',
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-edit',
                    handler: 'showEditDialog'
                }
            }
        },

        {
            text: 'Delete',
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    iconCls: 'x-fa fa-trash',
                    handler: 'onDelete'
                }
            }
        }
    ],

    items: [{
        xtype: 'button',
        docked: 'top',
        textAlign: 'right',
        height: 50,
        text: 'Add new user',
        iconCls: 'x-fa fa-plus',
        handler: 'showAddDialog'
    }]
});
