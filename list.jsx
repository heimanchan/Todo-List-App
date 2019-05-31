import React from 'react';
import Item from './item';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ["abc", "cde"]
    }
  }

  render() {
    const items = this.state.items.map((cardText, i=0) => <Item key={i++} text={cardText}/>)
    return(
      <div className="list-container">
        <div className="list-name">
          {this.props.name}
        </div>
        <div className="items-container">
          {items}
        </div>
      </div>
    )
  }
} 

export default List;