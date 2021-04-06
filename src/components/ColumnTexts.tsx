import React from 'react'
import StyledColumnTexts from '../styled-components/StyledColumnTexts';

interface Theme{
    primCol: string;
}

interface ThemeProps {
    theme: Theme;
}

const ColumnTexts: React.FC<ThemeProps> = ({theme}) => {
    return (
        <StyledColumnTexts theme={theme}>
            <div className="column">
                <h4>Noico</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit perferendis odio maxime. Tempore accusamus distinctio aliquid, eius ullam voluptates.</p>
            </div>

            <div className="column">
                <h4>Noico</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit perferendis odio maxime. Tempore accusamus distinctio aliquid, eius ullam voluptates.</p>
            </div>
        </StyledColumnTexts>
    )
}

export default ColumnTexts
