import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

export const registerUserSchema = {
  [Segments.BODY]: Joi.object({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  }),
};
