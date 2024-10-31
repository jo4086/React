import React, { useState } from 'react';


function Quiz08_sol() {
  const [fontSize, setFontSize] = useState("15px")

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setFontSize(e.target.value)}
      />
      <p style={{ fontSize }}>귤은 비타민 C를 포함하고 있어 감기에 좋습니다.</p>
    </div>
  );
}

export default Quiz08_sol;