import React, { useState, ChangeEvent, MouseEvent } from 'react';


const AddItem = (props:any) => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    }

    const onAddHandler = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('add input logs: ', inputs, event)
        props.getCurrentPrice(inputs)
    }


    return (
        <div>
                <p>
                    <input
                        name='merchant'
                        placeholder='Merchant Name'
                        type='text'
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        name='item'
                        placeholder='Item'
                        type='text'
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        name='currency'
                        placeholder='Currency'
                        type='text'
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <input
                        name='amount'
                        placeholder='Amount'
                        type='text'
                        onChange={handleChange}
                    />
                </p>
                <button
                    onClick={onAddHandler}
                >
                    Add Item
                </button>
            </div>
    )
}

export default AddItem;