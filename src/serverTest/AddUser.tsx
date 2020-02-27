import React, { useEffect } from 'react';
import { addUserPost } from '../api/listApi';
import { FormComponentProps } from 'antd/es/form';
import { messageShow } from '../utils/message';
import { Form, Icon, Input, Button } from 'antd';

const hasErrors = (fieldsError: Record<string, string[] | undefined>):boolean => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

interface UserFormProps extends FormComponentProps {}
const AddUserForm = (props: UserFormProps) => {
    const { form } = props;
    useEffect(() => {
    // To disable submit button at the beginning.
        form.validateFields();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                addUserPost(values).then(data => {
                    messageShow(data);
                });
            }
        });
    };

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const moneyError = isFieldTouched('money') && getFieldError('money');
    return (
        <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="name"
                    />,
                )}
            </Form.Item>
            <Form.Item validateStatus={moneyError ? 'error' : ''} help={moneyError || ''}>
                {getFieldDecorator('money', {
                    rules: [{ required: true, message: 'Please input your money!' }],
                })(
                    <Input
                        prefix={<Icon type="money-collect" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        placeholder="money"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    添加
                </Button>
            </Form.Item>
        </Form>
    );
};

export const AddUser = Form.create<UserFormProps>({
    name: 'add_user'
})(AddUserForm);