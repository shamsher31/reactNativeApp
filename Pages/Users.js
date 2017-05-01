import React, {Component} from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
  Spinner,
  Left,
  Right
} from 'native-base';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      showLoading: true
    }
  }

  componentDidMount() {
    this.getUserList();
  }

  render() {
    if (!this.state.userList) {
      return this.renderLoadingView();
    }
    const userPreview = this.prepareUserPreview(this.state.userList);

    return (
      <Container>
        <Content>
          {userPreview}
        </Content>
      </Container>
    );
  }

  getUserList() {
    return fetch('https://randomuser.me/api/?results=20').then((response) => response.json()).then((responseJson) => {
      this.setState({showLoading: false, userList: responseJson.results});
    }).catch((error) => {
      console.error(error);
    });
  }

  prepareUserPreview(userList) {
    return userList.map((user) => this.renderUserPreview(user));
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

  renderUserPreview(user) {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={{
            uri: user.picture.thumbnail
          }}/>
        </Left>
        <Body>
          <Text>{user.name.first} {user.name.last}</Text>
          <Text note>{user.login.username}</Text>
        </Body>
        <Right>
          <Text>{user.location.city}</Text>
          <Text note>{user.location.postcode}</Text>
        </Right>
      </ListItem>
    )
  }
}

export default Users;
