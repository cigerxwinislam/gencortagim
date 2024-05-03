// Bismillahirahmanirahim



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Nivissise() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:'green'}} onClick={handleShow}>
        Yasal Uyarı
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  Yasal Uyarı</Modal.Title>
        </Modal.Header>
        <Modal.Body>
genç ortağım.com başka hiçbir siteyle işbirliği ve birliktelik içerisinde değildir. gençortağım.com adı altında iş yaptığı iddia edilen kimseye itibar edilmemelidir. gençortağım.com sitesi adı Cuma İÇLİ' ye ait şahıs şirketinin bir sitesi olup başka şahıslarca adı ve yaptığı iş içeriğinin kullanılması şirketimiz nezdinde zararlı görünmektedir. Bundan dolayı olası bir durumda maddi ve manevi her türlü zararı tazmin Hakkı saklıdır. </Modal.Body>
        <Modal.Footer>
        
          <Button style={{backgroundColor:'green'}} onClick={handleClose}>
           Anladım
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nivissise;