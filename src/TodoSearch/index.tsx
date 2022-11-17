import { InputText } from 'primereact';
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

export const TodoSearch = () => {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className='align-self-center'>
            <br />
             <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText placeholder="Buscador" 
                value={searchValue}
                onChange={onSearchValueChange} />
            </span>  
        </div>
         
    )
}