import React, { Component } from 'react'

class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeItem: ''
    }
  }

  async clickHandler(n) {
    await this.setState({ activeItem: n })
    await this.props.history.push(`/${n}`)
  }

  navItem(label, name) {
    let cName = 'nav-item'
    if (this.state.activeItem === name) {
      cName += ' active'
    }
    return (
      <li className={cName} onClick={() => this.clickHandler(name)} >
        <a className="nav-link">{label}</a>
      </li>
    )
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand">Micro FE Demo</a>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              {this.navItem('Home', '')}
              {this.navItem('Example 1', 'ex1')}
              {this.navItem('Example 2', 'ex2')}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

// const SideBar = p => {
//   const [activeItem, setActive] = useState('home');

//   const clickHandler = n => {
//     setActive(n);
//     p.history.push(`/${n}`);
//   };

//   const navItem = (label, name) => {
//     let cName = 'nav-item';
//     if (activeItem === name) { cName += ' active'; }

//     return (
//       <li className={cName} onClick={() => clickHandler(name)} >
//         <a className="nav-link">{label}</a>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <a className="navbar-brand">Micro FE Demo</a>
//         <div className="collapse navbar-collapse" id="navbarColor02">
//           <ul className="navbar-nav mr-auto">
//             {navItem('Home', '')}
//             {navItem('Example 1', 'ex1')}
//             {navItem('Example 2', 'ex2')}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

export default SideBar;
