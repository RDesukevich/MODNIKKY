import {Component, Fragment} from "react";

import TopMenu from "./components/topMenu/TopMenu";
import ShopFilter from "./components/shop-filter/shop-filter";

import Dress from '../src/images/dress.svg'
import Beauty from '../src/images/beauty.svg'
import Denim from '../src/images/denim.svg'
import Swimwear from '../src/images/swimwear.svg'
import Tees from '../src/images/tees.svg'
import Tops from '../src/images/tops.svg'
import './App.css';

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
      ]
    }
  }
  render() {
    return (
        <>
          <TopMenu/>
          <ShopFilter dataCategory={this.state.dataCategory}/>
        </>
    );
  }
}

export default App;
