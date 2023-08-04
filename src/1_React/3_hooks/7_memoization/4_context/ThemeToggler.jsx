import React, { Profiler, useContext, memo } from 'react';
import ThemeContext from './ThemeContext';

// === Concept
// === Problem
// 1) if the (parent) component re-renders, all of the children components re-render
// Even if (ThemeToggler) comp. props are the same as they were in the previous render
// === Solution
// 1) memo = (memoize) component
// 2) memo is a function which returns a comp.
// 3) The important & basic rule is that if the component props are the same as they were in the previous render, the comp. will no re-render
// 4) Re-render will occur only if the component (state) or (context) are changed

function ThemeToggler() {
  const { darkTheme, onChange } = useContext(ThemeContext);

  function fnOnRender(id, phase) {
    console.error(`${id} ${phase}`);
  }

  return (
    <Profiler id="ThemeToggler" onRender={(id, phase) => fnOnRender(id, phase)}>
      <section>
        <h2>{darkTheme ? 'dark' : 'white'}</h2>
        <button type="button" className="btn btn-success" onClick={() => onChange()}>toggle theme</button>
      </section>
    </Profiler>
  );
}
export default memo(ThemeToggler);
