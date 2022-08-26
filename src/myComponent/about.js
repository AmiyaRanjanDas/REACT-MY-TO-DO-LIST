import React from 'react';
import image101 from '../myComponent/logo192.png';
import './style.css';

export default function about({mode}) {

    return (
        <div>
            <div className="container" style={(mode==='Dark Mode')?({background:'rgb(0 187 255)',color:'black',
            paddingBottom:'10px'}):({background:'rgb(0, 136, 197)',color:'white',paddingBottom:'10px'})}>
                <h3 style={{ paddingTop: '10px' }}>About:</h3>
                <h6 className="mb-3">The whole Description of this App:</h6>
                <div id='div-res'  style={(mode==='Dark Mode')?({background:'rgb(0 64 255)',color:'black'}):({background:'rgb(0 37 147)',color:'white'})}>
                    <div style={{padding:'10px 20px'}}>
                        <p style={{fontWeight:'600',fontFamily:'monospace'}}>
                            It is a React application named as "TO-DO-LIST". It's main purpose is to create 
                            some tasks or to-do's through a form then we save it so that we can use these 
                            tasks for future planning or daily routine. It stores all data in localStorage
                            with Routing functionality(home,about) page and also with a dark/light mode 
                            setting. Hope you enjoy the App.
                        </p>
                    </div>
                    <div style={{textAlign:'center',background:'black',margin:'10px',padding:'20px 50px'}}>
                    <img src={image101} id='image1001'/>
                    </div>
                </div>
            </div>
            <div className="container" style={(mode==='Dark Mode')?({background:'rgb(0 187 255)',color:'black',
            margin:'10px auto',padding:'10px',textAlign:'center'}):({background:'rgb(0, 37, 147)',color:'white',margin:'10px auto',padding:'10px',textAlign:'center'})}>
            <div class="wrapper">
            <div class="icon email">
                <div class="tooltip">
                    Email
                </div>
                <a href="https://amiyaranjandas2000@gmail.com" target="_blank"><span><i
                            class="fa fa-google"></i></span></a>
            </div>
            <div class="icon facebook">
                <div class="tooltip">
                    Facebook
                </div>
                <a href="https://facebook.com/pro file.php?id=100017013194768" target="_blank"><span><i
                            class="fa fa-facebook-f"></i></span></a>
            </div>
            <div class="icon instagram">
                <div class="tooltip">
                    Instagram
                </div>
                <a href="https://instagram.com/__dream_.hacker_?igshid=YmMyMTA2M2Y" target="_blank"><span><i
                            class="fa fa-instagram"></i></span></a>
            </div>
            <div class="icon github">
                <div class="tooltip">
                    Github
                </div>
                <a href="https://github.com/AmiyaRanjanDas" target="_blank"><span><i
                            class="fa fa-github"></i></span></a>
            </div>
            <div class="icon youtube">
                <div class="tooltip">
                    linkedin
                </div>
                <a href="https://linkedin.com/in/amiyaranjan-das-19a951220 " target="_blank"><span><i
                            class="fa fa-linkedin"></i></span></a>
            </div>
        </div>
            </div>
        </div>
    )
}
