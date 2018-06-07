/**
 * Fetch all data from Freepik.
 */

import { FreepikElement, searchFreepik } from 'freepik-scrapping';
import { FetchContext, FetchResponse, FreepikToResponseContext } from './index';

const freepikToFetchResponse = ({ url, title, tags, is_free, thumb_url, download_url, creator_profile, translate }: FreepikToResponseContext): FetchResponse => {
    const option = (true === is_free) ? 'free' : 'paid';
    const parsedTags = tags.slice(0, 5).join(',');

    return {
        title,
        thumb_url,
        description: parsedTags,
        message_text: translate.t('mask', { url, title, thumb_url, download_url, creator_profile, free: translate.t(option), tags: parsedTags })
    };
};

const curryFreepikToFetchResponse = ({ translate }) => ((remaining) => freepikToFetchResponse({ translate, ...remaining }));

const searchAndParse = async({ message, translate, page }: FetchContext): Promise<Array<FetchResponse>> => {
    const limit = 40;
    const truncate = Math.trunc(page / limit);
    const pageNumber = truncate + 1;

    const slice = 20;
    const mod = page % slice;
    const start = mod * 20;
    const end = (mod + 1) * 20;

    try {
        const searched = <Array<FreepikElement>>await searchFreepik({ term: message, page: pageNumber });
        const curriedMask = curryFreepikToFetchResponse({ translate });

        if (0 === searched.length && 1 === pageNumber) {
            return [{
                title: translate.t('notFoundTitle'),
                description: translate.t('notFoundDescription'),
                thumb_url: 'https://i.imgur.com/NBJgka6.png',
                message_text: translate.t('notFoundMessageText')
            }];
        }

        return searched.slice(start, end).map(curriedMask);
    } catch (e) {
        console.error(e);

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
