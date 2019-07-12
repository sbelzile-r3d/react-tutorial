import { Container } from 'inversify';
import { IKeycloak } from '../../authentication/keycloak/IKeycloak';
import { KeycloakWrapper } from '../../authentication/keycloak/KeycloakWrapper';
import { AuthenticationService, IAuthenticationService } from '../../authentication/services/AuthenticationService';

export const initContainer = (): Promise<Container> => {
  return new Promise<Container>((resolve, reject) => {
    const container = new Container();
    const keycloak = new KeycloakWrapper();
    keycloak.init()
        .then(isUserAuthenticated => {
          if (isUserAuthenticated) {
            return keycloak.loadUserProfile();
          }
          return null;
        })
        .then(() => {
          container.bind<IKeycloak>(KeycloakWrapper).toConstantValue(keycloak);
          container.bind<IAuthenticationService>(AuthenticationService).toSelf().inSingletonScope();
          resolve(container);
        })
        .catch(error => reject(error));
  });
};
