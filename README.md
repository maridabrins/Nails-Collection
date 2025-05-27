
<h1 align="center"> 
	  🚀 Nails Collection - Concluído ✅
</h1>

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO MENU DE NAVEGAÇÃO -->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-rotas-da-api">Rotas</a> • 
 <a href="#-observações">Observações</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autores">Autores</a> • 
 <a href="#-licença">Licença</a>
</p>

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DESCRIÇÃO SOBRE O PROJETO: -->
## 💻 Sobre o projeto

<!-- EXPLICA O MOTIVO DO PROJETO -->
Nails Collection é uma API Full Stack desenvolvida em React Native, Java e MySQL. Este projeto tem como objetivo avaliar e aprimorar nosso domínio nas diferentes tecnologias e ferramentas empregadas.





<!-- EXEMPLO DE LAYOUT: -->
## 🎨 Layout

<!-- AQUI VOCÊ PASSA O CAMINHO DA IMAGEM -->
![Tela](https://github.com/maridabrins/Nails-Collection/blob/main/thumbMobile.PNG)<br>
<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE COMO EXECUTAR O PROJETO -->
## 🚀 Como executar o projeto

### Pré-requisitos

- Java 21 ou superior   
- MySQL Server rodando  
- Yarn ou npm  
- Expo CLI 

### 🔧 Back-end (Spring Boot)

1. Clone o projeto:

   ```bash
   git clone https://github.com/seu-usuario/nails-collection.git
   cd nails-collection
   ```

2. Configure o banco de dados em `src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/nails_db
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Rode a aplicação:

   ```bash
   ./mvnw spring-boot:run
   ```

4. A API estará rodando em `http://localhost:8080`

---

### 📱 Front-end Mobile (React Native)

1. Acesse a pasta `mobile`:

   ```bash
   cd mobile
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o aplicativo:

   - Usando **Expo**:

     ```bash
     npx expo start
     ```



## 📡 Rotas da API

| Método HTTP | Endpoint                                                             | Descrição                                         |
|-------------|----------------------------------------------------------------------|--------------------------------------------------|
| `GET`       | `/eventos`                                                           | Lista todos os eventos                           |
| `GET`       | `/eventos/{id}`                                                      | Busca evento por ID                              |
| `POST`      | `/eventos`                                                           | Cria um novo evento                              |
| `PUT`       | `/eventos/{id}`                                                      | Atualiza um evento existente                     |
| `DELETE`    | `/eventos/{id}`                                                      | Exclui um evento por ID                          |
| `POST`      | `/participantes`                                                     | Cadastra um novo participante                    |
| `POST`      | `/participantes/{idParticipante}/inscrever/{idEvento}`              | Inscreve um participante em um evento            |
| `DELETE`    | `/participantes/{idParticipante}/cancelar/{idEvento}`               | Cancela a inscrição de um participante no evento |
| `GET`       | `/participantes/evento/{idEvento}/participantes`                    | Lista todos os participantes de um evento        |


## 📌 Observações

- Para testar as rotas você pode usar o Swagger (se configurado), Postman ou Insomnia.  
- Certifique-se de que o back-end esteja rodando **antes de iniciar o front-end**.

## 🛠 Tecnologias

-  #### 🖼 **Prototipo** ([Figma](https://www.figma.com/))

 - #### 📲 **Front-End**  ([HTML](https://html.com/)) 

 - #### 🎲 **Banco de dados** ([MySQL](https://www.mysql.com/))

 - #### 📃 **Back-end** ([Java](https://www.java.com/pt-BR/))


## ⚙ Ferramentas: 

As seguintes ferramentas foram usadas na construção do projeto:

<div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge" height="40" alt="vscode logo" />
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" height="40" alt="git logo" />
  <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" height="40" alt="github logo" />
 <img src="https://img.shields.io/badge/Eclipse IDE-2C2255?logo=eclipseide&logoColor=white&style=for-the-badge" height="40" alt="eclipseide logo"  />
</div>

<!-- MODELO DE COMO CONTRIBUIR PARA O PROJETO -->
## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`




<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE AUTOR-->
## 🦸 Autores

 <a href="https://github.com/anakarine1511">
Ana Karine</a>
 <br />
 <a href="https://github.com/isakawecki">
Isabella Kawecki</a>
 <br />
 <a href="https://github.com/maridabrins">
Mariana Dabrins</a>
 <br />
 


<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE LICENÇA -->
## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).



