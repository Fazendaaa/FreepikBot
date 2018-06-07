'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const remove_accents_1 = require("remove-accents");
exports.messageToString = ({ message }) => {
    return Buffer.from(remove_accents_1.remove(message), 'ascii').toString('ascii').replace(/(?:=\(|:0|:o|: o|: 0)/, ': o');
};
//# sourceMappingURL=parse.js.map