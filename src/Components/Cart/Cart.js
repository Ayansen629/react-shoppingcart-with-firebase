import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns'; 
import EmptyCart from './EmptyCart'; 
import CartList from './CartList'; 
import CartTotals from './CartTotals'; 
import {ProductConsumer} from '../../context';

 class Cart extends Component {
    render() {
        return (
           <section>
           <ProductConsumer>
               {value=>{
                   const {cart}=value;
                   if(cart.length>0)
                   {
                       return (
                           <>
               <Title  name="your" title="cart" />
               <CartColumns/>
               <CartList value={value}/>
               <CartTotals value={value} history={this.props.history}/>
               </>
                       )
                   }
                   else{

                    return <EmptyCart/>;
                   }
                   
               }}
           </ProductConsumer>
           </section>
        )
    }
}

export default Cart
