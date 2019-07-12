import { IKeycloak } from './IKeycloak';
import Keycloak from 'keycloak-js';
import { injectable } from 'inversify';


@injectable()
export class KeycloakWrapper implements IKeycloak {
  private keycloak: Keycloak.KeycloakInstance;

  constructor() {
    this.keycloak = Keycloak({
      'realm': 'Devin',
      'url': 'http://localhost:8080/auth',
      'clientId': 'devin-web',
      'ssl-required': 'external',
      'public-client': true
    });
  }

  get authenticated() {
    return this.keycloak.authenticated;
  }

  get userProfile(): Keycloak.KeycloakProfile {
    return this.keycloak.profile;
  }

  init(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.keycloak.init({
        checkLoginIframe: false,
        responseMode: 'query'
      })
      .success(isUserAuthenticated => resolve(isUserAuthenticated))
      .error(error => reject(error));
    });
  }

  login(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.keycloak.login()
        .success(() => resolve())
        .error(error => reject(error));
    });
  }

  logout() {
    this.keycloak.logout();
  }

  loadUserProfile(): Promise<Keycloak.KeycloakProfile> {
    return new Promise<Keycloak.KeycloakProfile>((resolve, reject) => {
      this.keycloak.loadUserProfile()
        .success(profile => resolve(profile))
        .error(error => reject(error));
    });
  }
}
