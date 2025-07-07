const Joi = require("joi");

const logSchema = Joi.object({
  level: Joi.string().valid("error", "warn", "info", "debug").required(),
  message: Joi.string().required(),
  resourceId: Joi.string().required(),
  timestamp: Joi.string().isoDate().required(),
  traceId: Joi.string().required(),
  spanId: Joi.string().required(),
  commit: Joi.string().required(),
  metadata: Joi.object().required(),
});

module.exports = logSchema;
