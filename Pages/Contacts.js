import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Spinner
} from 'native-base';

const NativeContacts = require('react-native-contacts');

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
      showLoading: true
    }
  }

  componentDidMount() {
    this.getContactList();
  }

  render() {
    if (this.state.showLoading) {
      return this.renderLoadingView();
    }
    const contactPreview = this.renderContactPreview(this.state.contactList);

    return (
      <Container>
        <Content>
          {contactPreview}
        </Content>
      </Container>
    );
  }

  getContactList() {
    return NativeContacts.getAll((err, contacts) => {
      this.setState({showLoading: false, contactList: contacts});
    });
  }

  renderContactPreview(contactList) {
    return (
      <List
        dataArray={contactList}
        renderRow={(contact) => <ListItem>
        <Text>{contact.familyName}
        </Text>
        <Text>{contact.givenName}</Text>
      </ListItem>}></List>
    )
  }

  renderLoadingView() {
    return (
      <Container>
        <Content>
          <Spinner color='blue'/>
        </Content>
      </Container>
    );
  }
}

export default ContactsList;
