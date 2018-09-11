// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    //connection: 'postgres://postgres:postgres@localhost/my_life'
    connection: 'postgres://postgres:postgres@localhost/excur'
    //connection: 'postgres://cldbwpxsjkzbhd:f62cff24deb335d96a0194bb4ffa7f86f4d2b4da9cb9f8d18c25608e0bb56336@ec2-184-72-247-70.compute-1.amazonaws.com:5432/d82ir795j0ech3'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
