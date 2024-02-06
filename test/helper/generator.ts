import {faker} from '@faker-js/faker';

class Generator{

    async randomFirstName(){ return faker.person.firstName() }

    async randomLastName(){ return faker.person.lastName() }

    async randomUsername(){ return faker.internet.userName() }

    async randomPassword(){ return faker.internet.password() }

    async randomBankName() { return faker.string.alphanumeric(5) }

    async randomRoutingNumber() { return faker.string.alphanumeric(9) }

    async randomAccountNumber() { return faker.string.numeric(9) }

    async wrongRoutingNumber(){ return faker.string.alphanumeric(5) }

    async randomAmount(){ return faker.number.int(100) }

    async randomNote(){ return faker.string.alpha(7)}

    async randomMinValue(){return faker.number.int({ min: 10, max: 490 })}

    async randomMaxValue(){return faker.number.int({ min: 510, max: 1000 })}
}

export default new Generator();