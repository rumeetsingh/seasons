import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = { lat:null,errorMessage:'' };

    componentDidMount() {
        console.log(process.env.REACT_APP_NOT_SECRET_CODE)
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({ lat:position.coords.latitude })},
            (error)=>{this.setState({ errorMessage:error.message })}
        );
    }

    render() {

        if(this.state.lat && !this.state.errorMessage){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Please accept location request" />;

    }
}


ReactDOM.render(<App />,document.querySelector('#root'));
