// para testes assumindo que o usuario logado é o usuario de id =10
const uid = 1;



module.exports = {

    listarContatos: (req, res)=>{

        // IMPORTANDO OS CONTATOS DO USUARIO
        let contatos = require(`../database/contatos_${uid}.json`)
        // enviando os contatdos para o cliente
        res.render('home.ejs', 
        {

        });
    },

    capturarContato : (req, res)=>{
        // importando os dados do contatos
        let contatos = require(`../database/contatos_${uid}.json`)
        //Descobrir o Id do contato que o usuario quer...
        let idDoContato = req.params.id       
        

        // Encontarr no array de contatos o contato que tem o ID desejador
        let contato  = contatos.find(
            (c) => {
                return c.id == idDoContato
            }

        );
        // Retornoar o contato para o cliente e retornar o contato se o mesmo nao existir       

        if(contato === undefined) {
            res.send({msg:' {O contato buscado não existe'})
        }else{
            res.render(contato)
        }


    }

}