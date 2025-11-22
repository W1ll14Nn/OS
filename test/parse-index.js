const mod = require('../index.js');
(async () => {
  const { server, port } = await mod.startFallbackServer(0);
  console.log('ok', port);
  server.close();
})();
