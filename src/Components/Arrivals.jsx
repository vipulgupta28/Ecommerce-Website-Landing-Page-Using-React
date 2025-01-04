import React, { useState } from "react";

const Arrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const products = [
    { id: 1, name: "Stylish Shirt", price: "$29.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men", size: "M" },
    { id: 2, name: "Casual Jeans", price: "$49.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "men", size: "L" },
    { id: 3, name: "Trendy Jacket", price: "$89.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "women", size: "S" },
    { id: 4, name: "Summer Dress", price: "$39.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "kids", size: "M" },
    { id: 5, name: "Sport Shoes", price: "$59.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "accessories", size: "L" },
    { id: 6, name: "Classic Watch", price: "$199.99", imgSrc: "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "luxury", size: "XL" },
  ];

  const categories = ["MEN", "WOMEN", "KIDS", "ACCESSORIES", "LUXURY", "LIFESTYLE"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const countByCategory = (category) => {
    return products.filter((product) => product.category.toLowerCase() === category.toLowerCase()).length;
  };

  const countBySize = (size) => {
    return products.filter((product) => product.size === size).length;
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="arrivalsContainer">
      <div className="leftSection">
        <h1>New Arrivals</h1>
        <h2 className="categoriesHeading">Categories</h2>
<ul className="categories">
  {categories.map((category) => (
    <li key={category} className="categoryItem">
      <span>{category}</span>
      <span className="count">{countByCategory(category)}</span>
    </li>
  ))}
</ul>

<h2 className="SizeHeading">Size</h2>
<ul className="categories">
  {sizes.map((size) => (
    <li key={size} className="categoryItem">
      <span>{size}</span>
      <span className="count">{countBySize(size)}</span>
    </li>
  ))}
</ul>
      </div>

      <div className="rightSection">
        <div className="searchContainer">
          <div className="searchInputWrapper">
            <input
              type="search"
              placeholder="Search Products"
              className="searchBar"
            />
            <select
              className="categoryDropdown"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Category</option>
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="productGrid">
          {filteredProducts.map((product) => (
            <div className="productCard" key={product.id}>
              <img
                src={product.imgSrc}
                alt={product.name}
                className="productImage"
              />
              <h3 className="productName">{product.name}</h3>
              <p className="productPrice">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
