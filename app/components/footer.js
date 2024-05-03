// Bismillahirahmanirahim

'use client'

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Bingeh() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span> Bize Ulaşın:</span>
        </div>

      
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{color:'green'}}>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Genç Ortağım
              </h6>
              <p>


              Hakkımızda
Sitemizde kendi yemeklerinizi dilediğiniz şekilde sunmanızı sağlayıp buna aracılık etme gayesiyle çalışıyoruz. Belirlediğiniz fiyatlar üzerine koyduğumuz cüzi miktarda ki komisyonlar ile hem sizin satışlarınızın artmasını hem de müşterinin yemeği daha ucuza almasını amaçlıyoruz. Bu şekilde esnaftan hiç bir bedel almaksızın hizmet sunmayı amaçlıyoruz. Genç Ortağım her zaman yanınızda
               
              </p>
            </MDBCol>

          

  

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'></h6>iletişim
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                gencortagim@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' />Whatsapp İletişim Hattı : 0530 480 38 64
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       <a href='https://www.instagram.com/yekazad_?igsh=MTQ1dHRqZDZxeXkzZw=='>...</a>
        <br></br>   
        
      </div>
    </MDBFooter>
  );
}