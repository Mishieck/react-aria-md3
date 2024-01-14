import path from 'path';

const createPath = (__dirname: string) => (name: string) =>
  path.join(__dirname, name);

export const writeFile =
  (__dirname: string) => async (name: string, code: string) =>
    await Bun.write(createPath(__dirname)(name), code);
