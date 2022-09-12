import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "https://imgcdn.floweraura.com/a-cup-of-love-9977377gf-A.jpg",
      cateName: "Chocolates",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Cards",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Gaming Cars",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Guitars",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Teddy",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Watches",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
