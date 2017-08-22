import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Select from '../components/ProdDetail/Select';
import { incrementHours, decrementHours } from '../actions/selectActions';
import { addToCart } from '../actions/cartActions';


class SelectContainer extends Component {
  increment = e => {
    this.props.dispatch(incrementHours());
    e.preventDefault();
    return incrementHours();
  };

  decrement = e => {
    this.props.dispatch(decrementHours());
    e.preventDefault();
    return decrementHours();
  };

  AddToCart = (product, hours) => {
    return (e) => {
      e.preventDefault();
      this.props.dispatch(addToCart(product, this.props.hours));
      addToCart(product, this.props.hours);
    }
  }

  render() {

    return (
      <div>
        <Select {...this.props}
          increment={this.increment}
          decrement={this.decrement}
          AddToCart={this.AddToCart}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    product: ownProps.product,
    hours: state.counter.hours
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        incrementHours: function() {
            dispatch(incrementHours());
        },
        decrementHours: function() {
          dispatch(decrementHours());
        },
        addToCart: function(product, hours) {
          dispatch(addToCart(product, this.props.hours));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
