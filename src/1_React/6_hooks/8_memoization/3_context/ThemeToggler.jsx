import React, { Profiler, useContext, memo } from 'react';
import ThemeContext from './ThemeContext';

// === Concept
// (memo) = (memoize) component
// Does not re-render component if the (props) are the same from previous render
// Re-render will occur if the component (state) or (context) are changed

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
