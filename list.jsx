import React from 'react';
import Item from './item';

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ["abc", "cde"]
    }
  }

  addNewItem(e) {
    let target = e.target;
    console.log(target.innerText)
  }

  render() {
    const items = this.state.items.map((cardText, i=0) => <Item key={i++} text={cardText}/>)
    return(
      <div className="list-container">
        <div className="list-name-container">
          <div className="list-name">
            {this.props.name}
          </div>
        </div>
        <div className="items-container">
          {items}
        </div>

        <button className="new-item-button" onClick={e => this.addNewItem(e)}>
          + Add New Item
        </button>
      </div>
    )
  }
} 

export default List;