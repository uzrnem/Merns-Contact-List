import React from "react"

export default class Navigation extends React.Component {

  render() {
    const pageWeight = this.props.pageWeight;
    const updatePageWeight = this.props.changePageWeight;

    return (
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-end" style={{listStyleType: 'none'}}>
          <li className={ pageWeight === 10 ? 'page-item active' : 'page-item' }><a class="page-link" onClick={updatePageWeight.bind(this, 10)}>10</a></li>
          <li className={ pageWeight === 20 ? 'page-item active' : 'page-item' }><a class="page-link" onClick={updatePageWeight.bind(this, 20)}>20</a></li>
          <li className={ pageWeight === 40 ? 'page-item active' : 'page-item' }><a class="page-link" onClick={updatePageWeight.bind(this, 40)}>40</a></li>
          <li className={ pageWeight === 80 ? 'page-item active' : 'page-item' }><a class="page-link" onClick={updatePageWeight.bind(this, 80)}>80</a></li>
        </ul>
      </nav>
    );
  }
}
