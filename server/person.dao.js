import { Pool, Client } from 'pg';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,
})

const PersonDAO = {
    create : (person) => {
        client.connect();

        const createPerson = 'INSERT INTO person(name, age, address, sex) VALUES ($1, $2, $3, $4)';
        const createPersonValues = [person.name, person.age, person.address, person.sex];
        client.query(createPerson, createPersonValues, (err, res) => {
            console.info(err, res);
            client.end();
        });
    }
}

export default PersonDAO;
