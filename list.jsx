import React from 'react';
import Item from './item';
import { reactLocalStorage } from 'reactjs-localstorage';

class List extends React.Component {
  constructor(props) {
    super(props);
    
    this.itemsArray = Array.from(reactLocalStorage.getObject(this.props.name))
    this.state = {
      items: [...this.itemsArray]
    }
  }

  getStorageItems() {
    return Array.from(reactLocalStorage.getObject(this.props.name));
  }

  addNewItem(e) {
    const itemText = window.prompt("What is your new item?")
    reactLocalStorage.setObject(this.props.name, [...this.getStorageItems(), itemText])
    this.setState({ items: [...this.state.items, itemText] })
  }

  render() {
    const items = this.state.items.map((cardText, i=0) => <Item key={i++} text={cardText}/>)
    // const items = reactLocalStorage.getObject(this.props.name).map((cardText, i=0) => <Item key={i++} text={cardText}/>)
    // console.log(reactLocalStorage.getObject("Alice"))
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