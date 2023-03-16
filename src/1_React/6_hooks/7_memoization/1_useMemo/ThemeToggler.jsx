import React, { Profiler, memo } from 'react';

function ThemeToggler({ darkTheme, onChange }) {
  function fnOnRender(id, phase) {
    console.error(`${id} ${phase}`);
  }

  return (
    <Profiler id="ThemeToggler" onRender={(id, phase) => fnOnRender(id, phase)}>
      <section>
        <h3>{darkTheme ? 'dark' : 'white'}</h3>
        <button type="button" className="btn btn-success" onClick={() => onChange()}>toggle theme</button>
      </section>
    </Profiler>
  );
}
export default memo(ThemeToggler);
