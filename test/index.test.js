import server from "../src/index.js";
import supertest from 'supertest';

const app = supertest(server);

describe("Connectivity tests", () => {
    console.log('Starting connectivity tests');

    test('Server connection', async ()=>{
        console.log('Testing api health');
        const res = await app.get('/api/echo');
        expect(res.body.api).toBe('Alive')
    });
});
