import React from "react"
import Home from "../MainPage/Home"
import FlashDeals from "../flashDeals/FlashDeals"
import TopCate from "../top/TopCate"
import NewArrivals from "../newarrivals/NewArrivals"
import Discount from "../discount/Discount"
import Shop from "../shops/Shop"
import Annocument from "../annocument/Annocument"
import Wrapper from "../wrapper/Wrapper"
import Sam from "../sameer/sam"

const Pages = ({ productItems, addToCart, CartItem, shopItems , shopItem }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      {/* <Sam shopItem = {shopItem} addToCart = {addToCart} /> */}
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
