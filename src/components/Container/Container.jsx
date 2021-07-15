import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Container.styles';

class Container extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Container will mount');
  }

  componentDidMount = () => {
    console.log('Container mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Container will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Container will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Container did update');
  }

  componentWillUnmount = () => {
    console.log('Container will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContainerWrapper">
        Test content
      </div>
    );
  }
}

Container.propTypes = {
  // bla: PropTypes.string,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;
