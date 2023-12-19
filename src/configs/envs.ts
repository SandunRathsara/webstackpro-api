import * as Joi from 'joi';
import { UppercaseKeys, MapKeysToString } from '@/utils/types';
import * as process from 'process';

export const envs = () => ({
  cors_allowed_origin: process.env.CORS_ALLOWED_ORIGIN,
  database_url: process.env.DATABASE_URL,
  port: parseInt(process.env.PORT),

  // Keycloak
  keycloak_url: process.env.KEYCLOAK_URL,
  keycloak_realm: process.env.KEYCLOAK_REALM,
  keycloak_client_id: process.env.KEYCLOAK_CLIENT_ID,
  keycloak_client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
});

export const ENVS: UppercaseKeys<MapKeysToString<ReturnType<typeof envs>>> = {
  CORS_ALLOWED_ORIGIN: 'cors_allowed_origin',
  DATABASE_URL: 'database_url',
  PORT: 'port',

  // Keycloak
  KEYCLOAK_URL: 'keycloak_url',
  KEYCLOAK_REALM: 'keycloak_realm',
  KEYCLOAK_CLIENT_ID: 'keycloak_client_id',
  KEYCLOAK_CLIENT_SECRET: 'keycloak_client_secret',
};

export const envValidationSchema = Joi.object<
  UppercaseKeys<ReturnType<typeof envs>>
>({
  CORS_ALLOWED_ORIGIN: Joi.string().default('*'),
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().required(),

  // Keycloak
  KEYCLOAK_URL: Joi.string().required(),
  KEYCLOAK_REALM: Joi.string().required(),
  KEYCLOAK_CLIENT_ID: Joi.string().required(),
  KEYCLOAK_CLIENT_SECRET: Joi.string().required(),
});
