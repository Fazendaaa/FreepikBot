"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const freepik_scrapping_1 = require("freepik-scrapping");
const freepikToFetchResponse = ({ url, title, tags, is_free, thumb_url, download_url, creator_profile, translate }) => {
    const option = (true === is_free) ? 'free' : 'paid';
    return {
        title,
        thumb_url,
        description: tags.join(', '),
        message_text: translate.t('mask', { url, title, thumb_url, download_url, creator_profile, free: translate.t(option) })
    };
};
const curryFreepikToFetchResponse = ({ translate }) => ((remaining) => freepikToFetchResponse(Object.assign({ translate }, remaining)));
const searchAndParse = ({ message, translate, page }) => __awaiter(this, void 0, void 0, function* () {
    try {
        const searched = yield freepik_scrapping_1.searchFreepik({ term: message, page });
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
    }
    catch (e) {
        console.error(e);
        return [{
                title: translate.t('errorTitle'),
                description: translate.t('errorDescription'),
                thumb_url: 'https://i.imgur.com/8AVPJKq.png',
                message_text: translate.t('errorMessageText')
            }];
    }
});
exports.fetchFreepik = ({ message, translate, page }) => __awaiter(this, void 0, void 0, function* () {
    if ('' === message) {
        return [{
                title: translate.t('emptyTitle'),
                description: translate.t('emptyDescription'),
                thumb_url: 'https://i.imgur.com/pnXPQQU.png',
                message_text: translate.t('emptyMessageText')
            }];
    }
    return searchAndParse({ message, translate, page });
});
//# sourceMappingURL=fetch.js.map