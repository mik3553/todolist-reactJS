import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {

	static propTypes = {
		button: PropTypes.func.isRequired,
	    isDone: PropTypes.bool.isRequired,
	    // task: PropTypes.array.isRequired,
	    removeTask: PropTypes.func.isRequired
	}

    render() {

		const { button, isDone, content, removeTask} = this.props;

    	let buttonSwitch = null;
    	if (isDone) {
    		buttonSwitch = "reset done";
    	}
    	else {
    		buttonSwitch = "mark as done";
    	}
    	
        return (
        	<div className = 'list' >
	           	<li 
	           		data-done = {isDone} 
	           		style = {
	           					{
	           						backgroundColor     : isDone === true ? 'grey' : 'orange' ,
	           						textDecorationLine  : isDone === true ? 'line-through' : 'none'
	           					}
	           				} 
	           	>
					{content }
	           	</li>
	           	<div className = 'buttonList'>
		           	<button  
		           		type = 'button'
		           		onClick = { button }  
		           	>
		           		{ buttonSwitch }
		           	</button>
		           	<button  
		           		type = 'button'
		           		onClick = { removeTask }  
		           	>
		           		remove
		           	</button>
	           	</div>
	        </div>
        );
    }
}

export default List;




