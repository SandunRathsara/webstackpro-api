import { Module } from '@nestjs/common';
import { KeycloakService } from './keycloak.service';
import { KeycloakController } from './keycloak.controller';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
  controllers: [KeycloakController],
  providers: [KeycloakConfigService, KeycloakService],
  exports: [KeycloakConfigService, KeycloakService],
})
export class KeycloakModule {}
