import { useRef } from 'react';
import './App.css'
import image from './assets/BinancePayQR.png'
import { useState } from 'react';

function App(){
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('¡Estamos aquí para ayudar.Ayudame a compartir esta increíble página web y mejora una Vida!');
  
  const socialMediaLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    whatsapp: `https://wa.me/?text=${text} ${url}`
  };

  const textRef = useRef(null);
  const [message, setMessage] = useState('');

  const text2Ref = useRef(null);
  const [message2, setMessage2] = useState('');
  const copiarTexto = async () => {
    try {
      await navigator.clipboard.writeText(textRef.current.value);
      setMessage('Texto copiado al portapapeles');
    } catch (err) {
      setMessage('Fallo al copiar el texto');
    }
  };
  const copiar2Texto = async () => {
    try {
      await navigator.clipboard.writeText(text2Ref.current.value);
      setMessage2('Texto copiado al portapapeles');
    } catch (err) {
      setMessage2('Fallo al copiar el texto');
    }
  };
  return(     
    
    <div>
      <header>
      <h1>Ayudame a reestablecer la movilidad de los brazos de Jim</h1>
      <p>
    <h2>Petición de Colaboración</h2>  

 

Querido/a  <b>Donante</b>,

Espero que este mensaje te encuentre bien. Hoy me dirijo a ti con el corazón lleno de esperanza y una petición especial para alguien muy querido.

Jim es una persona increíblemente valiente que recientemente sufrió un accidente que le ha dejado sin movilidad en sus brazos. Esta situación ha cambiado su vida de manera drástica, y aunque su espíritu sigue siendo fuerte, las limitaciones físicas han creado desafíos que son difíciles de superar sin ayuda.

Después de consultar con varios especialistas, hemos descubierto que una prótesis podría devolverle una gran parte de la independencia y calidad de vida que ha perdido. Sin embargo, el costo de una prótesis funcional es significativo, y aquí es donde tu ayuda puede marcar una diferencia enorme.

Estamos organizando una campaña para recaudar fondos con el objetivo de cubrir el costo de la prótesis y los gastos médicos relacionados. Cualquier contribución, sin importar el tamaño, será inmensamente apreciada y traerá a Jim un paso más cerca de recuperar su autonomía y continuar viviendo una vida plena.

Cómo puedes ayudar:

<b>Donación directa:</b> Puedes hacer una donación directa a través de los enlaces web posteriormente mensionados o a traves de #Paypal edisson.12@hotmail.com
<b>Compartir la causa:</b> Si no puedes contribuir económicamente, por favor considera compartir esta solicitud con tus amigos y familiares. Cuantas más personas sepan de nuestra causa, más posibilidades tenemos de alcanzar nuestra meta.
Te agradecemos de todo corazón por tomarte el tiempo para leer nuestra petición. Tu generosidad y apoyo pueden cambiar la vida de Jim de maneras inimaginables. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme directamente al correo.

Gracias por tu tiempo y consideración.

Con gratitud,

 EDD
      </p>
      </header>
      <main>
        <h2>Billetera USDT:Tron(TRC20) 
          <textarea style={{padding:5,marginLeft:10,borderRadius:10,width:'280px'}} ref={textRef} defaultValue="TTRBNvnJKVEoZbPj5XH7mEUPyTzpQ2oQoU" readOnly>
          </textarea>
          </h2>
          <button onClick={copiarTexto} style={{ marginTop: '1px', padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>
        Copiar billetera
      </button>
      {message && <p>{message}</p>}

        <h2>  Billetera BTC:(BTC) 
        <textarea style={{padding:5,marginLeft:10,borderRadius:10,width:'280px'}} ref={text2Ref} defaultValue="12Yxen26xPFZVYUWZ647uVRn5eBYTCt9St" readOnly>
        </textarea>
        </h2>
        <button onClick={copiar2Texto} style={{ marginTop: '1px', padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>
        Copiar billetera
      </button>
      {message2 && <p>{message2}</p>}
    
        <div style={{display:'flex',wrap:' nowrap',justifyContent: 'center'}}>
   
  <br />
        <img style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'gray'}} src={image} alt='codigo de ayuda' height='auto' width='220'></img>
        </div>
        

      </main>
      <footer>
      <h1>Compartir esta Página</h1>
      <div  style={{display:'flex',margin:10,justifyContent:'center',alignItems:'center'}}   className="social-buttons">
        <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
          <button>Compartir en Facebook</button>
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
          <button>Compartir en Twitter</button>
        </a>
        <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <button>Compartir en LinkedIn</button>
        </a>
        <a href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <button>Compartir en WhatsApp</button>
        </a>
      </div>
      </footer>
    </div>
    
  )
}

export default App;
