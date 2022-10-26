const models = require('../db/models');

export default async (req: any, res: any) => {
    const dogs = await models.dogs.findAndCountAll({
        order: [
            ['id', 'DESC'],
        ],
    });

    res.status= 200;
    return res.json(dogs.rows);
}