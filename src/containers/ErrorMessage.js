import React from "react";
import { connect } from "react-redux";

const ErrorMessage = ({ error }) => {
    if (!error) {
        return null;
    }
    return <div className="alert alert-danger">{error}</div>;
};

function mapStateToProps({ error }){
    return { error };
}

export default connect(mapStateToProps)(ErrorMessage);
