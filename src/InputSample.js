import React, { useRef, useState } from "react";

function InputSample() {

    const [inputs, setInputs] = useState({
        username: '',
        nickname: ''
    });

    const {username, nickname} = inputs;

    const nameInput = useRef();

    const onChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = (e) => {
        e.preventDefault();
        setInputs({
            username: '',
            nickname: ''
        });

        nameInput.current.focus();
    }

    return(
        <div>
            <input placeholder="이름" onChange={onChange}  name="username"  value={username} ref={nameInput}/>
            <input placeholder="닉네임" onChange={onChange} name="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {username} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;