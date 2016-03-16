export default function (server) {

  server.route({
    path: '/api/s3/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
