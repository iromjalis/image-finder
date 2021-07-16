import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Searchbar.styles';

class Searchbar extends PureComponent {
  state = {
    query: this.props.query,
  };

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  handleClearInput = () => {
    this.setState({ query: "" });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            onClick={this.handleClearInput}
            onInput={this.handleChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
