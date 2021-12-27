let welcome = async (): Promise<string> => {
  return 'Hello World!';
};

let hello = await welcome();

await Promise.resolve(console.log('Hello World!🎉'));

export { welcome }; 