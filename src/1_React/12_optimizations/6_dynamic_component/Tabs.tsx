import React, { useState } from 'react';
import DynamicComponent from './DynamicComponent';

const DATA: string[] = ['Posts', 'Users', 'Comments'];

function Tabs() {
  const [activeTabSt, setActiveTabSt] = useState<string>(DATA[0]);

  return (
    <div>
      <ul className="flex flex-row -mx-2 border-b-2 border-black">
        {DATA.map((tabHeader, index) => (
          <li key={index} className={`mx-2 ${activeTabSt === tabHeader ? 'text-red-600' : ''}`}>
            <button type="button" onClick={() => setActiveTabSt(tabHeader)}>
              {tabHeader}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex flex-row">
        {DATA.map(
          (tabBody, index) =>
            activeTabSt === tabBody && <DynamicComponent key={index} folder="tabs" name={tabBody} />
        )}
      </ul>
    </div>
  );
}
export default Tabs;
