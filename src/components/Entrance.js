import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Entrance = ({setCarousel}) => {
    const [isHover, setIsHover] = useState(false);
    const [hmph, setHmph] = useState(false);
    const ranX = Math.random() * 300 - 150;
    const ranY = Math.random() * 300 - 150;

    return(
        <div style = {{width: "1200px", height: "500px", borderRadius: "10px", textAlign: "center", marginBottom: "150px", alignItems: "center"}}>
            <h1>Hi :D! Will you be my valentine this year?</h1>
            <img src = '/valentine-2025/images/cat.gif'></img>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <Button variant="primary" onClick={() => setCarousel(prev => prev + 1)}> ❤️ Yes ! 😊</Button>
                <Button variant="primary" style={{transform: isHover && `translate(${ranX}px, ${ranY}px)`}} onMouseEnter={() => {setIsHover(!isHover); setHmph(true)}}>😈 No ! 👿</Button>
            </div>
            {
                hmph &&
                <div>
                    <h2>Hmph :(</h2>
                </div>
            }
        </div>  
    )
};

export default Entrance;