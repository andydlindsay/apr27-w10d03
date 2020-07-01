const sayHello = (nameToSay: string, age?: number): void => {
  // return `hello ${nameToSay}`;
  console.log(`hello ${nameToSay}`);
};

const returningPromise = (): Promise<string> => {
  return new Promise((res, rej) => {
    res('hello');
  });
};

interface IAuthor {
  penName: string;
  writeBook: (a: string, b?: number) => boolean;
}

const agatha: IAuthor = {
  penName: 'Agatha',
  writeBook: (title: string) => {
    return false;
  }
};

const higherOrder = (cb: (a: string) => string) => {
  cb('Alice');
};

higherOrder((title) => { return 'hello' });
