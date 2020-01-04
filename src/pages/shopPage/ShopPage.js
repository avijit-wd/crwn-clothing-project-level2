import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionID`}
        component={Collection}
      />
    </div>
  );
};

export default ShopPage;
