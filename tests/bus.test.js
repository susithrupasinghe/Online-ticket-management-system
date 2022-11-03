const request = require("supertest")
const baseUrl = 'http://localhost:5000';
let busData = {}
describe(`Bus`, () => {
    const newBus = {
        busNo: "NC4564",
        busOwner: "testUser",
        nic: "123456789V",
        rout: "colombo-Kandy",
        price: 1000,
    }

    beforeAll(async () => {
        busData = await request(baseUrl)
            .post("/api/bus")
            .send(newBus);
    })
    afterAll(async () => {
        await request(baseUrl)
            .delete(`/api/bus/${busData.body._id}`);
    });

    it("should return 200 if newBus exists", async () => {
        const res = await request(baseUrl)
            .get("/api/bus/");
        expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

    it("should return data", async () => {
        const res = await request(baseUrl)
            .get(`/api/bus/${busData.body._id}`);
        expect(res.body.data).not.toBe(null);
    });
});