const { check } = require('express-validator');
const { types } = require('../db/models/pokemonType');
const { handleValidationErrors } = require('./utils');

const id = check('id')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0 });
const no = check('no')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0 });
const attack = check('attack')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0, max: 100 })
  .toInt();
const defense = check('defense')
  .notEmpty()
  .withMessage('cannot be empty')
  .isInt({ min: 0, max: 100 })
  .toInt();
const imageUrl = check('imageUrl')
  .notEmpty()
  .withMessage('cannot be empty')
  .isURL({ require_protocol: false, require_host: false });
const name = check('name')
  .notEmpty()
  .withMessage('cannot be empty');
const type = check('type')
  .notEmpty()
  .withMessage('cannot be empty')
  .isIn(types);
const moves = check('moves').isArray();

exports.validateCreate = [
  no,
  attack,
  defense,
  imageUrl,
  name,
  type,
  moves,
  handleValidationErrors
];

exports.validateUpdate = [
  id,
  no,
  attack,
  defense,
  imageUrl,
  name,
  type,
  moves,
  handleValidationErrors
];
