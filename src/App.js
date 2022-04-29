import {Component, Fragment} from "react";

import TopMenu from "./components/topMenu/TopMenu";
import ShopFilter from "./components/shop-filter/shop-filter";

import Dress from '../src/images/dress.svg'
import Beauty from '../src/images/beauty.svg'
import Denim from '../src/images/denim.svg'
import Swimwear from '../src/images/swimwear.svg'
import Tees from '../src/images/tees.svg'
import Tops from '../src/images/tops.svg'
import Like from '../src/images/Like.svg'

import Insta1 from '../src/images/insta1.svg'
import Insta2 from '../src/images/insta2.jpg'
import Insta3 from '../src/images/insta3.jpg'
import Insta4 from '../src/images/insta4.jpg'

import './App.css';
import SaleListItem from "./components/sale-list-item/sale-list-item";
import ShopInstagram from "./components/shop-instagram/shop-instagram";
import Footer from "./components/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategory: [
        {name: 'Dresses', id: 1, imgUrl: Dress},
        {name: 'Tees', id: 2, imgUrl: Tees},
        {name: 'Swimwear', id: 3, imgUrl: Swimwear},
        {name: 'Denim', id: 4, imgUrl: Denim},
        {name: 'Tops', id: 5, imgUrl: Tops},
        {name: 'Beauty', id: 6, imgUrl: Beauty},
      ],
      dataSale: [
        {price: '$13.00', imgUrl: Insta1, like: Like, discount: '-55%', discountPrice: '$5.90', id: '1'},
        {price: '$8.00', imgUrl: Insta2, like: Like, discount: '-39%', discountPrice: '$4.90', id: '2'},
        {price: '$14.00', imgUrl: Insta3, like: Like, discount: '-58%', discountPrice: '$5.90', id: '3'},
        {price: '$9.00', imgUrl: Insta4, like: Like, discount: '-34%', discountPrice: '$5.90', id: '4'},
      ],
    }
  }
  render() {
    const {dataCategory, dataSale} = this.state;
    return (
        <>
          <TopMenu/>
          <ShopFilter dataCategory={dataCategory}/>
          <SaleListItem dataSale={dataSale}/>
          <ShopInstagram/>
          <Footer/>
        </>
    );
  }
}

export default App;
