import React , { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import Form   from './form';
import List   from './list';
import Filter from './filter';
import '../App.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	taskInput  : "",
        	tasks      : [],
            error      : null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isDone       = this.isDone.bind(this);
        this.showUnDone   = this.showUnDone.bind(this);
        this.showDone     = this.showDone.bind(this);
        this.removeTask   = this.removeTask.bind(this);
        this.showAll      = this.showAll.bind(this);
    };
   
    // componentDidMount () {
    //     let tasks = [ ...this.state.tasks ];
    //     tasks = JSON.parse(localStorage.getItem('tasks'));
    //     this.setState({ tasks });
    // }

    //     componentDidUpdate = () => {
    //          let tasks = [ ...this.state.tasks ];
    //          localStorage.setItem('tasks' , JSON.stringify(tasks)); 
    //     }
    
    
    handleChange = (event) => {
        let taskInput = event.target.name;
    	this.setState({ [taskInput] : event.target.value });
    }
    handleSubmit = (event) => {
    	event.preventDefault();
    	let taskInput = [ ...this.state.taskInput ];
        if (taskInput.length > 0) {
        	let tasks = [ ...this.state.tasks,
                            { 
                                id       : `tache numéro:${Date.now()}`,
                                content  : taskInput,
                                isDone   : false,
                                isRemove : false
                            }
                        ];
        localStorage.setItem('tasks' , JSON.stringify(tasks));
        this.setState({ tasks, taskInput : "", error : false });

        } else {
            this.setState({error : true});
        }
    }
    isDone = (id) => {
        let tasks = [ ...this.state.tasks ];
        tasks.map( item => {
            if (id === item.id) {
                item.isDone = !item.isDone;
            }
            return null
        })
        // localStorage.setItem('tasks' , JSON.stringify(tasks));
        this.setState({ tasks });
        // tasks[id].isDone = !tasks[id].isDone;
        // localStorage.setItem('tasks' , JSON.stringify(tasks));
    }
    removeTask = (id) => {
        let tasks = [ ...this.state.tasks ];
        tasks.map( item => {
            if (id === item.id) {
               item.isRemove = true;
            }
            return null
        })
        this.setState({tasks});
        // localStorage.setItem('tasks' , JSON.stringify(tasks));
    }
    showUnDone = () => {
        // this.componentDidMount();
        const tasks = [...this.state.tasks.filter(item => item.isDone === true)];
        // tasks.className = 'none';
        // let li = document.querySelectorAll(".list li[data-done=false]");
        // li.className = 'none';

        this.setState({ tasks });
    }
    showDone = () => {
        // this.componentDidMount();
        // e.preventDefault()
        // this.state.tasks.filter( item => item.isDone === false )
        this.setState({ tasks : this.state.tasks.filter( item => item.isDone === false) })
        // if ( item.isDone === false ) {
        //     item.isDone = true;
        // }
                                                // if(item.isDone === false){
                                                //    item.style.backg = 'blue';
                                                // }
                                           
        // this.setState({tasks})
    }
    showAll = () => {
        // let tasks = [ ...this.state.tasks ];
        // tasks = JSON.parse(localStorage.getItem('tasks'));
        // this.setState({ tasks });
    }

    render() {
    	const list = this.state.tasks
	    	.map((item, index) => {
                if (!item.isRemove) {
        	    	return 	<List
                			    key        = {item.id}
                                content    = {item.content}
                			    isDone     = {item.isDone}
                			    button     = { () => this.isDone(item.id) }
                                removeTask = { () => this.removeTask(item.id) }
            	    	    />   
                }
                return null
	    	})
    	
        return (
        	<Fragment>
	            <Header />
	            <section>
                    <Form
                        taskInput    = { this.state.taskInput }
                        submit       = { this.handleSubmit }
                        handleChange = { this.handleChange }
                    />
                    { this.state.error ? <p className = 'alert'>Veuillez insérer une tâche</p> :  null}
                    <ul>
	                    {list}
                    </ul>
                    <Filter
                        showDone   = {this.showDone}
                        showAll    = {this.showAll}
                        showUnDone = {this.showUnDone}
                    />
	            </section>
	            <Footer />
            </Fragment>
        );
    }
}

export default Home;

