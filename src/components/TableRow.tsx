import React, { useState, ChangeEvent, MouseEvent } from 'react';

const TableRow = (props:any) => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const onAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('inputs lower level: ', inputs, event)
        props.getCurrentPrice(inputs)
    }

    const onDeleteHandler = (event: MouseEvent<HTMLButtonElement>) => {

    }


    return (

        <tr>
            <td>
                <input
                    name="merchant"
                    placeholder="Merchant Name"
                    type="text"
                    onChange={handleChange}
                    value={props.row.merchant}
                />
            </td>
            <td>
                <input
                    name="item"
                    placeholder="Item"
                    type="text"
                    onChange={handleChange}
                    value={props.row.item}
                />
            </td>
            <td>
                {/* <input
                    name="amount-crypto"
                    placeholder="Amount(Crypto)"
                    type="text"
                    onChange={handleChange}
                    value={props.row.amtCrypto}
                    
                /> */}
                {props.row.amtCrypto}
            </td>
            <td>
                <input
                    name="currency"
                    placeholder="Currency"
                    type="text"
                    onChange={handleChange}
                    value={props.row.currency}
                />
            </td>
            <td>
                {/* <input
                    name="price"
                    placeholder="Price"
                    type="text"
                    onChange={handleChange}
                    value={props.row.cryptoPrice}
                /> */}
                {props.row.cryptoPrice}
            </td>
            <td>
                <input
                    name="amount"
                    placeholder="Amount(USD)"
                    type="text"
                    onChange={handleChange}
                    value={props.row.amount}
                />
            </td>
            <td>
                <button
                    onClick={onAddHandler}
                >
                    Edit
                </button>
                <button
                    onClick={onDeleteHandler}
                >
                    Delete Row
                </button>
            </td>
        </tr>

    )
}

export default TableRow;