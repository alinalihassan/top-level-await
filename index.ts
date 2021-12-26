let welcome = async (): Promise<string> => {
  return 'Hello World!';
};

await welcome();

export { welcome }; 