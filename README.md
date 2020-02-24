# Usedz

This is a work in progress project created to learn Express.js, Mongoose and MongoDB, containing two apps and an library. There is simple backend called `express-back`, simple frontend app called `usedz-front` and an library `usedz-common` hosting common interfaces and logic.
`express-back` is a fully functional backend with exposed endpoints enabling all CRUD operations on Item type.
`usedz-front` for now can only display all items contained in a database as a infinite scrollable list of item cards.

The plan was to also create backends using Nest.js with TypeORM or Sequelize and Kotlin with Exposed.

## Development server

Run `nx serve app-name` for a dev server.
Backend app (`express-back`) based on Express.js is hosted on port 8080 => http://localhost:8080
Frontend app (`usedz-front`) based on React.js is hosted on port 4200 => http://localhost:4200

## Build

Run `nx build app-name` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##

This project was generated using [Nx](https://nx.dev).
