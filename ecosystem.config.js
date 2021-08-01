module.exports = {
    apps : [
        {
          name: "telegram-bot-ts",
          script: "./dist/app.js",
          restart_delay: 5000, 
          watch: false,
          log: 'process.log', 
          instances: 1,
          env: {
              "PORT": 3001,
              "NODE_ENV": "development",
          }
        }
    ]
  }