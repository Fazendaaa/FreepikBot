/**
 * Fetch all data from Freepik.
 */

import { FreepikElement, searchFreepik } from 'freepik-scrapping';
import { FetchContext, FetchResponse, FreepikToResponseContext } from './index';

const freepikToFetchResponse = ({ url, title, tags, is_free, thumb_url, download_url, creator_profile, translate }: FreepikToResponseContext): FetchResponse => {
    const option = (true === is_free) ? 'free' : 'paid';

    return {
        title,
        thumb_url,
        description: tags.join(', '),
        message_text: translate.t('mask', { title, download_url, creator_profile, free: translate.t(option) })
    };
};

const curryFreepikToFetchResponse = ({ translate }) => ((remaining) => freepikToFetchResponse({ translate, ...remaining }));

const searchAndParse = async({ message, translate, page }: FetchContext): Promise<Array<FetchResponse>> => {
    try {
        const searched = <Array<FreepikElement>> await searchFreepik({ term: message, page });
        const curriedMask = curryFreepikToFetchResponse({ translate });

        if (0 === searched.length) {
            return [{
                title: translate.t('notFoundTitle'),
                description: translate.t('notFoundDescription'),
                thumb_url: 'https://i.imgur.com/NBJgka6.png',
                message_text: translate.t('notFoundMessageText')
            }];
        }

        return searched.map(curriedMask);
    } catch (e) {
        return [{
            title: translate.t('errorTitle'),
            description: translate.t('errorDescription'),
            thumb_url: 'https://i.imgur.com/8AVPJKq.png',
            message_text: translate.t('errorMessageText')
        }];
    }
};

export const fetchFreepik = async ({ message, translate, page }: FetchContext): Promise<Array<FetchResponse>> => {
    if ('' === message) {
        return [{
            title: translate.t('emptyTitle'),
            description: translate.t('emptyDescription'),
            thumb_url: 'https://i.imgur.com/pnXPQQU.png',
            message_text: translate.t('emptyMessageText')
        }];
    }

    return searchAndParse({ message, translate, page });
};
