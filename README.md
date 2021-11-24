![GitHub](https://img.shields.io/github/license/wellingtonnascimentto/Projeto3_final_Mod3_backend?style=plastic)

# Sobre o projeto

Link back-end: https://api-hobbies.herokuapp.com/
Link da API integrada à um front: https://projeto3-final-mod3-frontend.herokuapp.com/

A API Hobbies, permite aos usuários cadastrar filmes, séries, livros, musicas e animes e que queira armazenar e catalogar. 

O projeto foi desenvolvido como parte da formação inicial  de BackEnd da instituição de ensino BlueEdTech, onde foi realizada a criação de uma API (back-end) e feita a integração à um front-end desenvolvido pela instituição.

# Competências utilizadas
## O projeto foi desenvolvido em dupla, onde podemos desenvolver diversas competências de soft e hard skill, sendo elas:
- Trabalho em grupo com gitflow;
- Estruturação do projeto de acordo com os parâmetros de rotas exigidos;
- Padrão de organização MVC;
- Modelagem de dados;
- Implantação do projeto;
- Integração ao front-end.

# Tecnologias utilizadas
## Back end
- ![GitHub top language](https://img.shields.io/github/languages/top/wellingtonnascimentto/Projeto3_final_Mod3_backend?style=plastic)
- ![NODE JS](https://img.shields.io/badge/Node.js-339933?style=plastic-for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.JS](https://img.shields.io/badge/Express.js-000000?style=plastic-for-the-badge&logo=express&logoColor=white)

## Banco de dados
- ![MONGO DB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)


# Implantação em produção
- Back end: Heroku
- Banco de dados: MongoDB

# Como executar o projeto em desenvolvimento

## Back end
### Pré-requisitos:
- Node JS;
- mongoose;
- Express.

### clonar repositório
git clone https://github.com/wellingtonnascimentto/Projeto3_final_Mod3_backend

executar o projeto com o comando 'npm start'

## Consumo da API

- O link https://api-hobbies.herokuapp.com/ acessa o site onde a API está hospeda;
- Após o link inicial, você deve colocar o caminho da mídia que quer informações, as mídias são (Filmes, Series, Musicas, Livros e Animes). Exemplo: https://api-hobbies.herokuapp.com/Filmes;
- Após o caminho que acessa a mídia, você pode acessar uma nova rota que o faz consumir, adicionar ou deletar informações do banco. As rotas são:
- add = Adiciona uma nova mídia;
- listall = Demonstra todas as mídias cadastradas dentro da mídia de sua escolha;
- listid = Deve ser prosseguida de uma ID da mídia cadastrada, para poder mostra-la apenas ela;
- update = Deve ser prosseguida de uma ID da mídia cadastrada, podendo atualiza-la;
- delete = Deve ser prosseguida de uma ID da mídia cadastrada, deletando a mídia cadastrada no ID específico.
 ### Exemplos de uso
 1. https://api-hobbies.herokuapp.com/Filmes/listall
 - Mostra todos os filmes cadastrados no banco de dados.
 2. https://api-hobbies.herokuapp.com/Filmes/delete/61983c6ea183886262b787ea
 - Deleta o objeto com o ID da URL após o /delete
 
# Autores

Wellington Nascimentto 
Marcelo França

![GitHub followers](https://img.shields.io/github/followers/MarceloMVf?label=Follow%20me&style=social)
![GitHub followers](https://img.shields.io/github/followers/wellingtonnascimentto?label=Follow%20me&style=social)
