import { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import AddItem from './AddItem';
import axios from 'axios';
import { createInputFiles } from 'typescript';


var tableRowIndex = 0;
const CoinTable = () => {
    const baseURL = 'https://bitpay.com/api/rates/';

    const [tableRows, setRows] = useState([] as any);

    const removeRowHandler = () => {

    }

    const getCurrentPrice = async (inputs: any) => {
        console.log('inputs top level:', inputs)
        const response = await axios.get(`${baseURL}${inputs.currency}/USD`)
        let currentPrice = response.data
        console.log(currentPrice)
        inputs.cryptoPrice = currentPrice.rate;
        let coinsRequired = inputs.amount / inputs.cryptoPrice;
        inputs.amtCrypto = coinsRequired.toFixed(8);
        addNewRow(inputs)
    }

    const addNewRow = (inputs: any) => {
        tableRowIndex++
        console.log(tableRowIndex)
        console.log(tableRows)
        console.log('add new row log: ', inputs)
        setRows([...tableRows, inputs])
    }

    const rows = tableRows.map((row: any) => {
        return (
            <TableRow
                key={tableRowIndex}
                addNewRow={addNewRow}
                getCurrentPrice={getCurrentPrice}
                row={row}
            />
        )
    })

    return (
        <>
            <AddItem
                getCurrentPrice={getCurrentPrice}
                addNewRow={addNewRow}
            />
            {tableRows.length > 0 &&
                <table>
                    <tbody>
                        <tr>
                            <th>Merchant</th>
                            <th>Item</th>
                            <th>Amount(Crypto)</th>
                            <th>Currency</th>
                            <th>Price/crypto(USD)</th>
                            <th>Amount(USD)</th>
                        </tr>
                        {rows}
                    </tbody>
                </table>

            }
        </>
    )
}

export default CoinTable;