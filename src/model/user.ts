export interface UserEntity{
    id: number,
    name: string,
    money: number
}

export interface AddUserEntity{
    name: string,
    money: number
}

export interface ResopnseStatusEntity{
    status: number,
    content: string
}