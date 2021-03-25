const config = {
   
        PORT: process.env.PORT || 3000,
        DB_CONNECTION: 'mongodb://localhost/wear-it',
        SALT_ROUNDS: 10,
        SECRET: 'meow',
        COOKIE_NAME: 'USER_SESSION',
  
};

module.exports = config;