import React from 'react';
import { Table, Divider } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { UserEntity } from '../model/user';
import { deleteUser } from '../api/listApi';
import { messageShow } from '../utils/message';

interface Props {
    list: UserEntity[]
}

export const TableList = (props:Props) => {
    const { list } = props;

    const deleteUserForm = (id: number) => {
        deleteUser({ id }).then(data => {
            messageShow(data);
        });
    };

    const columns: ColumnProps<UserEntity>[] = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'age',
        },
        {
            title: '资金',
            dataIndex: 'money',
            key: 'money',
        },
        {
            title: '操作',
            key: 'action',
            dataIndex: 'action',
            // eslint-disable-next-line react/display-name
            render: (_text, record) =>
                <span>
                    <Divider type="vertical" />
                    <a onClick={() => { deleteUserForm(record.id) }}>Delete</a>
                </span>
            ,
        },
    ];

    return (
        <div>
            <Table dataSource={list} columns={columns} rowKey="id"/>;
        </div>
    );
};