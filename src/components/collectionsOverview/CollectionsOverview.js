import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import "./CollectionsOverview.styles.scss";
import CollectionPreview from "../collectionPreview/CollectionPreview";
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCOllectionProps }) => (
        <CollectionPreview key={id} {...otherCOllectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
