import "./banner.css"
import React from 'react';

interface BannerProps {
    enderecoImagem: string,
    textoAlt?: string
};

const Banner = ({ enderecoImagem, textoAlt }:BannerProps) => {
    return (
    <div className="banner">
        <img src={enderecoImagem} alt={textoAlt}/>
    </div>
    );
};

export default Banner