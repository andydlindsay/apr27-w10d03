interface IUser {
  username: string;
  password: string;
}

const login = (user: IUser): boolean => {
  return true;
};

const testUser = {
  username: 'jstamos',
  password: '1234',
};

login(testUser);
