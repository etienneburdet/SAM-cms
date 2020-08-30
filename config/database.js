module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env('DATABASE_PORT', '5432'),
        database: env('DATABASE_NAME', 'sam'),
        username: env('DATABASE_USERNAME', 'etienneburdet'),
        password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
      },
      options: {
        ssl: false,
      },
    },
  },
})
