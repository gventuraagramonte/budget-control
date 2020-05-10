import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../common/helpers";

export const ControlPresuspuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto: S/.{presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: S/.{restante}
      </div>
    </Fragment>
  );
};

ControlPresuspuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
