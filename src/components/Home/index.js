import React, { useEffect, useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CardItem from "../CardItem";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";
const Home = () => {
  const [productList, setProductList] = useState([]);
  const [hide, setHidden] = useState(false);
  const [hides, setHiddens] = useState(false);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchData = () => {
      const api =
        filter.length === 0
          ? "https://fakestoreapi.com/products/"
          : `https://fakestoreapi.com/products/products/category/${filter}`;
      const response = fetch(api)
        .then((response) => response.json())
        .then((json) => setProductList(json));
    };
    fetchData();
  }, []);
  const hidden = () => {
    setHidden(!hide);
  };
  const hiddens = () => {
    setHiddens(!hides);
  };
  // console.log(productList);
  const filterProducts = (productName = "") => {
    setFilter(productName);
    const filteredProducts = productList.filter((product) => {
      return product.category === productName;
    });
    setProductList(filteredProducts);
    setFilter("");
  };
  return (
    <>
      <Header />
      <div>
        <ul className="routerMobile">
          <li>HOME</li>
          <li>SHOP</li>
        </ul>
        <ul className="routerDesktop">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
        <div className="discoverContainer">
          <h1 className="discoverHeading">DISCOVER OUR PRODUCTS</h1>
          <p className="discoverPara">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <div className="filterRecommMobile">
          <button onClick={hidden}>FILTER</button>
          <p className="selectContainer">FILTER</p>
          <select className="selectContainer">
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>
        <div className="filterRecommDesktop">
          <div style={{ display: "flex" }}>
            <p>{productList.length} ITEMS</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              {hide ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
              <p onClick={hidden}>{hide ? "HIDE FILTER" : "FILTER"}</p>
            </div>
          </div>
          <select className="selectContainer">
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>
        <div className="filtercardContainer">
          {hide ? (
            <div className="filter">
              <div>
                <input type="checkbox" />
                <label>CUSTOMIZBLE</label>
              </div>
              <div id="idealFor" className="filterBtnContainer">
                <button className="filterBtn" onClick={hiddens}>
                  IDEAL FOR
                </button>
                {hides ? (
                  <MdKeyboardArrowUp onClick={hiddens} />
                ) : (
                  <MdKeyboardArrowDown onClick={hiddens} />
                )}
              </div>
              {hides ? (
                <>
                  <p onClick={() => filterProducts("")}>Unselect All</p>
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <input
                        onClick={() => filterProducts("men's clothing")}
                        id="men"
                        type="checkbox"
                      />
                      <label htmlFor="men">Men</label>
                    </li>
                    <li>
                      <input
                        onClick={() => filterProducts("women's clothing")}
                        id="women"
                        type="checkbox"
                      />
                      <label htmlFor="women">Women</label>
                    </li>
                    <li>
                      <input
                        onClick={() => filterProducts("electronics")}
                        id="baby"
                        type="checkbox"
                      />
                      <label htmlFor="baby">electronics</label>
                    </li>
                  </ul>
                </>
              ) : (
                <></>
              )}
              <div className="filterContainer">
                <div className="filterBtnContainer">
                  <button className="filterBtn">OCCASION</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">WORK</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">FABRIC</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">SEGMENT</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">SUITABLE FOR</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">RAW MATTERIALS</button>
                  <MdKeyboardArrowDown />
                </div>
                <div className="filterBtnContainer">
                  <button className="filterBtn">pattern</button>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          <ul className="cardContainer">
            {productList.map((each) => {
              return <CardItem key={each.id} products={each} />;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
