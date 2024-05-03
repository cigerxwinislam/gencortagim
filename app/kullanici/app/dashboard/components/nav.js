// Bismillahirahmanirahim



import { Malper } from '../../../../page';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sepet from './sepet'

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
      <Tab eventKey="sepet" title="Sepetim">

<Sepet/>
</Tab>
      <Tab eventKey="contact" title="" >
 
      </Tab>
    
    


      <Tab eventKey="profile" title="Profilim">
            
          
      </Tab>
    </Tabs>
  );
}

export default TabsExample;

