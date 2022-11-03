const request = require("supertest")
const baseUrl = 'http://localhost:5000';
let qrData = {}
describe(`QR`, () => {
    const newQR = {
        accountName: "test6",
        date: "2022-11-01",
        time: "12.35AM"
    }

    beforeAll(async () => {
        qrData = await request(baseUrl)
            .post("/api/qr")
            .send(newQR);
    })
    afterAll(async () => {
        await request(baseUrl)
            .delete(`/api/qr/${qrData.body._id}`);
    });

    it("should return 200 if newBus exists", async () => {
        const res = await request(baseUrl)
            .get("/api/qr/all");
        expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

    it("should return data", async () => {
        const res = await request(baseUrl)
            .get(`/api/qr/${qrData.body._id}`);
        expect(res.body.data).not.toBe(null);
    });
});