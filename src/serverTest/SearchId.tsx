import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getList } from '../api/listApi';
import { UserEntity } from '../model/user';

interface SearchIdProps{
    getListById: (list: UserEntity[]) => void;
}
export const SearchId = (props: SearchIdProps) => {
    const { getListById } = props;
    const [input, setInput] = useState<string>('');

    const searchById = (id: number) => {
        getList({ id }).then(list => {
            getListById(list);
        });
    };

    const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
    };

    const searchHandle = () => {
        if (/^\d+$/.test(input)) {
            searchById(Number(input));
        }
    };

    return (
        <div>
            <Input placeholder="输入用户ID" onChange={inputHandle} value={input} width={300}/>
            <Button onClick={searchHandle}>查找</Button>
        </div>
    );
};