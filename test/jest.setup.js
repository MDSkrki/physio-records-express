import server from "../src/index.js";
import { connect, disconnect } from "../src/config/db.js";

beforeAll(async ()=>{
    await connect();
});

afterAll(async ()=>{
    server.close();
    disconnect();
});