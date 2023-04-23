

const LowStockMsg = ({stock}) => {

    return (
        <p><strong>
            {
                stock === 1 
                    ? `Ultima unidad!`
                    : ` ${stock} unidades en stock, apurate!`
            }
        </strong></p> 
    )
}

export default LowStockMsg