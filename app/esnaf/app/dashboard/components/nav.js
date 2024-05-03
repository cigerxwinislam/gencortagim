// Bismillahirahmanirahim

'use client'

import { Malper } from '../../../../page';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Ilanlar from './ilanlar.';





import  Ilanver from "../ilanver";

import  Profil  from "../components/profil";

import Siparis from './siparis'
// Bu kısım fonksiyon
function TabsExample() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Anasayfa">



<Malper/>

      </Tab>
      <Tab eventKey="sepet" title="İlanlarım">

<Ilanlar/>
</Tab>
      <Tab eventKey="contact" title="Siparişlerim" >
 <Siparis/>
      </Tab>
      <Tab eventKey="profile" title="Profilim">
           <Profil/> 
      </Tab>







      
      <Tab eventKey="ilanver" title="Yeni İlan Ver">
          <Ilanver/>

          </Tab>
    </Tabs>
  );
}

export default TabsExample;

