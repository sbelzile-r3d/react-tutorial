import { injectable, inject } from 'inversify';
import { KeycloakWrapper } from '../keycloak/KeycloakWrapper';

export interface IAuthenticationService {
  isAuthenticated(): boolean;
  login(): Promise<void>;
}

@injectable()
export class AuthenticationService {
  @inject(KeycloakWrapper)
  private keycloak: KeycloakWrapper;

  isAuthenticated(): boolean {
    return this.keycloak.authenticated;
  }

  get userProfile(): Keycloak.KeycloakProfile {
    return this.keycloak.userProfile;
  }

  login(): Promise<void> {
    return this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }
}
