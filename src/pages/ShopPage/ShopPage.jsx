import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionsStartAsync } from "../../Redux/Shop/shopActions";
import { selectIsCollectionLoading } from "../../Redux/Shop/shopSelector";

import CollectionOverViewContainer from "../../components/CollectionsOverView/CollectionOverViewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer.jsx";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    console.log("----- Match -----", match);
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
