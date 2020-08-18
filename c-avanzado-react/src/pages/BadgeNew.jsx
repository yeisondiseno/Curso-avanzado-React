import React from 'react';
import '../styles/BadgeNew.css';
import header from '../img/badge-header.svg';

import Navbar from '../components/Navbar.jsx';
import Badge from '../components/Badge.jsx';

class BadgeNew extends React.Component {
    render() {
        return (
          <div>
            <Navbar />
            <div className="BadgeNew__hero">
              <img className="img-fluid" src={header} alt="Logo" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <Badge
                    firstName="Richard"
                    lastName="Kaufman"
                    twitter="sparragus"
                    jobTitle="Fontend Engineer"
                    avatarUrl="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BadgeNew;