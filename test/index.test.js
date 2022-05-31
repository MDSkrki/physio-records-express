import server from "../src/index.js";
import supertest from "supertest";
import { connect, disconnect } from "../src/config/db.js";

const app = supertest(server);

beforeAll(async () => {
  await connect();
});

afterAll(async () => {
  server.close();
  await disconnect();
});

describe("Connectivity tests", () => {
  test("Server connection", async () => {
    const res = await app.get("/api/echo");
    expect(res.body.api).toBe("Alive");
  });
});

describe("Register tests", () => {
  test("Create user", async () => {
    const user = {
      name: "Daniel",
      surname: "Somkereki",
      email: "danie@daniel.com",
      password: "daniel",
      phone_number: "+34123456789",
      background_information: "Kinda long text",
    };
    const res = await app.post("/api/user/register").send(user);
    expect(res.body.name).toBe("Daniel");
  });
});
