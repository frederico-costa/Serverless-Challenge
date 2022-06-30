const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const normalizeEvent = require('./normalizer');
const response = require('./response');

function createId() {
    const now = new Date
    let id = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`
    return id
}

module.exports.employeePost = async event => {
if (process.env.DEBUG) {
        console.log({
            message: 'Received event',
            data: JSON.stringify(event),
        });
    }

    const table = event.table || process.env.TABLE;
    if (!table) {
        throw new Error('No table name defined.');
    }

    const { data } = normalizeEvent(event);
    const dateId = parseInt(createId(), 10);

    const params = {
        TableName: table,
        Item: {
            id: dateId,
            ...data,
            created_at: new Date().toISOString(),
        },
    };

    try {
        await dynamo.put(params).promise();

        console.log({
            message: 'Record has been created',
            data: JSON.stringify(params),
        });

        return response(201, `Record ${dateId} has been created`);
    } catch (err) {
        console.error(err);
        return response(500, err);
    }
};