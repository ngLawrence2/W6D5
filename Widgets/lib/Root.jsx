import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tab from './tabs.jsx';
import Weather from './weather.jsx';

let tab1 = {title: 'first', content: 'firstCon'};
let tab2 = {title: 'Second', content: 'Second'};
let tab3 = {title: 'Third', content: 'Third'};


const Root = () => {
  return (

    <div>
      <Clock />
      <Tab tabs={[tab1,tab2,tab3]} />
      <Weather />
    </div>
  );
};

export default Root;
