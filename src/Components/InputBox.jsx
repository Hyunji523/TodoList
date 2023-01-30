import React, { useRef, useState } from 'react';
import '../App.css'


let InputBox = ()=>{
    let [text, setText] = useState('');
    let inputRef = useRef(null);

    let onChangeInput = (e)=>{
        setText(e.target.value)
    }
    let onClickAddBtn = ()=>{
        setText(''); //input 초기화
        inputRef.current.focus(); //input으로 포커스
    }

    return (
        <div className="todoapp__inputbox">
            {/* 아이템 내용 입력 input */}
            <input
            type="text"
            name="todoItem"
            placeholder="할 일을 입력해주세요"
            className="todoapp__inputbox-inp"
            value={text}
            ref={inputRef}
            onChange={onChangeInput}
            />
            {/* 입력 후 아이템 추가 버튼 */}
            <button type="submit" className="todoapp__inputbox-add-btn" onClick={onClickAddBtn}>
            추가
            </button>
        </div>
    )
}
export default InputBox;