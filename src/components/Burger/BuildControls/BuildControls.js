import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export default function BuildControls(props) {
  return (
    <div className="BuildControls">
      <p>
        Current Price:<strong> {props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            disabled={props.disabled[ctrl.type]}
            key={ctrl.label}
            removed={() => props.ingredientRemoved(ctrl.type)}
            added={() => props.ingredientAdded(ctrl.type)}
            label={ctrl.label}
          />
        );
      })}
      <button
        onClick={props.ordered}
        disabled={!props.purchasable}
        className="OrderButton"
      >
        ORDER NOW
      </button>
    </div>
  );
}
