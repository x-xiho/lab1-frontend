import React, { useEffect, useState } from 'react';
import SocialKakao from './SocialKakao';
import SocialNaver from './SocialNaver';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);


    // 아이디 유효성 검사
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (regex.test(e.target.value)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    };

    // 비밀번호 유효성 검사
    const handlePW = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    // 로그인 버튼 활성화
    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    }, [emailValid, pwValid]);


    return (
        <div className='page'>
            <div className='titleWrap'>
                아아디와 비밀번호를
                <br />
                입력해주세요
            </div>
            <div className='contentWrap'>
                <div className='inputTitle'>아이디</div>
                <div className='inputWrap'>
                    <input className='input'
                        type='text'
                        placeholder='test@gmail.com'
                        value={email}
                        onChange={handleEmail} /></div>

                <div className='errorMessageWrap'>
                    {!emailValid && email.length > 0 && (
                        <div>아이디 형식이 올바르지 않습니다.</div>
                    )}
                </div>

                <div style={{ margintop: "30px" }} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input className='input'
                        type='password'
                        placeholder='영문, 숫자, 특수문자 포함 8자 이상'
                        value={pw}
                        onChange={handlePW} /></div>
                <div className='errorMessageWrap'>
                    {
                        !pwValid && pw.length > 0 && (
                            <div>비밀번호 형식이 올바르지 않습니다.</div>)
                    }
                </div>

                {/* 소셜 로그인 버튼 */}
                <div className="socialButton">
                    <div className='kakao'><SocialKakao /></div>
                    <div className='naver'><SocialNaver /></div>
                </div>
            </div>



            <div>

                <button disabled={notAllow} className='bottomButton' onClick={() => alert('로그인 되었습니다.')}>확인</button>

            </div>
        </div>
    );
}