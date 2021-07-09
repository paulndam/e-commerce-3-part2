import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/Shop/shopSelector";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import "../../Sass/collections-overview.styles.scss";

const CollectionsOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverView);
