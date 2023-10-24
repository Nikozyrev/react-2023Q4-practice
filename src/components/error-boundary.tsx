import { Component, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

type State = {
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: Readonly<State> = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ textAlign: 'center' }}>{this.state.error.message}</div>
      );
    }

    return this.props.children;
  }
}
