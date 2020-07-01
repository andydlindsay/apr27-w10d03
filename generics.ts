interface IContainer<T, S> {
  title: string;
  contents: T;
  something?: S;
}

const numContainer: IContainer<number, string> = {
  title: 'number container',
  contents: 42
}

const stringContainer: IContainer<string, boolean> = {
  title: 'string container',
  contents: 'hello world'
}
