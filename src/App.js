import React, { Component } from 'react';
import Note from './components/Note.js'
import './App.css';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        noteText: '',
        notes: [],
      }
    }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value})
  }

  addNote(){
    if(this.state.noteText === ''){
    return false
    }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: ''});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){

    }
  }

  deleteNote(index){
    let notesArr = this.satte.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr })
  }

  render() {
    let notes = this.state.notes.map((val,key) => { return <Note
            key={key}
            text={val}
            deleteMethod={() => this.deleteNote(key)} />
          })

    return (
        <div className="container">

          <div className = "header">To Do List</div>
          {notes}

          <div className="btn" onClick={this.addNote.bind(this)}>+</div>

            <input type="text"
              ref={((input) => {this.textInput = input})}
              className="textInput"
              value={this.state.noteText}
              onChange={noteText => this.updateNoteText(noteText)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />

        </div>
    );
  }
}
export default App;
