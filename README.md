# FreepikBot
A friendly bot that searches the Freepink website content.

<div align = "center">
    <br>
    <img src="./others/img/logo/logo.png" height=260>
    <br>

[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg?longCache=true&style=for-the-badge)](https://saythanks.io/to/Fazendaaa)

[![English README](https://img.shields.io/badge/Language-EN-blue.svg?longCache=true&style=for-the-badge)](./README.md)
[![Portuguese README](https://img.shields.io/badge/Linguagem-PT-green.svg?longCache=true&style=for-the-badge)](./docs/readme/README_PT.md)

[![Build Status](https://travis-ci.org/Fazendaaa/MDNSearchBot.svg?branch=master)](https://travis-ci.org/Fazendaaa/MDNSearchBot)
[![Coverage Status](https://coveralls.io/repos/github/Fazendaaa/MDNSearchBot/badge.svg?branch=master)](https://coveralls.io/github/Fazendaaa/MDNSearchBot?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/c6069aecd89bb086265c/maintainability)](https://codeclimate.com/github/Fazendaaa/MDNSearchBot/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/fazendaaa/MDNSearchBot/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fazendaaa/MDNSearchBot?targetFile=package.json)

</div>

## About
A simple way of searching MDN content through Telegram.

### Disclaimer
By default all the commands are in English, but you can see if que same command is available in your language.

# How to use it
First of all, talk to [@mdnsearchbot](t.me/mdnsearchbot).

## Sending Documentation
The inline mode works in any chat conversation:
```
@mdnsearchbot content to be searched
```
Example:
```
@mdnsearchbot Array
```
<div align="center">
    <img src="https://i.imgur.com/PH2QnNT.gif" />
</div>

## Help
If you have any other questions about it just use it the help command:
```
/help
```

# How does it work?
You can build yourself a bot similar to this one, I've wrote a tutorial about it in my [Podesearch Bot](https://github.com/Fazendaaa/podsearch_bot) just follow the procedures listed in [BUILDING.md](https://github.com/Fazendaaa/podsearch_bot/blob/master/docs/building/BUILDING.md).

# Deployment
This bot is up and running at [Heroku](http://heroku.com/) through the Github integration, that means that each new push to the ```master``` branch means that is the code serving the bot. You can see more about how does it run at the server by looking at the [Procfile](https://github.com/Fazendaaa/MDNSearchBot/blob/master/Procfile). You can also deploy yourself this bot into Heroku through:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Fazendaaa/MDNSearchBot)

# Build with
* [Dotenv](https://github.com/motdotla/dotenv)
* [Telegraf](http://telegraf.js.org/#/)
* [Telegraf-i18n](https://github.com/telegraf/telegraf-i18n)
* [Remove Accents](https://github.com/tyxla/remove-accents)
* [MDNSearchDocs](https://www.npmjs.com/package/mdn-search-docs)

# Artwork
I've made all the artwork for it:

<div align="center">
    <br>
    <img src="./others/img/logo/logo.png" width=100/>
    <img src="./others/img/error/error.png" width=100/>
    <img src="./others/img/notFound/notFound.png" width=100/>
    <br>
    <br>
</div>

# Contributing
Please, I'm not a native/fluent english speaker, so whether you see a variable name wrote the wrong way or even some comment where I've wrote something with the wrong "past perfect way of life" or something like that, please let me know it. Not always is just about the code, but rather making it more clear to other people to learn from it.

So, whether is code or not you can help me out making this code more accessible by reading the [CONTRIBUTING.md](https://github.com/Fazendaaa/MDNSearchBot/blob/master/docs/contributing/CONTRIBUTING.md). 

# Versioning
I would love to say that [SemVer](https://semver.org/) or anything like that is used but, in my personal experience, this kind of approach doesn't work very well with me, the guy who could be committing in this project for two weeks in a roll and leave it for almost one year with no simple ```npm update```. So, no versioning system is used. 

## Testing
There's a [Travis CI](http://travis-ci.org/) integration and I've written all the testing with [Jest](https://facebook.github.io/jest/).

## Code
Plain and simple [Typescript](http://typescriptlang.org/) and the [Microsoft linter standards](https://github.com/Microsoft/tslint-microsoft-contrib) for it.

# Contributing
Just talk to me through opening a issue.

# Versioning
Just using plain and simple npm version. See the badge at the top of this readme. 

# TODO
Since I will be keeping this README up to date with any major change and I don't use any versioning system to log all the fixed bugs or previous projects updates, you can still have a taste of what comes next and what is being under analysis right in the [Projects](https://github.com/Fazendaaa/MDNSearchBot/projects/) tab.

# Authors
* Only [me](https://github.com/Fazendaaa) for now.

Consider buy me a coffee:

[![Buy Me a Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/Fazenda)

Or even becoming a patron:

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/Fazenda/overview)

# License
Like many Open-Source Software (OSS) the MIT license is used, more about it in [LICENSE](https://github.com/Fazendaaa/MDNSearchBot/blob/master/LICENSE).
