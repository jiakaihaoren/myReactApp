import React, { useState } from 'react';

function TestHooks() {
    const [name, setName] = useState('jk');
    const [editName, setEditName] = useState(name);

    const updateName = (newName: string) => {
        setName(newName);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditName(e.target.value);
    };

    const handleSubmit = () => {
        updateName(editName);
    };

    return (
        <div>
            <p>Hello {name}!</p>
            <br/>
            请输入姓名:<input value={editName} onChange={handleInput}></input>
            <button onClick={handleSubmit}>提交</button>
        </div>
    );
}
export default TestHooks;