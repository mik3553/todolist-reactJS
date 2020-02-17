import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
    render() {

        const { showUnDone, showDone, showAll } = this.props;
        return (
     		<div className = 'filter'>
                <button
                    onClick = { showUnDone }
                    // style = {{ backgroundColor : showDone ? 'grey' : 'white' }}
                >
                    show done
                </button> 
                <button
                    onClick = { showAll }
                >
                    All
                </button>
                <button
                    onClick = { showDone }
                >
                    show undone
                </button>
            </div>
        );
    }
};

Filter.propTypes = {
    showUnDone: PropTypes.func.isRequired,
    showDone: PropTypes.func.isRequired,
    showAll: PropTypes.func.isRequired
};
export default Filter;