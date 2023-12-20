import { Module } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
  controllers: [],
  providers: [KeycloakConfigService, KeycloakService],
  exports: [KeycloakConfigService, KeycloakService],
})
export class KeycloakModule {}
