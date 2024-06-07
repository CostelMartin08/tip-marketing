module.exports = {
    apps: [
      {
        name: "TIPMarketing",
        script: "npm",
        args: "start",
        cwd: "/home/node/tip-marketing",
        env: {
          NODE_ENV: "production",
          PORT: 8080,
        },
      },
    ],
  };
  