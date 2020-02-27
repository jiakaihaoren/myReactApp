import React, { useState, useEffect } from 'react';
import { TableList } from './TableList';
import { SearchId } from './SearchId';
import { AddUser } from './AddUser';
import { getListAll } from '../api/listApi';
import { UserEntity } from '../model/user';
import { Button } from 'antd';
import { useDispatch } from '../store';

export const SpringTest = () => {
    const [list, setList] = useState<UserEntity[]>([]);
    const dispatch = useDispatch();
    const getAllList = () => {
        dispatch({ type: 'show', payload: true });
        getListAll().then(list => {
            setList(list);
            dispatch({ type: 'show', payload: false });
        });
    };

    useEffect(() => {
        getAllList();
    }, []);

    const getListById = (list: UserEntity[]) => {
        setList(list);
    };

    return (
        <div>
            <Button onClick={() => { getAllList() }}>查找所有</Button>
            <SearchId getListById={getListById}></SearchId>
            <AddUser></AddUser>
            <TableList list={list}></TableList>
        </div>
    );
};