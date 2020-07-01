let firstName: string | number = 'Alice';
firstName = 27;
const bool: boolean = true;

const myArr: (number | string)[] = [1, 2, 3];
myArr.push('hello');

interface IUser {
  username: string;
  password: string;
  id?: number;
}

const users: IUser[] = [];

const user: IUser = {
  username: 'alice',
  id: 7
} as IUser;
