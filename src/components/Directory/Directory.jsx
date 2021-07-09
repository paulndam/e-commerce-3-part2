import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/Directory/directorySelector";
import "../../Sass/directory.styles.scss";
import MenuItem from "../Menu/MenuItem";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {/* spreading all props */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
