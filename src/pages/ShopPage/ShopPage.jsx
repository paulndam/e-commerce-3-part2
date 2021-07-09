import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../components/CollectionsOverView/CollectionsOverView";
import CollectionPage from "../CollectionPage/CollectionPage.jsx";

const ShopPage = ({ match }) => {
  console.log("----- Match -----", match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
