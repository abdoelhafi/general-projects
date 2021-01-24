import React from 'react';
import Header from './Header'
import Note from './Note'
import Footer from './Footer';
import notes from '../notes';


function App(){
    return (
        <div className = "">
            <Header />
        
            {notes.map(props => <Note key = {props.key} title = {props.title} content = {props.content} /> )}
            <Note title = "hello" content = "how are you" />
            
            <Footer />
        </div>
    );
}

export default App;