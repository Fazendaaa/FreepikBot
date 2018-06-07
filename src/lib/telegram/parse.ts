/**
 * Parses the messages to Telegram's format.
 */
'use strict';

import { InlineQueryResultArticle } from 'telegram-typings';
import { MinimumInfo } from '../../index';

export const toInline = (input: Array<MinimumInfo>): Array<InlineQueryResultArticle> => {
    return input.map(({ title, description, thumb_url, message_text }, index) => {
        return {
            title,
            description,
            thumb_url,
            id: index.toString(),
            type: 'article',
            input_message_content: {
                message_text,
                parse_mode: 'Markdown'
            }
        }
    });
};
