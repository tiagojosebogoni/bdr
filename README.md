# Informações API
  Projeto de uma APi, onde é possível registar tarefas, informar quando ela foi iniciada,
  quando foi finalizada. a API também fornece alguns indicadores:
    -Desempenho geral dos usuários em determinado período de tempo;
    -Número de tarefas concluídas;
    -Média de tarefas concluídas por usuário;
    -Tempo médio entre “aberto” e “fazendo” das tarefas;
    -Tempo médio entre “fazendo” e “finalizado” das tarefas.

  ## Tecnologias utilizadas
    - express
    - node
    - eslint
    - prettier
    - banco postgres

## Instalação
 # Configurando a aplicação
    1) Clone este repositório 'git clone https://github.com/tiagojosebogoni/bdr.git'
    2) Entre na pasta do projeto clonado 'cd bdr'
    3) Execute o comando 'docker-compose up' para criar e subir o banco de dados
    4) Execute o comando 'yarn' ou 'npm' para instalar as depedências
    5) Execute o comando 'npx sequelize-cli db:migrate' para criar as tabelas no banco de dados

## Importação do do arquivo do insomnia para teste da API
  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=BDR%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftiagojosebogoni%2Fbdr%2Fmain%2FexportInsomnia.json%3Ftoken%3DAA7N65BBRBP3FC5NIJ5GLU27YZOAI)

