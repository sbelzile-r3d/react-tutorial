import { IKeycloak } from './IKeycloak';
import Keycloak, { KeycloakError } from 'keycloak-js';
import { injectable } from 'inversify';

@injectable()
export class KeycloakWrapper implements IKeycloak {
  private keycloak: Keycloak.KeycloakInstance;

  constructor() {
    this.keycloak = Keycloak({
      'realm': 'Devin',
      'url': 'http://localhost:8080/auth',
      'ssl-required': 'external',
      'clientId': 'devin-web',
      'public-client': true,
      'confidential-port': 0
    });
  }

  get authenticated() {
    return this.keycloak.authenticated;
  }

  login(): Keycloak.KeycloakPromise<boolean, KeycloakError> {
    return this.keycloak.init({onLoad: 'login-required', checkLoginIframe: false});
  }

  logout() {
    this.keycloak.logout();
  }
}
