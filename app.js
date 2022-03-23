// Importear o express
const express = require('express');
const { listen } = require('express/lib/application');

// importar os roteadores

const ContatosRouter = require('./routes/ContatosRouter')

// criar um servidor aplicação com o express
const app = express();


// criar uma rota get no endereço raiz "/" para responder requisição com msg "olá

app.get('/' , (req,res) => res.send('olá'));


// usando roteadores

app.use('/', ContatosRouter)




// levantar / rodar / executar a nossa aplicalção"
app.listen(3000, ()=> console.log("app escutando na porta 3000"));




