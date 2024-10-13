const ensure = (value: string | undefined, name: string): string | void => {
  if (value === undefined || value === '') {
    throw new Error(`Environment variable ${name} is not defined or is empty.`);
  }
  return value;
};

export const envConfig = {
  PORT: ensure(process.env.PORT, 'PORT'),
  DB_HOST: ensure(process.env.DB_HOST, 'DB_HOST'),
  DB_PORT: ensure(process.env.DB_PORT, 'DB_PORT'),
  DB_USER: ensure(process.env.DB_USER, 'DB_USER'),
  DB_PASS: ensure(process.env.DB_PASS, 'DB_PASS'),
  DB_NAME: ensure(process.env.DB_NAME, 'DB_NAME'),
  NODE_ENV: ensure(process.env.NODE_ENV, 'NODE_ENV'),
};
