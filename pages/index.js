import React, { useEffect } from "react";

import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

// import "quill/dist/quill.snow.css"; // Add css for snow theme

export default function IndexPage() {
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    // console.log(quill, quillRef);
    console.log(quill);
  });

  return (
    <div style={{ width: "600px", height: "300px" }}>
      <div ref={quillRef} />
    </div>
  );
}
