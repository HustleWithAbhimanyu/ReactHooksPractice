import React, { useRef } from "react";

function RefHook() {
  const inputRef = useRef(null);

  const onClick = () => {
   inputRef.current.focus()
    //inputRef.current.value = "";
  };
  return (
    <div>
      <h1>USEREF_HOOKs</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefHook;