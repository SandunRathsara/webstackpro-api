import * as Joi from 'joi';
import { UppercaseKeys, MapKeysToString } from '@/utils/types';
import * as process from 'process';

export const envs = () => ({
  cors_allowed_origin: process.env.CORS_ALLOWED_ORIGIN,
  database_url: process.env.DATABASE_URL,
  port: parseInt(process.env.PORT),
});

export const ENVS: UppercaseKeys<MapKeysToString<ReturnType<typeof envs>>> = {
  CORS_ALLOWED_ORIGIN: 'cors_allowed_origin',
  DATABASE_URL: 'database_url',
  PORT: 'port',
};

export const envValidationSchema = Joi.object<
  UppercaseKeys<ReturnType<typeof envs>>
>({
  CORS_ALLOWED_ORIGIN: Joi.string().default('*'),
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().required(),
});
