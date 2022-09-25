module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '002bb4838265933b3e287f58e5c0850f'),
  },
});
