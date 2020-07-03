import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleEdit, handleDelete } = this.props;
    return (
      <ul className="list-group">
        {items.map((item) => {
          // return <TodoItem key={item} item={item} />;
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
              handleDelete={() => handleDelete(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}
