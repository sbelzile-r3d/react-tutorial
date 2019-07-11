import { KeycloakError } from 'keycloak-js';

export interface IKeycloak {
  login(): Keycloak.KeycloakPromise<boolean, KeycloakError>;
}
