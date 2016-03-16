import exampleRoute from './server/routes/example';

module.exports = function(kibana) {
  return new kibana.Plugin({
   require: ['elasticsearch'],

       uiExports: {
         app: {
           title: 'Sample App',
           description: 'An awesome Kibana plugin',
           main: 'plugins/s3/app',
           icon: 'plugins/s3/icon.svg',
           injectVars: function (server, options) {
                               var config = server.config();
                               return {
                                   kbnIndex: config.get('kibana.index'),
                                   esShardTimeout: config.get('elasticsearch.shardTimeout'),
                                   esApiVersion: config.get('elasticsearch.apiVersion')
                               };
           }
         }
       },
           init(server, options) {
             // Add server routes and initalize the plugin here
             exampleRoute(server);
           }

  });
};
