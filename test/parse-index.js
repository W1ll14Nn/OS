const path = require('path');
const assert = require('assert');

(async () => {
  try {
    const mod = require(path.resolve(__dirname, '..', 'index.js'));
    assert.ok(mod && typeof mod.startFallbackServer === 'function', 'startFallbackServer deve ser uma função');
    const { server, port } = await mod.startFallbackServer(0);
    console.log(`Teste OK — fallback server iniciou na porta ${port}`);
    server.close(() => {
      console.log('Servidor de teste finalizado');
    });
  } catch (err) {
    console.error('Teste falhou:', err && err.message ? err.message : err);
    process.exitCode = 2;
  }
})();
