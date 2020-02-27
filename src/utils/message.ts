
import { message } from 'antd';
import { ResopnseStatusEntity } from '../model/user';

export const messageShow = (data:ResopnseStatusEntity) => {
    if (data.status === 200) {
        message.success(data.content);
    } else {
        message.error(data.content);
    }
};