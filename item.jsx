import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card-text">
        {this.props.text}
      </div>
    )
  }
}

export default Item;