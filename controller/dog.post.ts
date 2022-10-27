const models = require('../db/models');
import { Dog } from '../utils/types';
import { dogDTOSchema } from '../utils/validator';

export default async (req: any, res: any) => {
    const dog  = req.body as Dog;
    try {
        const dogObj = await dogDTOSchema.validate(dog, { abortEarly: false });
        const dbObj = await models.dogs.create(dogObj);
        res.json({ ok : true, id: dbObj.id });
    } catch (e: any) {
        res.status = 400;
        res.json(e.errors)
    }

}