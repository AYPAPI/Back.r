import React, { Component } from 'react';
import {
    Button,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
} from 'react-native';

import { lightGrey,
    backerBlue,
    makerPurple,
    checkGreen,
    noRed,
    moneyGreen,
    materialsOrange,
    knowledgePurple,
    manpowerRed,
    backGroundWhite } from '../assets/styles/colors.js';

import { headerIconSize } from '../assets/styles/size.js';
import Stripe from 'react-native-stripe-api';

const apiKey = 'sk_test_ldou0R0UDoDa3XPP6evc7ZIH';
const client = new Stripe(apiKey);
const customer = {
  "id": 0
}

class PaymentScreen extends Component {
  get_token() {
    // Create a Stripe token with new card infos
    client.createToken({
           number: '4242424242424242' ,
           exp_month: '09',
           exp_year: '18',
           cvc: '111',
           address_zip: '12345'
        }).then((token) => {
          console.log("TOKEN IS", token)
          this.get_customer(token)
        }).catch((e) => {
          console.log("TOKEN ERROR", e)
        });

    // Create a new customer and link your new card
    // const customer = async() => { await this.client.createCustomer(token.id, 'customer@email.com', '<Your user ID>', 'John', 'Doe')}
    // console.log("CUSTOMER IS", customer)

    // Create charge, 1 USD
    // const charge = async() => {await client.createCharge(1 * 100, customer.id, 'Payment example','USD')};
    // console.log("CHARGE IS", charge)
  }
  get_customer(token) {
    Stripe.customers.create(token.id, 'customer@email.com', '<Your user ID>', 'John', 'Doe').then((customer) => {
      console.log(customer)
    }).catch((e) => {
      console.log("TOKEN ERROR", e)
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
          backgroundColor="transparent"
          color="black"
          title="Forgot Password?"
          fontSize={12}
          activeOpacity={0.5}
          onPress={this.get_token()}
         />
    )

  }
}
export default PaymentScreen;
