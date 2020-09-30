import React from 'react';
import AppContext from '../../context';
import styles from './Form.module.scss';
import Input from '../Input/Input.js';
import Button from '../Button/Button.js'
import Title from '../Title/Title.js';
import RadioButton from '../RadioButton/RadioButton';

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
};

class Form extends React.Component {
    state = {
        type: types.twitter,
        title: '',
        link: '',
        image: '',
        description: ''
    };

    handleRadioButtonChange = (type) => {
        this.setState({
            type: type
        })
    };

    handleInputChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
    };

    render() {
        const { type } = this.state;

        return (
            <AppContext.Consumer>
                {(context) => (
                    <div className={styles.wrapper}>
                        <Title>Add new favourite {type}</Title>
                        <form  autoComplete="off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)}>
                            <div className={styles.radio_wrapper}>
                                <RadioButton
                                    id={types.twitter}
                                    onChange={() => this.handleRadioButtonChange(types.twitter)}
                                    checked={type === types.twitter}
                                    name="Twitter"
                                />
                                <RadioButton
                                    id={types.article}
                                    onChange={() => this.handleRadioButtonChange(types.article)}
                                    checked={type === types.article}
                                    name="Article"
                                />
                                <RadioButton
                                    id={types.note}
                                    onChange={() => this.handleRadioButtonChange(types.note)}
                                    checked={type === types.note}
                                    name="Note"
                                />
                            </div>
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                maxLength={30}
                                label={type === types.twitter ? 'Twitter Name' : 'Title'}
                                name="title"
                            />
                            {type !== types.note &&
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.link}
                                label={type === types.twitter ? 'Twitter Link' : 'Link'}
                                name="link"
                            />}
                            {type === types.twitter &&
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.image}
                                label="Image"
                                name="image"
                            />}
                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                tag="textarea"
                                label="Description"
                                name="description"
                            />
                            <Button>add new item</Button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

//({submitFunc}) => ( //zeby nie pisac this.props.submitFunc to go destrukturyzujemy

export default Form;