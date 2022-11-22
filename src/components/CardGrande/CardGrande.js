import React from 'react';
// import styled from 'styled-components'
import { LayoutCardGrande, ImgCardGrande, InfosCardGrande, TituloCardGrande} from "./styles"


export default function CardGrande(props) {
   
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.nome }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}