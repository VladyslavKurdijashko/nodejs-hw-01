import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(contacts);
};