import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

import { Button } from "@material-ui/core";
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
      <header className={s.Searchbar}>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={s.SearchFormButton}
          >
            <span className="SearchForm-button-label">Search</span>
          </Button>

          <input
            color="primary"
            className={s.SearchFormInput}
            type="text"
            name="query"
            value={this.state.query}
            autoComplete="off"
            onClick={this.handleClearInput}
            onInput={this.handleChange}
            autoFocus
            placeholder="Search images and photos"
            variant="contained"
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
