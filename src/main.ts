/**
 * Main process
 */
'use strict';

import { config } from 'dotenv';
import { join } from 'path';
import { fetchFreepik } from './lib/freepik/fetch';
import { toInline } from './lib/telegram/parse';
import { messageToString } from './lib/utils/parse';

config();

// ---------------------------------------------------------------------------------------------------------------------

const telegraf = require('telegraf');
const telegarfi18n = require('telegraf-i18n');

const bot = new telegraf(<string>process.env.BOT_KEY);
const i18n = new telegarfi18n({
    defaultLanguage: 'en',
    allowMissing: true,
    directory: join(__dirname, '../others/locales')
});

bot.startPolling();
bot.use(telegraf.log());
bot.use(i18n.middleware());

// ---------------------------------------------------------------------------------------------------------------------

bot.start(({ i18n, replyWithMarkdown }) => {
    replyWithMarkdown(i18n.t('start'));
});

bot.help(async ({ i18n, replyWithMarkdown, replyWithVideo }) => {
    await replyWithMarkdown(i18n.t('help1'));
    await replyWithVideo('https://media.giphy.com/media/3vvl2dunxjN9HNXjwi/giphy.gif');
    await replyWithMarkdown(i18n.t('help2'));
});

bot.command('about', ({ i18n, replyWithMarkdown }) => {
    replyWithMarkdown(i18n.t('about'), { disable_web_page_preview: true });
});

bot.on('inline_query', async ({ i18n, answerInlineQuery, inlineQuery }) => {
    const message = messageToString({ message: inlineQuery.query });

    const paginationLimit = 20;
    const offset = parseInt(inlineQuery.id, 10);
    const start = offset % paginationLimit;
    const end = (start + 1) * paginationLimit;
    const page = (offset % 40) + 1;

    const results = await fetchFreepik({ message, translate: i18n, page });
    const response = results.slice(start, end);

    answerInlineQuery(toInline(response), { next_offset: offset + paginationLimit });
});
