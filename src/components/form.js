import React, {Component} from 'react'

export default class BookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      author: '',
    };

    this.submit = this.submit.bind(this);
    this.titleVal = this.titleVal.bind(this);
    this.authorVal = this.authorVal.bind(this);
  }

  submit(e){
    e.preventDefault();

    this.props.addBook( {
      title: this.state.title,
      author: this.state.author
    });

    this.setState({
      title: '',
      author: ''
    });
  }

  titleVal(e){
    this.setState({
      title: event.target.value
    });
  }

  authorVal(e){
    this.setState({
      author: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.titleVal}/>
        </div>
        <div>
          <input type="text" placeholder="Author" value={this.state.author} onChange={this.authorVal}/>
        </div>
        <div>
          <input type="submit" value="SUBMIT"/>
        </div>
      </form>
    )
  }
}