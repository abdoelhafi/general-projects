import React from 'react';

const date = new Date();
const year = date.getFullYear();

console.log(year);

function Footer(){
    return (
        <footer>
           <p>copyright ⓒ {year}</p>
        </footer>
    );
}

export default Footer;