// Bismillahirahmanirahim

'use client'

import React from 'react'
import { Alert, Button, Col,Container,Row } from 'react-bootstrap'
import CardExample from './components/card'

export function Malper() {

  return (
    <div>



<h1>yapım aşamasında</h1>




  

    </div>
  )
}





export default function page() {
  return (
    <div>


<Alert>Konum Bilginizi Açın Lütfen</Alert>

      <Malper/>

  <Container style={{  alignItems:'center',  justifyItems:'center', justifyContent:'center'}}>   
<Row>

<Col><Button style={{background:'green'}} href='/'>Kullanıcı Girişi</Button></Col>


<Col><Button style={{background:'green'}}  href='/'>Kurumsal Giriş</Button>
</Col>

<Col><Button style={{background:'green'}}  href='/'>Diğer</Button>
</Col>

</Row> 



</Container> 
    </div>
  )
}


