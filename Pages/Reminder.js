import React, {Component} from 'react';
import {
    Button,
    Text,
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    ListItem,
    CheckBox
} from 'native-base';

class Reminder extends Component {
    render() {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        const remianderDays = this.renderDays(days);
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Reminder</Label>
                            <Input/>
                        </Item>
                        {remianderDays}
                        <Button block>
                            <Text>Save</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    renderDays(days) {
        return days.map((day, index) => this.previewDays(day, index));
    }

    previewDays(day, index) {
        return (
            <ListItem key={index}>
                <CheckBox checked={false}/>
                <Text> {day}</Text>
            </ListItem>
        )
    }
}

export default Reminder;
