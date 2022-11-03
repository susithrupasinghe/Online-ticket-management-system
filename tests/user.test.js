const request = require("supertest")
const baseUrl = 'http://localhost:5000';
const id = '6362f5977a050c4c19a33411';
let userData = {}
describe(`User`, () => {
    const newUser = {
        name: "Test User",
        username: "testUser",
        phoneNumber: "0712345678",
        address: "Test Address",
        nic: "123456789V",
        password: "testPassword",
    }

    beforeAll(async () => {
        userData = await request(baseUrl)
            .post("/api/user")
            .send(newUser);
    })
    afterAll(async () => {
        await request(baseUrl)
            .delete(`/api/user/${userData._id}`);
    });

    it("should return 200 if user exists", async () => {
        console.log(userData.body._id);
        const res = await request(baseUrl)
            .get("/api/user/all");
        expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

    it("should return data", async () => {
        const res = await request(baseUrl)
            .get(`/api/user/${userData.body._id}`);
        expect(res.body.data).not.toBe(null);
    });
});