# Proffy :teacher:

Proffy is a apllication that can connect teachers and students all around the world to manage classes based on type of class, time disponibility and acessible prices.

## Installation

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) to install the depencies.
And [PostgresSQL](https://www.postgresql.org/download/linux/ubuntu/) to store the data, and create a database named nlw.


## Usage

```javascript
yarn add  # Install all the dependencies

yarn knex:migrate # Create the tables on the nlw DB
```

## Stack 
```
 **Express - to run the server
 **Typescript 
 **Knex - To make simple write SQL 
 **PG - Necessary to create a connection to the DB and store data
 **Cors - Make the connection of the front and backe end possible even though its using diferent ports
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)