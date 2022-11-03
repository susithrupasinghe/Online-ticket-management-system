const request = require("supertest")
const baseUrl = 'http://localhost:5000';
let paymentData = {}
describe(`Payment`, () => {
    const newPayment = {
        fullName: "test",
        cardNumber: "4567456",
        expDate: "2022-11-03",
        cvv: "786"
    }

    beforeAll(async () => {
        paymentData = await request(baseUrl)
            .post("/api/payment")
            .send(newPayment);
    })
    afterAll(async () => {
        await request(baseUrl)
            .delete(`/api/payment/${paymentData.body._id}`);
    });

    it("should return 200 if newBus exists", async () => {
        const res = await request(baseUrl)
            .get("/api/payment/");
        expect(res.statusCode).toEqual(200);
        expect(res.body.error).not.toBe(null);
    });

    it("should return data", async () => {
        const res = await request(baseUrl)
            .get(`/api/payment/${paymentData.body._id}`);
        expect(res.body.data).not.toBe(null);
    });
});