import React from "react";

function SectionBasic({ title, children }) {
  return (
    <section>
      <h4>{title}</h4>
      {children}
    </section>
  );
}

export default SectionBasic;
