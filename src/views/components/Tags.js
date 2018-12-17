import React, { Component } from 'react';
import Tag from './Tag';
import { pipe } from 'ramda';
import './Tags.css';

export default class Tags extends Component {
  trimTags(items) {
    const arrayOfTags = items.split(',');
    return arrayOfTags;
  }

  renderTag = arrayOfTags => arrayOfTags.map(tag => <Tag key={tag} item={tag} />);

  render() {
    const { trimTags, renderTag } = this;
    return (
      <div className="Tags">
        {pipe(
          trimTags,
          renderTag
        )(this.props.items)}
      </div>
    );
  }
}
