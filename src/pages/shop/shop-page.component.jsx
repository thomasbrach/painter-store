import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "../../shop-data";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
