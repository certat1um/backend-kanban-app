# Backend Kanban Api

## Project setup

> Install npm packages:

```bash
$ npm install
```

> Create **.env** file with data copied from **.env.example**.

## Local Database setup

> After .env file is filled up with all necessary variables, up postgres containers:

```bash
$ docker-compose up -d
```

> Migrate database tables with columns and fill them with data:

```bash
$ npm run knex:migrate-and-seed
```

## External Database setup

> Set in `.env`:

```bash
USE_LOCAL=false
DATABASE_URL=<YOUR_DATABASE_URL_PATH>
```

## Compile and run the project

```bash
$ npm run dev
```

## Testing

```bash
$ npm run test
```

> If you are using local database, be sure you have `.env.test` file with all necessary data and running container with test database from `docker-compose.yml`.

## Postman / Insomnia

> Test endpoints via Postman or Insomnia. You can import environment from `/postman` directory.

## Render Deploy

> Project also deployed on **Render.com**. (requests can be delayed by 50 seconds or more in due to free plan of using Render service)
>
> Base route: ``
