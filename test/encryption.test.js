import { hasher } from "../src/shared/services/encryption";
import bcrypt from 'bcrypt';

describe('Test suite for encription services', ()=>{
    test('Password hasher', async ()=>{
        const input = 'text';
        const hashedInput = await hasher(input);
        const checkedInput = await bcrypt.compare(input, hashedInput);
        expect(checkedInput).toBe(true);
    })
});