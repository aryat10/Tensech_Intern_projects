// validators/AuthValidator.ts
import Joi from "joi";

export const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
