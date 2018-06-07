/**
 * Parses commands or messages.
 */
'use strict';

import { remove } from 'remove-accents';

export const messageToString = ({ message }: { message: string }): string => {
    return Buffer.from(remove(message), 'ascii').toString('ascii').replace(/(?:=\(|:0|:o|: o|: 0)/, ': o');
};
