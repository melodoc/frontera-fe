/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }

  render() {
    const { isError } = this.state;

    if (isError) {
      return <div>Что-то пошло не так</div>;
    }

    return this.props.children;
  }
}
