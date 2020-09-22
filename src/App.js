import React from 'react';
import Header from './Header'
import ItemContainer from './ItemContainer'
import NavBar from './NavBar'
import ItemDetail from './ItemDetail'
import './App.css';
import Locations from './Locations'
import Banner from './Banner'
import Cart from './Cart'

import { Route, Switch } from 'react-router-dom'




class App extends React.Component {

  state = {
    items: [],
    page: "items",
    searchTerm: '',
    cartArray: [], // looks like  [{ item: item, qty: }]
    cartTotal: 0

  }
 



  componentDidMount() {
    fetch('http://localhost:3000/items')
      .then(res => res.json())
      .then((itemsArr) => {
        this.setState({
          items: itemsArr
        })
      })
  }

  // addItemToCart = (currentItemObj) => {
  //   let addingObj = [currentItemObj, ...this.state.cartArray]
  //   this.setState({
  //     cartArray: addingObj,
  //   })
  // }


  addItemToCart = (id) => {
    // find the item for this id in this.state.items
    const itemMatch = this.state.items.filter((item) => {
      return item.id === id;
    });
    if (!itemMatch.length > 0) {
      return console.warn(`Item with id ${id} could not be found to add to cart.`);
    }
    const item = itemMatch[0];
    // we want to check if it already exists in the cartArray
    const match = this.state.cartArray.filter((cartItem) => {
      return cartItem.item.id === id;
    });
    if (match.length > 0) {
      // item already in cart! Increment qty.
      // this sucks:
      match[0].qty++;
      this.setState({ cartArray: [...this.state.cartArray] })
    } else {
      // item not in cart, add to cart.
      this.setState({ 
        cartArray: [...this.state.cartArray, { item, qty: 1 }]})
    }
  }


  // deleteItemFromCart = (id) => {
  //    // update this.cartArray to exclude the item with this id
  //    // filter the cartArray for an item that matches this id
  //    // don't do anything if there is no match
  //    // update state with a cart that excludes this item.
  // }

   calculateCartTotal = () => {
    this.setState({ cartTotal: this.state.cartArray.reduce((acc, item) => {
      return acc + item.item.price
    },0)
});
  // let result = null;
  //   this.state.cartArray.forEach((arrItem) => {
  //    result += arrItem.item.price
  //   })
  //  this.setState(prevState => ({
  //   cartTotal: prevState.cartTotal + result
  //  })
  //  )
}

   



  changeSearchTerm = (theSearchedInput) => {
    this.setState({
      searchTerm: theSearchedInput

    })
  }


  handlePageChange = page => {
    this.setState({ page })
  }

  getCurrentPage(){
    switch (this.state.page) {

      case "items":
        return <ItemContainer
          items={this.state.items}
          onPageChange={this.handlePageChange}
        />

      case "item-detail":
        return <ItemDetail />

      default:
        return <h1>404 not found</h1>
    }
  }

  removeItem = (itemObj) => {
    let updatedCart = this.state.cartArray.filter((item) => {
      return item !== itemObj 
    })
    this.setState({
      cartArray: updatedCart
    })

  }
  // I want to get rid of header when I navigate to other pages
  // if (this.state.page === "/items") {
  //      return }
  render() {

    let filteredItems = this.state.items.filter((itemObj) => {
      return itemObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    const cartActions = { addItemToCart: this.addItemToCart, deleteItemFromCart: this.deleteItemFromCart, calculateCartTotal: this.calculateCartTotal }

    return (
  <div className="App">
   

        <Banner/>
        <Header />
        <NavBar searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          cartArray={this.state.cartArray}
          cartActions={cartActions} />
        
        <main>
          <Switch>
            {/* ITEM CONTAINER */}
            <Route path="/items" exact>
              <ItemContainer style={{backgroundColor:"white"}}
                items={filteredItems}
                cartActions={cartActions}

                onPageChange={this.handlePageChange} />
            </Route>
            {/* ITEM DETAIL */}
            <Route path="/items/:id" render={routeProps => {
              return <ItemDetail match={routeProps.match} 
              cartActions={cartActions}/>
            }} />
            {/* LOCATIONS */}
            <Route path="/locations">
              <Locations />
            </Route>
            <Route path="/cart" >
              <Cart
               cartArray={this.state.cartArray}
               cartActions={this.props.cartActions}
               removeItem={this.removeItem}

              
              />
            </Route>
          </Switch>
        {/* <Footer /> */}
        </main>
        </div>
         
         
      
      
      
          
        
    );
  }
}

export default App;
