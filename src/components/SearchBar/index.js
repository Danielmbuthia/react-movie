import React, {useEffect, useRef, useState} from 'react';
import {Content, Wrapper} from "./SearchBar.styles";
import SearchIcon from '../../images/search-icon.svg'

const SearchBar =({setSearchTerm}) =>{
    const [state,setState] = useState('');
    const initial = useRef(true);

    useEffect(()=>{
        if (initial.current){
            initial.current = false;
            return ;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state)
        },500);

        return ()=>clearTimeout(timer);
    },[setSearchTerm,state]);

    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt='search-icon'/>
                <input
                    type='text'
                    placeholder='Search a Movie'
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar
