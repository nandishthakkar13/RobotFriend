import React,{Component} from 'react';
import CardList from './CardList';
/*import {robots} from './robots';*/
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super(); /*in order to use this keyword in the constructor you have to call super first */
       
        /*As our Application now has state that we might change based on our search box
        we change to class based syntax so that we can use constructor */
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

        /*As this react in-built function we dont use arrow notation */
        /*this function is executed in a sequence
        
        first constructor is executed
        then render is executed
        then componentDidMount is executed
        and as we are changing the state in this function 
        render is executed again to display the new state */

        /*here instead of using the robots.js file 
        we are using api to fetch the data*/
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
         .then(users => this.setState({robots:users}));
    }

    /*We use arrow function here because of the way we use this keyword here
    As the event happens in the input element in the SearchBox the this keyword is bind to it
    So using arrow function helps us to change where this points to
    while using arrow function this points to where it is used in other terms in which function and where it is declared */

    onSearchChange = (event) =>{
        /*this updates the state this is react's way to change the state */
        this.setState({searchfield: event.target.value})    
    }

    render(){
            /*filters robots from the array based on what you search in the search box */
            /*filter creates a new array based on what we search and passes to the cardlist */
            const filteredRobots = this.state.robots.filter(robot =>{
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })

            /*If the data coming from third party API is large and if it takes some time
            then we can display an appopriate message to the user while they wait */
            if(this.state.robots.length === 0){
                return <h1 className='f1 tc'>Loading...</h1>
            }
            else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/> 
                </Scroll> 
            </div>
        );
            }
    }
}

export default App;