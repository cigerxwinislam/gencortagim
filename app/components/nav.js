// Bismillahirahmanirahim

'use client'

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Siparis from '../pages/esnaf/components/siparis';
import Ilan from '../pages/esnaf/components/ilan';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >


      
      <Tab eventKey="home" title="Siparişlerim">

<Siparis/>
      </Tab>
      
      <Tab eventKey="contact" title="İlanlarım" >
      <Ilan/>   
      </Tab>
    
    


      <Tab eventKey="profile" title="Profilim">
            
            Profilim
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;