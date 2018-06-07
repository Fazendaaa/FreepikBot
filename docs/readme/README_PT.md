# MDN Search Docs Bot
Um bot do pro Telegram que pesquisa no site [Mozilla Developer Network](https://developer.mozilla.org/).

<div align = "center">
    <br>
    <img src="../../others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](../../README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](../../docs/readme/README_PT.md)

[![Build Status](https://travis-ci.org/Fazendaaa/MDNSearchBot.svg?branch=master)](https://travis-ci.org/Fazendaaa/MDNSearchBot)
[![Coverage Status](https://coveralls.io/repos/github/Fazendaaa/MDNSearchBot/badge.svg?branch=master)](https://coveralls.io/github/Fazendaaa/MDNSearchBot?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6069aecd89bb086265c/maintainability)](https://codeclimate.com/github/Fazendaaa/MDNSearchBot/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/fazendaaa/MDNSearchBot/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fazendaaa/MDNSearchBot?targetFile=package.json)

</div>

## Sobre
Um jeito simples de se fazer pesquisa de documentação no site da MDN para ficar mais fácil de enviar no Telegram.

### Disclaimer
Por padrão todos os comandos estão em Inglês, mas você pode verificar se há suporte na sua linguagem.

# Como utilizar
Primeiro de tudo, converse com [@mdnsearchbot](t.me/mdnsearchbot).

## Enviando documentação
O modo inline funciona em qualquer chat:
```
@mdnsearchbot Conteúdo a ser pesquisado
```
Examplo:
```
@mdnsearchbot Array
```
<div align="center">
    <img src="https://i.imgur.com/PH2QnNT.gif" />
</div>

## Ajuda
Se precisar de ajuda utilize o comando:
```
/help
```

# Como funciona?
Você pode construír um bot similar a este, eu escrevi um tutorial sobre isso no meu [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot), basta seguir os procedimentos citados em [BUILDING_PT.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING_PT.md).


# Como funciona?
Você pode construír um bot similar a este, eu escrevi um tutorial sobre isso no meu [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot), basta seguir os procedimentos citados em [BUILDING_PT.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING_PT.md).

# Deployment
Esse bot está rodando no [Heroku](http://heroku.com/) através de integração direta do Github, isso significa que cada nova push para a branch ```master``` representa o código que está atualmente servindo de diretriz por bot. Você pode verificar mais como o bot está rodando através do arquivo [Procfile](https://github.com/Fazendaaa/MDNSearchBot/blob/master/Procfile). Você também pode enviar uma cópia direta desse código para o Heroku através do seguinte botão:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/MDNSearchBot)

# Construído com
* [Dotenv](https://github.com/motdotla/dotenv)
* [Telegraf](http://telegraf.js.org/#/)
* [Telegraf-i18n](https://github.com/telegraf/telegraf-i18n)
* [Remove Accents](https://github.com/tyxla/remove-accents)
* [MDNSearchDocs](https://www.npmjs.com/package/mdn-search-docs)

# Arts
Eu fiz todas as artes pro bot:

<div align="center">
    <br>
    <img src="../../others/img/logo/logo.png" width=100/>
    <img src="../../others/img/homepage/homepage.png" width=100/>
    <img src="../../others/img/error/error.png" width=100/>
    <img src="../../others/img/notFound/notFound.png" width=100/>
    <br>
    <br>
</div>

# Código
[Typescript](http://typescriptlang.org/) puro e simples, além dos [padrões de linter da Microsoft](https://github.com/Microsoft/tslint-microsoft-contrib).

# Contribuindo
Por favor, eu não sou nativo/fluente em Inglês, então se você ver uma variável escrita errada ou até mesmo um comentário que eu escrevi de maneira errada, me avise. Contribuições não necessariamente devem ser feitas através de código apenas, elas tem a ver com melhorar o que já está presente das mais diversas maneiras para que mais pessoas possam aprender sobre.

Caso seja o código ou não, você pode me ajudar lendo as diretrizes no arquivo [CONTRIBUTING_PT.md](ttps://github.com/Fazendaaa/MDNSearchBot/blob/master/docs/contributing/CONTRIBUTING_PT.md). 

# Controle de versão
Eu adoraria dizer que [SemVer](https://semver.org/) ou algo do tipo fora utilizado porém, em experiência pessoal, esse tipo de aborgaem não funciona muito bem comigo, o cara que pode comitar várias vezes esse projeto por duas semanas seguidas e passar um anos sem dar um simples ```npm update``` no projeto. Então, não se é utilizado sistemas de versionamento.

# A realizar
Como esse README estará sendo atualizado com as mudanças importantes, não pretendo utilizar nenhum histórico de atualizações de bugs corrigidos ou novas funcionalidades. Todavia, você pode ter uma noção do que virá e o que está sob análise na aba de [Projects](ttps://github.com/Fazendaaa/MDNSearchBot/projects/) -- aviso: o conteúdo se encontra em Inglês.

# Autores
* Apenas [eu](https://github.com/Fazendaaa) até agora.

Considere me comprar um café:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Ou até mesmo se tornar um padrinho:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

Estou analisando a possibilidade de se colocar [PicPay](https://www.picpay.com/site/) e [Padrim](https://www.padrim.com.br/) -- já que são opções muito utilizadas no Brasil.

# Licença
Assim como muitos projetos de código livre, a licença MIT é utilizada aqui. Mais sobre em [LICENSE](https://github.com/Fazendaaa/MDNSearchBot/blob/master/LICENSE).
