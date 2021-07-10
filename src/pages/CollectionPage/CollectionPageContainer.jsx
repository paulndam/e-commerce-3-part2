import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoading } from "../../Redux/Shop/shopSelector";
import Spinner from "../../components/Spinner/Spinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoading(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;
