export default () => ({
  openCreate: process.env.OPEN_CREATE == '1',
  db: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
  },
  redis: {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 6379,
  },
});
