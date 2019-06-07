/*This is the parent component*/

import React, { Component } from 'react';
import Note from './components/Note.js'
import './App.css';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        noteText: '',
        notes: [],//array that holds all the notes we create
    }
  }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value })
  }

  addNote(){
    if(this.state.noteText === ''){return}//check if the note text is empty, return
    let notesArr = this.state.notes.slice();
      notesArr.push(this.state.noteText);//if there's something in the note, we push it to the notes text array
      this.setState({ noteText: '', notes: notesArr});
      this.textInput.focus();
  }//resets state of the note text to empty so we can add others, use the reference to refocus the input field 

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      let notesArr = this.state.notes.slice();
        notesArr.push(this.state.noteText);
        this.setState({ noteText: '', notes: notesArr});
    }
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);//removes the note from the notes array
    this.setState({ notes: notesArr })//updates the state of notes
  }

  render() {
    //map is making copies of the note component to create new notes
    let notes = this.state.notes.map((val,key) => {
      return <Note
                key={key}//keeps track of which notes get added or deleted
                text={val}//the  note text
                deleteMethod={() => this.deleteNote(key)}//pasing the key of the note which is the index
             />
    })

    return (
        <div className="container">

          <div className = "header">
            <h1>To Do List</h1>
          </div>{notes}

          <div className="btn" onClick={this.addNote.bind(this)}>+</div>

          <input type="text"
            ref={((input) => {this.textInput = input})}
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
            placeholder="Enter your note here . . ."
          />
        </div>
    );
  }
}
export default App;
