import React from 'react'
import './styles.css'

const AdvancedTemplating = () => {
  return (
    <div>
      <h1>Advanced</h1>
      <div className="grid-container">
        <div className="grid-item header">Header</div>
        <div className="grid-item content">Content</div>
        <div className="grid-item navbar">Navbar</div>
        <div className="grid-item meta">Meta</div>
        <div className="grid-item footer">Footer</div>
      </div>
      <h1>Named lines</h1>
      <div className="grid-named">
        <div className="header">Header</div>
        <div className="content">Content</div>
        <div className="navbar">Navbar</div>
        <div className="meta">Meta</div>
        <div className="footer">Footer</div>
      </div>
      <h1>Element template areas</h1>
      <div className="grid-areas">
        <div className="header">Header</div>
        <div className="content">Content</div>
        <div className="navbar">Navbar</div>
        <div className="meta">Meta</div>
        <div className="footer">Footer</div>
      </div>
      <h1>Implicit rows and grid flow</h1>
      <div className="grid-implicit">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
      </div>
    </div>
  );
}

export default AdvancedTemplating;