import bcrypt from 'bcrypt';

export const hasher = async (text) => {
    return await bcrypt.hash(text, 10);
}
