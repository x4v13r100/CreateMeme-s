
import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css'

function App() {
  // ---------------- Variables y constantes ----------------------------------------
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(event){
    
    setLinea1(event.target.value)

  }

  const onChangeLinea2 = function(event){
    
    setLinea2(event.target.value)

  }

  const onChangeImagen = function(event){
    console.log(event.target.value)
    setImagen(event.target.value)

  }

  const onClickExportar = function (event){
    
    html2canvas(document.querySelector("#broma")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });

  }


  return (
    <>

    {/* Opciones desplegables */}
    <select onChange={onChangeImagen}>
      <option value="fire">Casa en llamas</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">Philosoraptor</option>
      <option value="smart">Smart Guy</option>
    </select> <br/>

    {/* Cajas de texto */}
    <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /> <br/>
    <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /> <br/>
    <button onClick={onClickExportar}>Exportar</button> 

    <div id='broma'>
      <span className='meme'>{linea1}</span><br/>
      <img src={"/src/assets/img/" + imagen +".jpg"} /> <br/>
      <span className='mema1'>{linea2}</span><br/>
    </div> <br/>
    
    
    </>
  )
}

export default App
