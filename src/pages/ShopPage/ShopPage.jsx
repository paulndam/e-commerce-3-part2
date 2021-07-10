import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/fireBaseUtils";
import { updateCollections } from "../../Redux/Shop/shopActions";
import Spinner from "../../components/Spinner/Spinner";

import CollectionsOverView from "../../components/CollectionsOverView/CollectionsOverView";
import CollectionPage from "../CollectionPage/CollectionPage.jsx";

const CollectionOverViewWithSpinner = Spinner(CollectionsOverView);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // when the collection ref updates, it will send us the snapshot represention the collection when it renders.
    collectionRef.get().then((snapshot) => {
      console.log("snapshot =========", snapshot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log("---Collections map", collectionsMap);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    console.log("----- Match -----", match);
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
