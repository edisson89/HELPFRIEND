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
      <h1>Ayudame a ayudar la salud de un amigo</h1>
      <p>
      Petición de Colaboración

Querido <b>Jimmy</b>,

Espero que este mensaje te encuentre bien y en buen ánimo. Me dirijo a ti con una petición especial y con la esperanza de poder brindarte el apoyo que necesitas en este momento.

Como sabes, después de tu accidente, has enfrentado grandes desafíos debido a la inmovilidad de tus manos. Quiero que sepas que no estás solo en este camino y que muchos de nosotros estamos dispuestos a ayudarte de cualquier manera posible.

Para facilitar algunas de las tareas que ahora son difíciles para ti, he pensado en una manera de colaborar más estrechamente contigo. Me gustaría ofrecer mi ayuda para gestionarte algun dispositivo para:

Tareas diarias: Ayudarte con actividades cotidianas que requieran el uso de las manos, como escribir, cocinar, o cualquier otra tarea doméstica.
Tecnología: Asistirte en el uso de dispositivos electrónicos, como escribir correos electrónicos, manejar redes sociales, o cualquier otra actividad digital.

Quiero que sepas que esta propuesta de ayuda es completamente flexible y está abierta a cualquier otra necesidad que puedas tener. Mi objetivo es asegurarte que puedas continuar con tus actividades diarias de la manera más cómoda y eficiente posible.

Por favor, no dudes en decirme cómo puedo ser de más ayuda y en qué momentos sería más conveniente para ti que colaboremos. Estoy aquí para ti y me encantaría poder contribuir a hacer tu vida un poco más fácil durante esta etapa.

Con mucha estima y solidaridad espero que cada granito de arena aporte una valiosa y prospera ayuda.
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
