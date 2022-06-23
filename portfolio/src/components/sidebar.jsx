import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (<div>
        <aside id="colorlib-aside" className="border js-fullheight">
        <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#presentation" data-nav-section="presentation">Presentation</a></li>
            
                </ul>
              </div>
        </aside>
    </div>)
}
}