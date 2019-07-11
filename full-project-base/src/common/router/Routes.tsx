import React, { Suspense, lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Loading } from '../components/loading/Loading';
import { PrivateRoute } from './private-route/PrivateRoute';

const InterventionList = (
  lazy(() => (
    import('../../interventions/components/InterventionList/InterventionList')
  ))
);

const NewIntervention = (
  lazy(() => (
    import('../../intervention/components/NewIntervention/NewIntervention')
  ))
);

export class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute path='/interventions' component={InterventionList} />
          <PrivateRoute path='/intervention/new' component={NewIntervention} />
          <Redirect exact from='/' to='/interventions' />
        </Switch>
      </Suspense>
    );
  }
}
