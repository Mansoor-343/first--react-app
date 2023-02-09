import React, {useState} from "react";

function FunctionalComponent (props) {
    const [count, setCount] = useState(7);
    const [changeName, setChangeName] = useState("");

    const {name,number,company,setName} = props;

    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() =>setCount(count + 1)}>Click me to Add 1</button>
            <button onClick={() =>setCount(count - 1)}>Click me to subtract 1</button>
            <h1>

                {count}
            </h1>
            <h1>My name is {name} i am {number}, I work for {company} </h1>
            <input onChange={(e)=> setChangeName(e.target.value) }/>
            <button
             onClick={() =>setName(changeName) }> change name to Irshad
             </button>
        </div>
    );
}

export default FunctionalComponent;