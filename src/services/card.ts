import Joi from 'joi';
import CardModel from '../models/card';
import { CardI } from '../interfaces/cardI';
import { ErrorI } from '../interfaces/errorI';

const cardSchema = Joi.object({
    name: Joi.string().max(20).required(),
    image: Joi.string().max(4700),
    description: Joi.string().max(120).required(),
    rarity: Joi.string().required(),
    life: Joi.number().max(999).required(),
    attack: Joi.number().max(999).required(),
    defense: Joi.number().max(999).required(),
    price: Joi.number().max(9).required(),
    cardSuper: Joi.boolean().required(),
    deckId: Joi.number().required(),
});

class CardService {
    static createCardS = async (cardData: CardI): Promise<CardI | ErrorI | any> => {
        const { error } = cardSchema.validate(cardData);
        if (error) return { status: 400, message: error.message};
        const { name, image, description, rarity, life, attack, defense, price, cardSuper, deckId } = cardData;
        const created = await CardModel.create( { name, image, description, rarity, life, attack, defense, price, cardSuper, deckId });
        
        return created;
    }

    static getCardsS = async () => {
        const cards = await CardModel.findAll();
        
        if (!cards) return { status: 400, message: 'Você ainda não possui cartas'};
        
        return cards;
    }

    static deleteCardS = async (id: string) => {
        const target = await CardModel.findOne({ where: { id }})
        if (!target) return { status: 400, message: 'Ocorreu um erro ao apagar a carta'};
        
        const deleted = await target.destroy();
        return deleted;
    }
}

export default CardService;