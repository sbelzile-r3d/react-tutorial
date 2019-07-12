import { KeycloakError } from 'keycloak-js';

export interface IKeycloak {
  login(): Promise<void>;
}
