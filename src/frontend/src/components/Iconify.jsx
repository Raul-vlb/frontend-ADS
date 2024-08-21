import { Icon } from "@iconify/react";

function Iconify (props) {
    // Para adicionar novos icones, basta adiciona-los no objeto abaixo
    // Novos icones podem ser encontrados em https://icon-sets.iconify.design/

    const icons = {
        facebook: 'fe:facebook',
        instagram: 'fe:instagram',

    }
    
    let icon = icons[props.icon];
    return (
        <Icon icon={icon} />           
    )
}

export default Iconify