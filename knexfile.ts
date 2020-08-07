import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    database: 'nlw',
    user: 'postgres',
    password: '1234'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
}