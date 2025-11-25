# API REST para implementar CRUD de tabela Veículos no MySQL (Backend) e Formulário para acessá-la (Frontend)

## 1. Pré-requisitos:
1. Ter o **Node.js** instalado. Para fazer o download acesse https://nodejs.org/pt/download  
   Prefira instalar a versão LTS.
2. Ter um banco **MySQL** instalado. Para fazer o download acesse https://dev.mysql.com/downloads/.  
   Pode usar também o **MariaDB**, incluído no XAMPP: https://www.apachefriends.org/pt_br/index.html

Para executar este código siga os seguintes passos:

## 2. Baixar o código e preparar o ambiente
1. Abra um shell (cmd, git bash ou PowerShell — este último pode ter restrições para executar o `npm`)
2. Clone o código deste repositório (em qualquer pasta onde você tenha permissão de escrita):
git clone <URL_DO_SEU_REPOSITORIO>
3. Mude para dentro da pasta criada do projeto:
cd nome_da_pasta_do_projeto
4. Nessa pasta digite o comando abaixo (vai instalar os pacotes listados nas dependências):
npm install
5. Localize o arquivo **ENV.env**, renomeie para **.env** e edite os valores conforme o ambiente da sua máquina:
DB_HOST=localhost
DB_DATABASE=garagem
DB_USER=root
DB_PASSWORD=sua_senha
PORT=8081


## 3. Criar a base de dados

1. Acesse o **MySQL** ou **MariaDB** e execute o comando abaixo para criar o banco:

2. Crie dentro dela a tabela `Veiculos` com as colunas necessárias ou utilize o script SQL correspondente.

(Se quiser, posso gerar o script exato com base no seu modelo Sequelize.)

Para visualizar registros cadastrados:
SELECT * FROM Veiculos;

## 4. Iniciar a aplicação (Backend)

Para iniciar o servidor digite:
node app.js
Se tudo estiver correto deve aparecer algo assim:
Servidor rodando na porta 8081
O backend estará pronto para receber requisições como:

- `GET /` → listar todos os veículos  
- `POST /cadastro` → cadastrar veículo  
- `GET /:marca` → buscar veículo por marca  
- `PUT /atualizar/:id` → atualizar  
- `DELETE /deletar/:id` → excluir  

##   5. Acessar o frontend

   1. Localize o arquivo **menu.html**  
2. Abra no navegador clicando duas vezes no arquivo  
   ou execute um servidor local com:
   npx http-server
3. Acesse:
http://localhost:8080/menu.html


A interface permitirá cadastrar, listar, editar e excluir veículos, usando a API do backend que deve estar rodando para funcionar.

fim.

-----------------------Team members-----------------------

Santiago Porto,                                                                                                
Romulo Valentin,              
Jefferson ,
Matheus Lins.
⠀⠀⠀  ⠀⠀⠀⠀⠀⣾⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⣀⣤⣤⣤⣬⣻⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣠⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠉⠻⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠛⠛⡟⠀⠀⠀⠀⠀⢀⡴⠦⣄⠀⠀⠈⣖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣖⣚⡁⣀⢠⢠⣠⣖⣉⣤⣤⢞⡆⠀⠀⠈⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣤⣬⣭⡻⣏⣿⠝⠓⠊⣉⣹⠃⠀⠀⠀⠀⠙⢄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⢘⣯⣉⣴⣿⣿⣿⣷⣿⣿⣿⣿⣷⠤⢤⣄⡀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⣴⠟⠁⠀⡀⠀⠀⠈⠙⠻⠿⠿⠿⢛⡋⠀⠀⠀⠙⣆⠀⠀⠀⠈⠑⠦⠤⢄⡀
⠀⠀⢸⢻⠀⢠⠊⠀⠀⠀⠀⠀⣀⣠⠴⣞⠉⠙⢯⡉⠙⢢⢘⡆⠀⠀⠀⠀⠀⠀⢤⡞
⠀⠀⢸⡜⡀⠀⠀⠀⠀⢀⣴⡛⠙⢦⡀⠈⠳⡀⠀⠓⣄⢈⣧⡟⠀⠀⠀⠀⣀⣀⡀⠙
⠀⠀⠈⢧⠀⠀⠀⢀⡔⠋⣠⠽⠶⠤⠬⠦⠴⠿⠶⠒⠛⠋⣾⡅⠀⠀⠀⠀⠈⠳⣍⠉
⠀⠀⠀⠹⣦⠀⠀⡎⠀⠀⠙⠓⠦⢤⢄⣀⣀⣀⣀⣤⣴⣾⣿⣷⣦⣀⠀⢠⢤⣤⣄⣣
⠀⠀⠀⠀⠉⠳⡼⠁⠀⠀⠀⠀⠀⠀⠀⢸⠟⠻⣿⣿⣿⣿⣿⣿⣿⣿⣷⡸⡇⠀⠀⠀
⠀⠀⣠⡴⠴⠤⣀⠀⠀⠀⠀⠀⠀⠀⢠⠏⣠⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠃⠀⠀⠀
⠀⢰⠃⠀⠀⢀⡴⠟⠲⢤⡀⠀⠀⠠⣏⣴⣿⢀⣿⣿⣿⣿⠛⠉⡽⠋⠉⠙⠒⢤⡀⠀
⢀⡼⠓⠦⣄⡟⠀⠀⢀⠀⣳⠀⠀⠀⠉⣸⢻⣠⠟⢿⡇⠉⠀⠘⠃⠀⠀⡴⢃⡼⠧⡀
⢸⠀⠀⠀⢸⠁⠀⠀⣴⠀⡗⢆⡀⠀⣠⡇⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠙⠋⠀⠀⢳
⠈⡗⣤⡀⠸⣆⠀⢠⡏⠊⠀⠀⠑⢋⣹⠀⠀⠀⠀⠸⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠓
⠰⣇⠀⠉⠉⠉⠳⢾⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠘⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠓⠦⢤⣀⡤⢞⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠈⠓⢦⡀⠀⠀⠀⠀⠀⠀