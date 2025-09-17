const http = require('http');

// Crée le serveur HTTP
const server = http.createServer((req, res) => {
  // Définition du type de contenu (HTML)
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // Contenu de la page de test
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CI/CD Demo</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background: #f4f4f4; 
            text-align: center; 
            padding: 50px; 
          }
          h1 { color: #0078D7; }
        </style>
      </head>
      <body>
        <h1> Déploiement réussi via CI/CD</h1>
        <p>Hello from CI/CD pipeline on Azure App Service</p>
      </body>
    </html>
  `);
});

// Azure fournit un port via la variable d'environnement PORT
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Lancement du serveur
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
