# Countries Web
Custom Countries - Desafio Técnico Angular

# Arquitetura da Aplicação
A aplicação é uma Single Page Application (SPA) rodando na versão 10 do Angular, na qual os recursos que compõem as interfaces são carregados dinamicamente conforme demanda. A responsividade da aplicação é implementada com base no framework front-end Bootstrap 4. O roteamento entre telas/interfaces é realizado pelo módulo de roteamento do Angular no front-end ao longo das interações do usuário com as funcionalidades do sistema.

Alguns plugins/pacotes utilizados:
- bootstrap: Framework Front-end
- jquery: Biblioteca de funções javascript
- ngx-pagination: package utilizado para paginação (grids, cards, etc)

# Orientações para subir a aplicação
- Rodar o comando npm install para instalar as dependências
- apontar no arquivo environment.ts na propriedade apiUrl o link da API (ex.: https://localhost:5001/api)
- Subir a API (http://github.com/ruiflexa/custom-countries-api)  bem como a API Graph Countries (https://github.com/lennertVanSever/graphcountries). Para subir estas APIs basta seguir as orientações no README dos respectivos repositórios
- Rodar o comando ng s (acesso do site está no endereço padrão do Angular - http://localhost:4200

- Telas

Login
![image](https://user-images.githubusercontent.com/23639567/116627062-cbe9a000-a922-11eb-83ea-fa4a7f2974ad.png)

Tela de listagem
![image](https://user-images.githubusercontent.com/23639567/116627105-e459ba80-a922-11eb-8ab6-917aece77a16.png)

País quando não tem informações customizadas 
![image](https://user-images.githubusercontent.com/23639567/116627128-f0de1300-a922-11eb-95ff-95e72cfbf091.png)

País quando tem informações customizadas
![image](https://user-images.githubusercontent.com/23639567/116627194-08b59700-a923-11eb-9467-5a669de691a3.png)



