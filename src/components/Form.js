import React,{useState} from 'react'

export default function Form() {

    const [password,setPassword]=useState("")
    const [passwordLength,setPasswordLength]=useState(12)
     const [big,setBig]=useState(true)
      const [special,setSpecial]=useState(true)

   let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
       let bigCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       let specialChar = "!§$%&?";
    

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(Math.floor(Math.random()*characters.length))
    createPassword(passwordLength)
}

const createPassword=(length)=>{
    let ourPassword="";
    let allCharacters=characters;
    console.log(allCharacters, ".......allcharacters")
    console.log(characters,"characters........")
    if(big){
       allCharacters =allCharacters + bigCase
    }
    if(special){
        allCharacters =allCharacters + specialChar
    }
    for(let i=0;i<length-1;i++){
        console.log(allCharacters)
        let randomNumber= Math.floor(Math.random()*allCharacters.length)
        console.log("random....",randomNumber)
        
        ourPassword+=allCharacters[randomNumber]
        console.log("ourpassword........", ourPassword)
    }
    setPassword(ourPassword)
}

    return (
        <div className="wrapper">    
    <form onSubmit={handleSubmit} className="form-wrapper" >
 
    <fieldset className="header">


        <h1> Result:</h1> 
        <input name="password" value={password} readOnly/>
        <button className="createAccount">Generate Password</button>
    </fieldset>

    <fieldset>

    <label><span>Setting</span></label>
            
            <label>
                Passwordlength
                <input name="passwordLength" value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} />
            </label>
            
            <label>
            <input type="checkbox" name="big" checked={big} onChange={(e)=>setBig(!big)} />
                useMixedCase
            </label>
            
            <label>
                <input type="checkbox" name="special" checked={special} onChange={(e)=>setSpecial(!special)} />
                specialCase
            </label>
    </fieldset>

</form>

            
        </div>
    )
}
