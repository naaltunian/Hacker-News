import React from "react";
import Button from "./Button.js";

const Table = ({list, onDismiss}) =>  {
  return (
    <div className="table">
      {list.map((item) => {
        return(
          <div key={item.objectID} className="table-row">
            <span style={{width: "40%"}}><a href={item.url}>{item.title}</a></span>
            <span style={{width: "30%"}}>{item.author}</span>
            <span style={{widht: "10%"}}>{item.num_comments}</span>
            <span style={{widht: "10%"}}>{item.num_comments}</span>
            <span style={{widht: "10%"}}>
              <Button className="button-inline" onClick={() => onDismiss(item.objectID)} type="button">Dismiss</Button>
            </span>
          </div>
        )
        })
      }
    </div>
  )
}

export default Table;
