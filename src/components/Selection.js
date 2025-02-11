
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Selection = ({title, options, setCarousel}) =>{

    const [optionSelected, setOptionSelected] = useState([]);

    const handleOnClickOption = (option) =>{
        if (optionSelected.includes(option)){
            setOptionSelected(optionSelected.filter(item => item !== option));
        }
        else{
            setOptionSelected([...optionSelected, option])
        }
    };

    return (
        <div style = {{width: "1200px", borderRadius: "10px", textAlign: "center", marginBottom: "150px", alignItems: "center"}}>
            <h2 style={{marginTop: "30px"}}>{title}</h2>
            <div style = {{display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", alignContent: "center"}}>
                {options.map(option =>  
                    <div style={{margin: "10px",}} > 
                        <div onClick={() => handleOnClickOption(option)}>
                            <Image src={`/valentine-2025/images/${option}.jpg`}  style = {{width: "150px", height: "150px"}}  />
                        </div>
                        <div>
                            <Form.Check
                                inline
                                label={option}
                                name="group1"
                                onClick={() => handleOnClickOption(option)}      
                            />
                        </div>
                    </div> 
                )}
                <Button variant="primary" style={{height: "50px"}} onClick={() => setCarousel(prev => prev + 1)}>Next</Button>
            </div>
        </div>
    )
};


export default Selection;