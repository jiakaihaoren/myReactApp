import { UserEntity, AddUserEntity, ResopnseStatusEntity } from '../model/user';
import Axios, { AxiosResponse } from 'axios';

const baseURL = 'account';

interface Params{
    id?:number
}

export const getList = (params:Params): Promise<UserEntity[]> => {
    const promise = new Promise<UserEntity[]>((resolve, reject) => {
        try {
            Axios.get<UserEntity>(`${baseURL}/find`, { params: params }).then(response => {
                resolve([response.data]);
            });
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
};

const mapListAllApiToModel = ({
    data
}: AxiosResponse<any[]>): UserEntity[] =>
    data.map(list => ({
        id: list.id,
        name: list.name,
        money: list.money
    }));

export const getListAll = (): Promise<UserEntity[]> => {
    const promise = new Promise<UserEntity[]>((resolve, reject) => {
        try {
            Axios.get<UserEntity[]>(`${baseURL}/findAll`).then(response => {
                resolve(mapListAllApiToModel(response));
            });
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
};

export const addUserPost = (params: AddUserEntity): Promise<ResopnseStatusEntity> => {
    const promise = new Promise<ResopnseStatusEntity>((resolve, reject) => {
        try {
            Axios.post<ResopnseStatusEntity>(`${baseURL}/save`, params).then(response => {
                resolve(response.data);
            });
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
};

export const deleteUser = (params:Params): Promise<ResopnseStatusEntity> => {
    const promise = new Promise<ResopnseStatusEntity>((resolve, reject) => {
        try {
            Axios.get<ResopnseStatusEntity>(`${baseURL}/delete`, { params: params }).then(response => {
                resolve(response.data);
            });
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
};