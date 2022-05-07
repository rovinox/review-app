import React from "react";

export default function displayCurrentItems({ currentItems }) {
  return (
    <div>
      {currentItems.map((item, index) => {
        return (
          <p key={item.login.uuid}>
            {index} {item.name.first} {item.name.last}
          </p>
        );
      })}
    </div>
  );
}
