import React, {Component} from 'react';
import {Container, Header, Tab, Tabs} from 'native-base';

import Users from './Users';
import Reminder from './Reminder';

class TabsMenu extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading="Reminder">
            <Reminder/>
          </Tab>
          <Tab heading="User">
            <Users/>
          </Tab>
          <Tab heading="Contacts">
            {/*<Reminder/>*/}
          </Tab>
          <Tab heading="Photo">
            {/*<Reminder/>*/}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsMenu;
