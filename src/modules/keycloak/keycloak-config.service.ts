import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  KeycloakConnectOptions,
  KeycloakConnectOptionsFactory,
} from 'nest-keycloak-connect';
import { ENVS } from '@/configs/envs';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
  url: string;
  realm: string;
  clientId: string;
  secret: string;

  constructor(private readonly configService: ConfigService) {
    this.url = configService.get<string>(ENVS.KEYCLOAK_URL);
    this.realm = configService.get<string>(ENVS.KEYCLOAK_REALM);
    this.clientId = configService.get<string>(ENVS.KEYCLOAK_CLIENT_ID);
    this.secret = configService.get<string>(ENVS.KEYCLOAK_CLIENT_SECRET);
  }

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: this.url,
      realm: this.realm,
      clientId: this.clientId,
      secret: this.secret,
    };
  }
}
