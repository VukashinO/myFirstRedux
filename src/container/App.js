import React ,{Component}from 'react';
import {connect} from 'react-redux';
import './App.css';
import { setName } from '../actions/userActions';
import { Main } from '../components/Main';
import User from '../components/User';
class App extends Component {
    render(){
        return (
            <div>
                <Main changeUsername={this.props.setName}/>
                <User username={this.props.user.name}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);