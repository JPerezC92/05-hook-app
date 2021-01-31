import React from "react";

export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("  Me volví a generar :(  ");

  return (
    <button
      className="btn btn-primary ms-3"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
