"use strict";Object.defineProperty(exports, "__esModule", {value: true});// import bcrypt from 'bcryptjs';
// import User from '../models/User';
// import Card from '../models/Card';
// import Deck from '../models/Deck';

class HomeController {
  async index(req, res) {
    // const newDeck = await Deck.create({
    //   name: 'Ingles',
    // });
    // res.json(newDeck);
    // const newCard = await Card.create({
    //   front: 'é o front aqui',
    //   back: 'O back aqui',
    //   study_date: '2022-03-21',
    //   current_count_study: 1,
    //   next_study: '2022-03-22',
    //   deck_id: '2',
    // });
    // res.json(newCard);
    // res.send({
    //   ola: 'fla',
    // });
    res.send({
      ola: 'hehe boi',
    });
  }
}

exports. default = new HomeController();
