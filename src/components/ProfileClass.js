import React from "react";

class ProfileClass extends React.Component{

    constructor(props) {
        // react.component ..... has this keyword
        // this.props = {}
       super(props);

       this.state = {
        count : 0,
        count1 : 1
       }

       console.log("constructor");


    }

    componentDidMount() {
        console.log("component mounted");

        this.timer = setInterval(() => {
            console.log("interval created");
        },1000)
    }

    componentDidUpdate() {
        console.log("componeny updated");
    }

    componentWillUnmount() {
        console.log("class componnet unmounted");
        clearInterval(this.timer);
    }


    render() {

        console.log("render function");
       const { name, color} = this.props;
       const { count, count1} = this.state;
            return(
            <>
                <h1>Profile Class Component</h1>
                <h2>name: {name}</h2>
                <h2>color: {color}</h2>
                <h2>Count: {count}</h2>
                <h2>Count1: {count1}</h2>
                <button onClick={() => this.setState({count: 1, count1: 2})}>Update Count</button>
            </>
        )
    }
}

export default ProfileClass;