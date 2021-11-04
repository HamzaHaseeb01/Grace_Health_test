const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
import model from '../models';

const seedDB = async () => {
    const queryResult = await model.data.findAll();
    if (!queryResult) {
        let result = [];
        return fs.createReadStream(path.join(__dirname, '../Data.csv'))
            .pipe(csv({}))
            .on('data', (data) => {
                result.push(data)
            })
            .on('end', () => {
                return model.data.bulkCreate(result).then(() => console.log('csv added')).catch(err => console.log(err));
            });
    }
    return console.log('seeder added')
}

export default seedDB;

