import Joi from "joi";

export const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(2).max(20).required(),
  password: Joi.string().min(8).required(),
});
