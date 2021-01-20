import React from 'react'
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom'

const AppWrapper = styled.div``;
const Title = styled.h1`
  text-align: center;
`;

const App = () => {
	return (
    <AppWrapper>
      <Switch>
        <Route path="/" render={() => <Title>Hello, world!</Title>} />
      </Switch>
    </AppWrapper>
  )
}

export default withRouter(App);
