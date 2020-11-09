import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import App from '../../App';
import astronautS from './imgs/astronautSFoguinho.png'
import foguinho from './imgs/foguinho.png'
import { AnimationAstronaut, AnimationFoguinho, Main } from './styles';

export default function Loader() {
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)
    })

    return (
        <div>
            {!loading ?
                (
                    <Main>
                        <AnimationFoguinho>
                            <img src={foguinho} alt="" />
                        </AnimationFoguinho>
                        <AnimationAstronaut>
                            <img src={astronautS} alt="" />
                        </AnimationAstronaut>
                    </Main>
                )
                :
                (<App />)}
        </div>
    )
}