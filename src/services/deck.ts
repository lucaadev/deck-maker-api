import Joi from 'joi';
import DeckModel from '../models/deck';
import { DeckI } from '../interfaces/deckI';

const deckSchema = Joi.object({
    name: Joi.string().max(20).required(),
    ownerId: Joi.number(),
});


class DeckService {
    static createDeckS = async (deckData: DeckI) => {
        const { error } = deckSchema.validate(deckData);
        
        if (error) return { status: 400, message: error.message};
        const { name, ownerId } = deckData;
        const created = await DeckModel.create({ name, ownerId } );
        return created;
    }
    static getDeckS = async () => {
        const decks = await DeckModel.findAll();
        
        if (!decks) return { status: 400, message: 'Você ainda não possui decks'};
        return decks;
    }

    static deleteDeckS = async (id: string) => {
        const target = await DeckModel.findOne({ where: { id }})
        if (!target) return { status: 400, message: 'Ocorreu um erro ao apagar a carta'};
        
        const deleted = await target.destroy();
        return deleted;
    }
}

export default DeckService;