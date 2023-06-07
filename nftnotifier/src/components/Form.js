import React from "react";
import './Form.css';

function Form(){
    
    return(
        <>
        <div className="Form">
            <h1>Create A Post About Your Project</h1>
            <form className="Inputs">
                <div className="Input">
                    <label for='Name'>Project Name:</label>
                    <input type='name' id='Name' />
                </div>
                
                <div className="Input">
                    <label for='Date'>Mint Date:</label>
                    <input type='date' id='Date' />
                </div>

                <div className="Input">
                    <label for='Price'>Mint Price:</label>
                    <input type='number' id='Price' />
                </div>

                <div className="Input">
                    <label for='Discord'><i className="fa-brands fa-discord" /></label>
                    <input type='url' id='Discord' />
                </div>


                <div className="Input">
                    <label for='Twitter'><i className="fa-brands fa-twitter" /></label>
                    <input type='url' id='Twitter' />
                </div>


                <div className="Input">
                    <label for='Website'><i className="fa-solid fa-globe" /></label>
                    <input type='url' id='Website' />
                </div>

                <div className="Input">
                    <label for='email'>E-mail Address</label>
                    <input type='email' id='Website' />
                </div>

                <div className="Input">
                    <input type='file' id='file' accept=".jpg, .png, .jpeg, .gif, .svg" />    
                </div>

                
                <div className="Submit">
                    <input className="submit" type='submit' />
                        
                    
                </div>

            </form>
        </div>
        </>
    )
}


export default Form