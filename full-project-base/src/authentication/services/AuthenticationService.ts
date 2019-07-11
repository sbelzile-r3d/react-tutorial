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

  login(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.keycloak.login()
        .success(() => resolve())
        .error(error => reject(error));
    });
  }

  logout(): void {
    this.keycloak.logout();
  }
}
