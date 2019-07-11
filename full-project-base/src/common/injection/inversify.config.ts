import { Container } from 'inversify';
import { IKeycloak } from '../../authentication/keycloak/IKeycloak';
import { KeycloakWrapper } from '../../authentication/keycloak/KeycloakWrapper';
import { AuthenticationService, IAuthenticationService } from '../../authentication/services/AuthenticationService';

const container = new Container();
container.bind<IKeycloak>(KeycloakWrapper).to(KeycloakWrapper).inSingletonScope();
container.bind<IAuthenticationService>(AuthenticationService).toSelf().inSingletonScope();

export {
  container
};
