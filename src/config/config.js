require("dotenv").config();
console.log(process.env.DATABASE_URL);
module.exports = {
  development: {
    username: "postgres",
    password: "Dev@123",
    database: "Inventory",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },

  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // For Railway SSL
      },
    },
  },
};
