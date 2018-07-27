import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
    this.click = this.click.bind(this);
  }

  render() {
    const { tabs } = this.props ;
    const content = tabs[this.state.selected].content;

    return (
      <div className="tab">
        <ul className = "tab-header">
          {tabs.map( (tab, idx) => {
            return (
              <li key={idx} onClick={this.click(idx)}>
                <h1>{tab.title}</h1>
              </li>
            );
            })}

            <article> {content} </article>
        </ul>
      </div>
    );
  }

  click(key) {
    return (e) => this.setState({selected: key}) ;

    // this.setState({selected: })
  }



}

export default Tabs;
