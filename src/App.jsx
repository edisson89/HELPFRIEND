import './App.css'
import image from './assets/BinancePayQR.png'

function App(){
  return(     
    
    <div>
      <header>
      <h1>Ayudame a ayudar a un amigo</h1>
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
        <h2>Billetera:Tron(TRC20) TTRBNvnJKVEoZbPj5XH7mEUPyTzpQ2oQoU</h2>
        <h2>Billetera:(BTC) 12Yxen26xPFZVYUWZ647uVRn5eBYTCt9St</h2>
        <div style={{display:'flex',wrap:' nowrap',justifyContent: 'center'}}>

        <img style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'gray'}} src={image} alt='codigo de ayuda' height='auto' width='200'></img>
        </div>
        

      </main>
      <footer></footer>
    </div>
    
  )
}

export default App;
