//Validatiom
const Joi = require("@hapi/joi");

//Register validation

const registerValidation = (data) => {
  const schema = {
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data,schema);
};

//LOgin validation
const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  };

  return Joi.validate(data,schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;