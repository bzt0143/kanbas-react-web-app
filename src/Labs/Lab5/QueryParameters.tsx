import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

const QueryParameters = () => {
  const [a, setA] = useState<number>(34);
  const [b, setB] = useState<number>(22);

  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input
        id="wd-query-parameter-a"
        className="form-control mb-2"
        defaultValue={a}
        type="number"
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        id="wd-query-parameter-b"
        className="form-control mb-2"
        defaultValue={b}
        type="number"
        onChange={(e) => setB(Number(e.target.value))}
      />

      {/* Query String Links */}
      <h4>Query String Links</h4>
      <a
        id="wd-query-parameter-add"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <br />
      <a
        id="wd-query-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <br />
      <a
        id="wd-query-parameter-multiply"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} × {b}
      </a>
      <br />
      <a
        id="wd-query-parameter-divide"
        href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} ÷ {b}
      </a>

      {/* Path Parameter Links */}
      <h4>Path Parameter Links</h4>
      <a
        id="wd-path-parameter-add"
        href={`${REMOTE_SERVER}/lab5/calculator/add/${a}/${b}`}
      >
        Add {a} + {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/calculator/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-multiply"
        href={`${REMOTE_SERVER}/lab5/calculator/multiply/${a}/${b}`}
      >
        Multiply {a} × {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-divide"
        href={`${REMOTE_SERVER}/lab5/calculator/divide/${a}/${b}`}
      >
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
};

export default QueryParameters;
