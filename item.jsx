import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="item-container">
        <div className="item-text">
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Item;