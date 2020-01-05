import React from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from "./Collection.styles";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collectionItem/CollectionItem";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
