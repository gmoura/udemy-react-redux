import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }

  render(){
    return(
      <div>
          <div className="text-xs-right">
            <Link to="posts/new" className="btn btn-primary">
              Add a post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-grop">
            {this.renderPosts()}
          </ul>
      </div>
    )
  }
};

function mapStateToProps({ posts }) {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);