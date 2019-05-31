import React from 'react';
import List from './list';

const Root = () => (
  <div className="root-container">
    <h1>Todo List</h1>
    <div className="lists">
      <List name={"Alice"}/>
      <List name={"Bob"}/>
      <List name={"Charles"}/>
      <List name={"Dave"}/>
    </div>
  </div>
)


export default Root;