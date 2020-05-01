import React,{useState} from 'react'

export default function Form {

    const [password,setPassword]=useState("")
    const [passwordLength,setPasswordLength]=useState(12)
     const [big,setBig]=useState(true)
      const [special,setSpecial]=useState(true)

    return (
        <div>    
    <form onSubmit={this.handleSubmit} className="flex">
 
    <fieldset>
        <label>Result: </label>
        <input name="password" value={this.state.password} readOnly/>
        <button>Generate Password</button>
    </fieldset>

    <fieldset>

    <label><span>Setting</span></label>
            
            <label>
                Passwordlength
                <input name="passwordLength" value={this.state.passwordLength} onChange={this.handleChange}/>
            </label>
            
            <label>
            <input type="checkbox" name="big" checked={this.state.big} onChange={this.handleCheck} />
                useMixedCase
            </label>
            
            <label>
                <input type="checkbox" name="special" checked={this.state.special} onChange={this.handleCheck}/>
                specialCase
            </label>
    </fieldset>

</form>

            
        </div>
    )
}
