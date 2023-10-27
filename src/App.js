import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [backgroundColor,setBackgroundColor] = useState('#ee90ed');
  const changeBackgroundColor = (color) =>{
    setBackgroundColor(color);
  };

  return (
    <>
      <div style={{width:'100%',height:'100vh',display:'flex',flexDirection: 'column',justifyContent:'center',
      alignItems:'center',textAlign:'center',backgroundColor: backgroundColor}}>
        <div style={{fontSize:'50px',fontWeight:'bold'}}>Background Color Change</div>
        <div className='d-flex mt-5'>
          <Button onClick={()=>changeBackgroundColor('red')} style={{borderRadius:'50%'}} variant="light">RED</Button>
          <Button onClick={()=>changeBackgroundColor('blue')} style={{borderRadius:'50%'}} className='ms-3' variant="light">BLUE</Button>
          <Button onClick={()=>changeBackgroundColor('#0FFF50')} style={{borderRadius:'50%'}} className='ms-3' variant="light">GREEN</Button>
          <Button onClick={()=>changeBackgroundColor('yellow')} style={{borderRadius:'50%'}} className=' ms-3' variant="light">YELLOW</Button>  
        </div>
      </div>
    </>
  );
}

export default App;



