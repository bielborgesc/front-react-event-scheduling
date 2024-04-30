# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

O projeto consiste em fazer um sistema web de calendário de eventos com backend e frontend.

Será desenvolvido na arquitetura REST com as seguinte funcionalidades:

* Cadastro de usuário;
* Login para acesso ao sistema;
* Adição de eventos;
* Edição de eventos;
* Remoção de eventos;
* Listagem de eventos;

Com as tecnologias para o backend:
* NestJ para o desenvolvimento das funções
* TypeORM para conexões com o banco de dados 
* MySql como linguagem de banco de dados
* Bcrypt para a criptografia de senhas
* Passport JWT para a geração de tokens
* RXJS para conexões assíncronas
* TypeScript como linguagem de programação invés do JavaScript puro


Os atributos necessários para o evento são:
* Descrição;
* Hora e data de início;
* Hora e data de término;

* Não será possivel sobrescrever eventos e caso ocorra, emitirá um alerta para o usuário;
* Suporte a vários usuários;
* Os eventos serão ligados ao usuário que os criou;
Frontend renderizado no lado do cliente usando a biblioteca JS React;
* Eventos com duração de mais de um dia;
* Suporte a vários usuários, será implementado o convite a outros usuários para eventos, ou seja, o evento aparecerá no calendário do usuário convidado e o usuário convidado poderá responder se poderá participar ou não;
* Aplicação responsiva, com o uso de Bootstrap e SCSS;
* Se um evento for excluido, seus candidatos deverão ser notificados sobre o cancelamento do evento
