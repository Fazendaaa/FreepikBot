'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.toInline = (input) => {
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
        };
    });
};
//# sourceMappingURL=parse.js.map