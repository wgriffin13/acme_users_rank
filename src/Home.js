import React from 'react';
import { connect } from 'react-redux';

const Home = ({ userCount }) => {
    return (
        <div>
            We have {userCount} Users!
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userCount: state.userCount
    }
}

export default connect(mapStateToProps)(Home);
