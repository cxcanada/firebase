import styled from 'styled-components'

// Instead of using props, another recommanded way is to build buttons seperately.

// const ButtonBase = styled.button `
//     box-shadow: 0 0 3px 1px grey;
//     padding: 0.5rem 1rem;
//     color: grey;
//     background-color: ${props => props.bgcolor || "transparent"};
//     border: none;
//     border-radius: 4px;
//     color:${props => props.color || "grey"};
// `

const ButtonBase = styled.button `
    box-shadow: 0 0 3px 1px grey;
    padding: 0.5rem 1rem;
    color: grey;
    background-color:transparent};
    border: none;
    border-radius: 4px;
`

// instantiating styles from ButtonBase not working yet, come back next class to fix it.
const ProviderButton = styled.button `
    box-shadow: 0 0 3px 1px grey;
    padding: 0.5rem 1rem;
    color: grey;
    background-color:transparent};
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    img{
        vertical-align: center;
        margin-right: 0.4rem;
    }

`

// Create other buttons for next class.









export { ButtonBase, ProviderButton }