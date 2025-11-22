\
const http = require('http');

const html = `
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ISPROTEC — Fallback</title>
  </head>
  <body>
    <div style="font-family: system-ui, sans-serif; padding:24px;">
      <h1>ISPROTEC — Sistema de Ordem de Serviço (fallback)</h1>
      <p>Servidor fallback - para ambientes sem suporte a TSX.</p>
      <p>Para rodar Next.js use <code>npm run dev</code> localmente ou deploy no Vercel.</p>
    </div>
  </body>
</html>
`;

function startFallbackServer(port = 0) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });
  return new Promise((resolve) => {
    server.listen(port, () => {
      const address = server.address();
      const usedPort = address && address.port ? address.port : port;
      resolve({ server, port: usedPort });
    });
  });
}

module.exports = { startFallbackServer };

if (require.main === module) {
  (async () => {
    const { server, port } = await startFallbackServer(3001);
    console.log(`Fallback server rodando em http://localhost:${port}`);
  })();
}
