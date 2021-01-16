import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class App extends Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<h1>よろしくお願いします。</h1>
// 			</React.Fragment>
// 		)

// 	}
// }

// function App() {
//     return (
// 	    <div>
// 	    <h1>Hello World</h1>
// 	    </div>
//   );
// }

const App = () => {
	const profiles = [
			{name:"Taro",age : 10},
			{name:"Hanako",age : 100},
			{name:"ぎがんとフォッフォ"}
	];
	return (
	<div>
		{
			profiles.map((profile,index)=> {
				return <User name={profile.name} age={profile.age} key ={index}/>
			})
		}
	</div>
	)
}

const User = (props) => {
	return (
		<React.Fragment>
			Hi, I'm {props.name}! Next year I will be {props.age + 1}...!
		</React.Fragment>
	)
}

User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}
export default App;
