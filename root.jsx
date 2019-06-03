import React from 'react';
import List from './list';
import { reactLocalStorage } from 'reactjs-localstorage';

const list1 = <List name={"Alice"} />;
const list2 = <List name={"Bob"} />;
const list3 = <List name={"Charles"} />;
const list4 = <List name={"Dave"} />;

const storage = window.localStorage;
storage.setItem("list1", list1);
// reactLocalStorage.setObject(list1, ["abc", "cde", "123"])
storage.setItem("list2", list2);
storage.setItem("list3", list3);
storage.setItem("list4", list4);

const Root = () => (
  <div className="root-container">
    <div className="lists">
      {list1}
      {list2}
      {list3}
      {list4}
    </div>
  </div>
)


export default Root;