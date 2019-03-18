const validEmail = require('../src/index');
const faker = require('faker');

describe('Starting e-mail validation feature test', () => {

    let email;

    it('Should return true', () => {

        for (var i = 0; i < 9; i++) {
            email = (faker.internet.email()).toLowerCase();
            console.log(email);
            expect(validEmail(email)).toEqual(true);
        }

    });

    it('Should return false', () => {

        const Types = [
            faker.address.streetAddress(),
            faker.internet.url(),
            faker.internet.domainName(),
            faker.internet.domainSuffix(),
            faker.internet.domainWord(),
            faker.internet.userAgent(),
            faker.internet.protocol(),
            faker.internet.userName(),
            faker.internet.avatar()
        ]

        for (var i = 0; i < 9; i++) {
            email = Types[i];
            console.log(email);
            expect(validEmail(email)).toEqual(false);
        }

    });

});