import { welcome } from "./index";

test('async function returns Hello World', async () => {
  let result = await welcome();

  expect(result).toBe('Hello World!');
});