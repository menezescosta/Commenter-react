import logo from './logo.svg';

import { useState } from 'react';
import people from './img/people.svg'
import * as C from './components/styles/Styled'

function App() {
  
  const [comentario,setComentario]=useState(); 
  const [todosComentarios,setTodosComentarios]=useState([]);

  const clickeiNoBotao=()=>{
    const todosComentariosAnteriores=[...todosComentarios,comentario];
    setTodosComentarios (todosComentariosAnteriores);
  }
  const digiteiNotextArea=(event)=>{
    setComentario(event.target.value);
  }

  return (
   <C.Container>
      <img src={people} alt="imagens pessoas"/>
      <textarea onChange={digiteiNotextArea}></textarea>
      <C.Button isOn={comentario} onClick={clickeiNoBotao}>Comment</C.Button>
     <C.List>
       {todosComentarios.map((item,index)=>(
          <li key={index}>{item}</li>
       ))}
     </C.List>
   </C.Container>
  );
}

export default App;
