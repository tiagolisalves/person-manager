import { Pool, Client } from 'pg';

const connectionConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'person-manager',
    password: '',
    port: 5432,
};

const PersonDAO = {
    create : (person) => {
        const client = new Client(connectionConfig);
        client.connect();
        
        const createPerson = 'INSERT INTO person(name, age, address, sex) VALUES ($1, $2, $3, $4)';
        const createPersonValues = [person.name, person.age, person.address, person.sex];
        client.query(createPerson, createPersonValues, (err, res) => {
            console.info(err, res);
            client.end();
        });
    }, 
    read : () => {
        const client = new Client(connectionConfig);
        client.connect();

        const readPersons = 'SELECT * FROM PERSON';
        return new Promise((resolve, reject) => {
            client.query(readPersons, (err, res) => {
                client.end();
                if(err){
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
}

export default PersonDAO;
