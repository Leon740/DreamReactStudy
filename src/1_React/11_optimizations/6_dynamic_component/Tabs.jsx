import React, { useState } from 'react';
import Loader from './MainLoader';
import DynamicTab from './DynamicTab';

const TABS = ['Posts', 'Users', 'Comments'];

function Tabs() {
  const [activeTabSt, setActiveTabSt] = useState(TABS[0]);

  return (
    <Loader>
      <div>
        <ul className="flex gap-8 border-b-2 border-black">
          {TABS.map((tab) => (
            <li key={`btn_${tab}`}>
              <button
                type="button"
                className="px-2 py-1"
                onClick={() => setActiveTabSt(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <ul>
          {TABS.map(
            (tab) =>
              tab === activeTabSt && (
                <DynamicTab key={`body_${tab}`} folder="tabs" name={tab} />
              )
          )}
        </ul>
      </div>
    </Loader>
  );
}
export default Tabs;
