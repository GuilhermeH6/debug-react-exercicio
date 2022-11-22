import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno, ImgCardPequeno} from "./styles"
// import styled from 'styled-components'

function CardPequeno(props) {

    return(
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.imagem} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.nome}</TituloCardPequeno>
                <p>{props.descricao}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
        )
}

export default CardPequeno
