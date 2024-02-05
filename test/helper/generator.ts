import {faker} from '@faker-js/faker';

class Generator{

    get randomFirstName(){ return faker.person.firstName() }

    get randomLastName(){ return faker.person.lastName() }

    get randomUsername(){ return faker.internet.userName() }

    get randomPassword(){ return faker.internet.password() }

    get randomBankName() { return faker.string.alphanumeric(5) }

    get randomRoutingNumber() { return faker.string.alphanumeric(9) }

    get randomAccountNumber() { return faker.string.numeric(9) }

    get wrongRoutingNumber(){ return faker.string.alphanumeric(5) }

    get randomAmount(){ return faker.number.int(100) }

    get randomNote(){ return faker.string.alpha(7)}

    get randomMinValue(){return faker.number.int({ min: 10, max: 490 })}

    get randomMaxValue(){return faker.number.int({ min: 510, max: 1000 })}
}

export default new Generator();