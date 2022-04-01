# 3P Learning - Software Development From Scratch

## Feedback Backend API

This project contains the backend API for our content feedback project, using the NestJS framework as a base. It is written in TypeScript and uses PostgreSQL as the database.

## Installation

This microservice requires NodeJS 16.13.0 or higher to run. Please install a suitable version using `nvm`. Nvm is available for both MacOS and Windows, however they are different applications and in some instances operate differently (i.e. .nvmrc is only used by the MacOS package).

The following packages should be installed globally in order to build and run this microservice:

```bash
npm install -g typescript
npm install -g ts-node
npm install -g @nestjs/cli
```

If the source code is retrieved for the first time, run the following command to install the packages referenced in the project. You may also do this periodically after removing the _node_modules_ folder manually to ensure a clean installation of packages.

```bash
$ npm install
```

## Database Migrations

To get started with database migrations you need to create an `ormconfig.json` file for your development machine. A sample of this file is shown below, you may need to adjust this to suit your PostgreSQL settings, for example you may need to add `"password": "mypassword",` as an additional option.

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "database": "training",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": false,
  "cli": {
    "migrationsDir": "src/migrations"
  },
  "migrations": ["dist/migrations/*.js"],
  "logging": true
}
```

### Creating a new database migration from schema changes

The following process is used to create a new database migration from schema changes:

1. Make changes to existing entity files or create new entity files. Entity files are in the entities folder with the pattern defined in the TYPEORM_ENTITIES environment file entry above.

2. Run the command `ts-node ./node_modules/typeorm/cli.js migration:generate -n MigrationName`, remembering to replace _MigrationName_ with a suitable name

3. Run the command `npm run build`, this will build (transpile) the project into the dist folder and JavaScript files

4. To apply the migration run `ts-node ./node_modules/typeorm/cli.js migration:run`, this will compare the migrations locally with the database tables on the server and will apply any changes found

### Creating an empty new database migration

Sometimes you need to create an empty database migration so that you can add your own SQL statements to run, such as inserting or updating data in tables. To create these follow these steps:

1. Run the command `ts-node ./node_modules/typeorm/cli.js migration:create -n MigrationName`, remembering to replace _MigrationName_ with a suitable name

2. Make changes in the newly created migration file (this will be in _src/migrations_), adding statements to both the _up_ (run) and _down_ (revert) methods.

3. Run the command `npm run build`, this will build (transpile) the project into the dist folder and JavaScript files

4. To apply the migration run `ts-node ./node_modules/typeorm/cli.js migration:run`, this will compare the migrations locally with the database tables on the server and will apply any changes found

## Running the app

To run the app in development, where file changes are monitored and trigger an automatic reload, use the following command:

```bash
# watch mode - development
$ npm run start:dev
```

For running in production mode, use the following command:

```bash
# production mode
$ npm run start:prod
```
