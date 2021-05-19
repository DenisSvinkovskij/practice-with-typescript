export interface ITodo {
  text: string;
  id: number;
  completed: boolean;
}

export interface IAddress  {
    street: string;
    city: string;
  }

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
  phone: string;
}
