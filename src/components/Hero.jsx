import React from 'react'
import { FaGoogle,FaFacebook,FaApple } from "react-icons/fa";
import ImageHero from '../assets/img-hero.svg'

export default function Hero() {
  return (
   <section className='hero'>
        <div className="container-limit">
            <div className="hero__description">
               <div className="hero__item-login">
                    <div className="hero__principal-text">
                        <h1>Welcome back!</h1>
                        <p>
                            simplify your tasks and improve your productivity 
                            with the application, join for free.
                        </p>
                    </div>
                    <div className="hero__form-login">
                        <input type="email" placeholder='email'  className='hero__input'/>
                        <input type="password" placeholder='password'  className='hero__input'/>
                        <a href="#forget" className='btn-forgot'>Forgot password?</a>
                        <a href="#login" className='btn-login'>Login</a>
                    </div>
                    <div className="hero__continue">
                        <hr />
                        <p>or continue with</p>
                        <hr />
                    </div>
                    <div className="hero__options">
                        <a href="#google" className='btn-option'><FaGoogle /></a>
                        <a href="#apple" className='btn-option'><FaApple /></a>
                        <a href="#facebook" className='btn-option'><FaFacebook/></a>
                    </div>
               </div>
               <div className="hero__item-register">
                    <p>Not register yet?</p>
                    <a href="#register" className='btn-register'>register now</a>
               </div>
            </div>
            <figure className="hero__picture">
                <img src={ImageHero} className='hero__img' />
            </figure>
        </div>
   </section>
  )
}
