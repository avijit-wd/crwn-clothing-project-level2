import React from "react";
import "./Collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collectionItem/CollectionItem";
const Collection = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state)
});

export default connect(mapStateToProps)(Collection);
