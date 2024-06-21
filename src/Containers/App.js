import React from 'react';
import CardList from '../Components/CardList.js';
import Scroll from '../Components/Scroll.js';
import SearchBox from '../Components/SearchBox.js';
import './App.css';

// state is an object , state lives inside parent (here
// App is a parent of searchBox and CardList)
// state is dynamic
// CardList also access robot array from App
// To use state, we have to go to original way of creating components --> React.Component
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // User made function onSearchChange so use arrow function
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
}

export default App;