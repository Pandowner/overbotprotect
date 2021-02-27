module.exports = {
  apps: [
    {
      script: "index.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "SSH_USERNAME",
      host: "https://panel.world-heberg.com/server/9e896812",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
