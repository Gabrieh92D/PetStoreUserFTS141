const supertest = require('supertest');
const test = require('supertest/lib/test');
const userName = "Gabriel_Mar";

describe('API petStore Swagger - User', () => {

    const request = supertest('https://petstore.swagger.io/v2');

    it('GET User', async () => {
        const res = await request
            .get(`/user/${userName}`);

        expect(res.statusCode).toBe(200);

        expect(res.body.id).toBe(297537609);
        expect(res.body.username).toBe(userName);
        expect(res.body.firstName).toBe("Gabriel");
        expect(res.body.lastName).toBe("Marques");
        expect(res.body.email).toBe("gabriel.marques@gmail.com");
        expect(res.body.password).toBe("@arca1881");
        expect(res.body.phone).toBe("66986765544");
        expect(res.body.userStatus).toBe(0);

    });

});