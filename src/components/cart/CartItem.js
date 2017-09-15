import React, {Component} from 'react';

class CartItem extends Component {
  render() {

    const cart = this.props.cart;
    let cartTotals = 0;
    console.log(cart);
    let cartProducts = cart.map(product => {
    let itemTotal = product.subtotal;
    let cartItemKey = product.title + "_" + Math.floor(Math.random()*10000);
      return (
        <div key={cartItemKey}>
          <div className="cartCardStyle">
            <div className="cartImageStyle">
              <img className="thumbnailImage" src={product.product.imgSrc} alt={"portrait of " + product.product.title}/>
            </div>
            <div className="cartItemInfo">
              <header>
                <h2>{product.product.title}</h2>
              </header>
              <div>
                Service: {product.service}
              </div>
              <div className="cartCardHours">
                Hours: {product.hours}
              </div>
              <div className="cartCardTotal">
                Item Total: {itemTotal}
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="cartItems">
          {cartProducts}
        </div>
      </div>
    );
  }
}

export default CartItem;
