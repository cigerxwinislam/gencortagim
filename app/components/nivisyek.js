// Bismillahirahmanirahim



import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Nivisyek() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:'green'}} onClick={handleShow}>
        Aydınlatma Metni
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aydınlatma Metni </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<p>Kişisel verilerin işlenme amacı:
İnternet sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel verileriniz aşağıda sıralanan amaçlarla gençortağım.com tarafından KVK kanunu'nun 5. ve 6. maddelerine uygun olarak işlenecektir.<p>
*Web sitesine üye olunması ile ilgili kişilerin web sitesi üzerindeki hizmetlerinden faydalandırılması.</p>
<p>*İlgili kişi tarafından iletişim sekmesinde yer alan kanallarda talepte bulunulması halinde bilgi alınmasının sağlanması dilek ve önerilerini değerlendirmeye alınması ve şikayette bulunabilmesinin sağlanması şirket tarafından sunulan hizmetlerin ilgili kişilerin beğeni kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması…</p>
 
 
 
<p> 2.İşlenen kişisel verilerin aktarıldığı yerler ve aktarım amacı:</p>
Elde edilen kişisel verileriniz kişisel verilerinizin işlenme amaçları doğrultusunda iş ortaklarımıza (dış kaynak hizmet sağlayıcıları, barındırma,(hosting) hizmet sağlayıcıları araştırma şirketleri çağrı merkezleri gibi) şirket iştiraklerimize ve kanunen yetkili kamu kurumları ile özel kişilere KVK kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde aktarılabilecektir.
<p> 3. Kişisel verilerin toplanma yöntemi ve hukuki sebebi:</p>

<p>Kişisel verileriniz gençortağım.com tarafından internet sitemizi ziyaret etmeniz dolayısıyla teknik iletişim dosyaları olan çerezler vasıtasıyla ve aydınlatma metninde belirtilmiş olan amaçlar doğrultusunda doldurduğumuz doldurmuş olduğunuz aydınlatma metninde belirtilmiş olan amaçlar doğrultusunda doldurmuş olduğunuz formlar vasıtasıyla otomatik yolla toplanmaktadır.Çerezler hakkında detaylı bilgi için çerez politikasını inceleyiniz.</p>
 Kişisel verileriniz aşağıda yer alan hukuki sebepler uyarınca işlenmektedir.
KVKK m. 5/2(f) hükmü uyarınca temel hak ve özgürlüklerinize zarar vermemek kaydıyla,Şirket'in meşru menfaatleri için veri işlenmesinin zorunlu olması,
KVKK m.5/2(c) hükümü uyarınca sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması nedeniyle işlemenin gerekli olması (Kullanım koşulları vb. için sözleşmenin ifası,hakkın tesisi ile korunması)
 4.Veri sorumlusuna başvuru yolları ve haklarınız:
Kanun'un 11.maddesi uyarınca şirketimize başvurarak kişiler verilerinizin; </p>   
<p>a) süslenip işlenmediğini öğrenme,</p>
<p>b) işlenmişse bilgi talep etme,</p>
<p>c) işlenme amacını ve amacına uygun kullanıp kullanılmadığını öğrenme,</p>
<p>d) yurt içinde/yurt dışında transfer edildiği tarafları öğrenme,</p>
   <p>e) eksik/yanlış işlenmişse düzeltilmesini isteme,</p>
f) Kanunun 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme,<p>
g) Aktarıldığı üçüncü kişilere yukarıda sayılan (e) ve (f)bendleri uyarınca yapılan işlemlerin bildirilmesini isteme,</p><p>
h) münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</p>,<p>
i) kanununa aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme hakkına sahipsiniz. </p>
<p>
 Belirtilmiş olan haklarınıza ilişkili taleplerinizi veri sorumlusuna başvuru usul ve esasları hakkında tebliğ uyarınca tarafımıza iletebilirsiniz. Bilgi ve başvuru taleplerinizi sitemizde bulunan iletişim kısmından tarafımıza iletebilirsiniz.</p> </Modal.Body>
        <Modal.Footer>
        
          <Button style={{backgroundColor:'green'}} onClick={handleClose}>
           Anladım
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nivisyek;