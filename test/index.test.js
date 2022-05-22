import server from "../src/index.js";
import supertest from 'supertest';
import { connect, disconnect } from "../src/config/db.js";

const app = supertest(server);

beforeAll(async ()=>{
    await connect();
});

afterAll(async ()=>{
    server.close();
    disconnect();
});

describe("Connectivity tests", () => {
    console.log('Starting connectivity tests');

    test('Server connection', async ()=>{
        const res = await app.get('/api/echo');
        expect(res.body.api).toBe('Alive')
    });
});
