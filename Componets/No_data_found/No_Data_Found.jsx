import React from "react";
import Link from "next/link";
import Image from "next/image";
import no_data_found from "../../assets/images/no-data-found.png";

const No_Data_Found = ({ type }) => {
  return (
    <div className="text-center w-100">
      <Image
        className="no_data_img"
        src={no_data_found}
        alt=""
      />
      {type === "cart" && (
        <ul className="pay-btns no_data_btn">
          <li>
            <Link href="/search-product">
              <a className="shop-btn">
              Continue Shopping
              </a>
            </Link>
          </li>
        </ul>
      )}
      {type === "gift-cart" && (
        <ul className="pay-btns no_data_btn">
          <li>
            <Link href="/purchase-gift-card">
              <a className="shop-btn">
              Continue Buy Gift Card
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default No_Data_Found;
