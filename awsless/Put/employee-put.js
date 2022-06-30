const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const normalizeEvent = require('./normalizer');
const response = require('./response');

module.exports.employeePut = async event => {
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

    const params = {
        TableName: table,
        Key: {
            id: parseInt(data.id, 10),
        },
        UpdateExpression: 'set #a = :x, #b = :d, #c = :e, #f = :y',
        ExpressionAttributeNames: {
            '#a': 'idade',
            '#c': 'cargo',
            '#f': 'nome',
            '#b': 'updated_at',
        },
        ExpressionAttributeValues: {
            ':x': data.idade,
            ':e': data.cargo,
            ':y': data.nome,
            ':d': new Date().toISOString(),
            
        },
    };

    try {
        await dynamo.update(params).promise();

        console.log({
            message: 'Record has been update',
            data: JSON.stringify(params),
        });

        return response(200, `Record ${data.id} has been updated`);
    } catch (err) {
        console.error(err);
        return response(500, err);
    }
};