import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left} from 'native-base';

import Users from './Users';
import Reminder from './Reminder';
import ContactsList from './Contacts';
import Photos from './Photos';

class TabsMenu extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Icon name="md-aperture" style={{fontSize: 22, color: 'white'}}> React Boom</Icon>
          </Left>
        </Header>
        <Tabs>
          <Tab heading={<TabHeading><Icon name="contacts" /></TabHeading>}>
            <ContactsList/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="people" /></TabHeading>}>
            <Users/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="alarm" /></TabHeading>}>
            <Reminder/>
          </Tab>
          <Tab heading={<TabHeading><Icon name="md-photos" /></TabHeading>}>
            <Photos />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsMenu;
