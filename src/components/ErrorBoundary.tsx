import React, { Component, ReactElement } from "react";

export class ErrorBoundary extends Component<{ children: ReactElement }, { hasError: boolean | Error }> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: error });
  }
  render() {
    if (this.state.hasError) {
      return <div>Ooops Error Found!</div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
