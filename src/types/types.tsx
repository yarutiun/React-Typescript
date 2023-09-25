export interface IAddress{
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser{
    name: string;
    email: string;
    id: number;
    address: IAddress;
}