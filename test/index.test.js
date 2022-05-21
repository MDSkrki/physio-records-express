import server from "../src/index.js";
import supertest from 'supertest';

const app = supertest(server);

afterAll(()=>{
    server.close();
});

describe("Connectivity tests", () => {
    console.log('Starting connectivity tests');
    test('Server connection', async ()=>{
        const res = await app.get('/api/echo');
        expect(res.body.api).toBe('Alive')
    })
});
