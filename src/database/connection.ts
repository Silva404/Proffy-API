import knex from 'knex'

const db = knex({
  client: 'pg',
  connection: {
    database: 'nlw',
    user: 'postgres',
    password: '1234'
  }
})

export default db