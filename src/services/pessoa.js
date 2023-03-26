const db = require('./db');

class Pessoa{

    constructor(nome, idade){ 
    this.nome = nome
    this.idade = idade


    }

    async postPessoaBanco(pessoa){

        await db.update({
            sql:`insert into pessoa (nome,idade) values (${pessoa.nome}, ${pessoa.idade})`,
            inputs:[
                {key:'nome', type:db.Varchar, value: `${pessoa.nome}`},
                {key:'idade', type:db.Int, value: `${pessoa.idade}`}
            ]
        })
        
    }

    getNome(params){
        const {nome} = pessoa
        return {nome : `${this.nome} da pessoa`}
    }

    getIdade(params){
        const {idade} = pessoa
        return {idade : `${this.idade} do ${this.nome} `}
    }

}

module.exports = new Pessoa()