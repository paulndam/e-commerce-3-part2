import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionsOverView from "../../components/CollectionsOverView/CollectionsOverView";
import CollectionPage from "../CollectionPage/CollectionPage.jsx";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/fireBaseUtils";
import { updateCollections } from "../../Redux/Shop/shopActions";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // when the collection ref updates, it will send us the snapshot represention the collection when it renders.
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        console.log("snapshot =========", snapshot);
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log("---Collections map", collectionsMap);
        updateCollections(collectionsMap);
      }
    );
  }

  render() {
    const { match } = this.props;
    console.log("----- Match -----", match);
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverView} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
