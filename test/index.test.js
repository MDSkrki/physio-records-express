import server from "../src/index.js";
import supertest from 'supertest';

const app = supertest(server);

describe("Connectivity tests", () => {
    test('Server connection', async ()=>{
        const res = await app.get('/api/echo');
        expect(res.body.api).toBe('Alive')
    });
});
