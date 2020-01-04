import React from "react";
import "./Directory.styles.scss";
import MenuItem from "../menuItem/MenuItem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { connect } from "react-redux";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
