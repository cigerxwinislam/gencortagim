// Bismillahirahmanirahim



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Nivisdudu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:'green'}} onClick={handleShow}>
        Kullanım Koşulları
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kullanım Koşulları </Modal.Title>
        </Modal.Header>
        <Modal.Body>  
Siteyi ziyaret ederek ve/veya üye olarak aşağıda belirtilen kullanım koşullarını okuduğunuzu,tamamen anladığınızı ve kullanım koşullarını hiçbir itiraz olmaksızın kabul ettiğinizi, onayladığınızı ve bu hususlarda ilgili herhangi bir itiraz ve def-i ileri sürmeyeceğinizi peşinen kabul,beyan ve tahayyüt etmiş oluyorsunuz. Kullanım koşullarını kabul etmediğiniz takdirde lütfen siteyi kullanmaktan vazgeçiniz.
 gençortağım.com kullanım koşullarında sitede ve sitenin içeriğinde dilediği zaman tek taraflı olarak değişiklik, ayarlama ve güncelleme yapma hakkına sahiptir. Bu değişiklikler ayarlamadan ve güncellemeden sitede yayınlandığı andan itibaren geçerlilik kazanmış olur ve kullanıcı üye tarafından kabul edilmiş sayılır.
İşletmenize ait ticari izin belgenizin bulunması.
İşletmenize ait vergi numarası ve vergi levhasının bulunması.
İşletmenize ait tüm ürünlerin sorumluluğunun size ait olduğunun kabulü
İlanlarınızda ya da sunduğunuz hizmette kusur, hata,yanlış beyan,yanıltıcı içeriğin bulunması durumunda tüm sorumluluğun tarafınıza ait olduğunun kabulü
gençortağım.com aracılığı ile yapılan ticaretten sitemizin yalnızca aracı olduğu ve bunun dışında meydana gelecek herhangi bir durumda sorumluluğun tarafınıza ait olduğunun kabul edilmesi.
Sitemizde kendi işletmeniz adına yaptığınız ticarette fatura kesme sorumluluğu size aittir. </Modal.Body>
        <Modal.Footer>
        
          <Button style={{backgroundColor:'green'}} onClick={handleClose}>
           Anladım
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nivisdudu;