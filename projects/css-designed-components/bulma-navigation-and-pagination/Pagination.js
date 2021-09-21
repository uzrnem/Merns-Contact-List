import React from "react"

export default class Pagination extends React.Component {

  render() {
    const current = this.props.current;
    const final = this.props.final;
    const changeCurrent = this.props.changeCurrent;

    let previous = <a class="pagination-previous" disabled>Previous</a>;
    if (current > 1 ) {
      previous = <a class="pagination-previous" onClick={changeCurrent.bind(this, current - 1)}>Previous</a>
    }

    let next = <a class="pagination-next" disabled>Next page</a>;
    if (current != final && final != 1) {
      next = <a class="pagination-next" onClick={changeCurrent.bind(this, current + 1)}>Next page</a>
    }

    let a = null;
    let ab = null;
    let b = null;
    let c = null;
    let d = null;
    let de = null;
    let e = null;
    if (current > 2) {
      a = <li><a class="pagination-link" onClick={changeCurrent.bind(this, 1)}>1</a></li>
    }
    if (current > 3) {
      ab = <li><span class="pagination-ellipsis">…</span></li>
    }
    if (current > 1) {
      b = <li><a class="pagination-link" onClick={changeCurrent.bind(this, current - 1)}>{current - 1}</a></li>
    }
    if ((final - current) > 0) {
      d = <li><a class="pagination-link" onClick={changeCurrent.bind(this, current + 1)}>{current + 1}</a></li>
    }
    if ((final - current) > 2) {
      de = <li><span class="pagination-ellipsis">…</span></li>
    }
    if ((final - current) > 1) {
      e = <li><a class="pagination-link" onClick={changeCurrent.bind(this, final)}>{final}</a></li>
    }
    return (
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        { previous }
        { next }
        <ul class="pagination-list" style={{listStyleType: 'none',margin: '1rem 0', paddingLeft: '0px'}}>
          { a }
          { ab }
          { b }
          <li><a class="pagination-link is-current" >{current}</a></li>
          { d }
          { de }
          { e }
        </ul>
      </nav>
    );
  }
}
