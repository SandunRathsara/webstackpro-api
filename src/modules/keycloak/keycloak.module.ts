import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
  controllers: [],
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class KeycloakModule {}
