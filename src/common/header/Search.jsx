import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"

// const logo = "https://images.creativemarket.com/0.1.0/ps/7728330/1820/1213/m1/fpnw/wm1/dlpnpiyeihhaitmapp9r2hxy9oabdbvr5lkqrfsiwk93vx1nwemez7dtx6fszxfo-.jpg?1581238186&s=7be2fdb8b6dc5dee883f3051543f9c57";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            Gift Shop
          </div>

          {/* <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div> */}

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/Cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
