import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './MainPage.css';


class MainPage extends Component {
	
	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
	}


	render() {
		const { onSearchChange, isPending } = this.props;

		if (isPending) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange} />
					{/*<Scroll>*/}
						<CardList robots={this.filterRobots()} />
					{/*</Scroll>*/}
				</div>
			);
		}
	}
}

export default MainPage;
