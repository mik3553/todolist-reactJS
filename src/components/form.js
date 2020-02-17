import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    static propTypes = {
        submit: PropTypes.func.isRequired,
        taskInput: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired
    }

    render() {

		const { submit, taskInput, handleChange } = this.props
        return (
            <Fragment>
     		<form onSubmit = { submit } >
                <label>ajouter une tâche : </label>
                <input
                    type = 'text'
                    value = { taskInput } 
                    onChange = { handleChange }
                    name = 'taskInput'
                />
                <button type = 'submit'>Ajouter</button>
            </form>
                { {submit} ? null :<p className = 'alert'>erro</p> }
            </Fragment>
        );
    }
}

export default Form;