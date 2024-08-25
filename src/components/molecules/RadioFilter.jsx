import React from "react";

const CheckboxFilter = (props) => {
  return (
    <div className="mt-5">
      <div>
         <h2 className="font-semibold text-base">{props.titleCheck}</h2>
        <ul className="">
          {props.listChecked.map((item, index) => (
            <li key={index} className="p-1">
              <input type="checkbox" className="mx-2"/>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxFilter;
