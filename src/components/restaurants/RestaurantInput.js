import React, { Component } from 'react';

class RestaurantInput extends Component {

  // constructor(props) {
  //   super(props);
      state = {
        text: ''
        // did the above to pass tests but the below is more symantic:
        // name: ''
      }
  // }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
      // did the above to pass tests but the below is more symantic:
      // name: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    // did the above to pass tests but the below is more symantic:
    // this.props.addRestaurant(this.state.name);
    this.setState({
      text: ''
      // did the above to pass tests but the below is more symantic:
      // name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Add Restaurant</label>
          <input
            type="text"
            value={this.state.text}
            // did the above to pass tests but the below is more symantic:
            // value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

// should really just connect this to Redux store vs. having props passed down to it!
export default RestaurantInput;
