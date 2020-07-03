import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
  render() {
    // const { item } = this.props;
    const { title, handleEdit, handleDelete } = this.props;
    // console.log(item.title);
    // console.log(title);
    return (
      <li className="list-group-item">
        {/* <p>{item.title}</p> */}
        <div className="d-flex">
          <div className="p-1 flex-grow-1">
            <h6 className="text-center">{title}</h6>
          </div>
          <div className="p-1">
            <span className="text-info">
              <FontAwesomeIcon icon={faEdit} onClick={handleEdit} />
            </span>
          </div>
          <div className="p-1">
            <span className="text-danger">
              <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
            </span>
          </div>
        </div>
      </li>
    );
  }
}
