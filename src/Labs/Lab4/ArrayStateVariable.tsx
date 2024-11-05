import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index:number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="p-3">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success mb-3">
        Add Element
      </button>
      <table className="table">
        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td className="text-end">
                <button
                  onClick={() => deleteElement(index)}
                  id="wd-delete-element-click"
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
}
