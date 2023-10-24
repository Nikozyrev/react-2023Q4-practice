import { Component, ReactNode } from 'react';

type State = {
  hasError: boolean;
};

export class ErrorButton extends Component<{}, State> {
  state: Readonly<State> = {
    hasError: false,
  };

  throw() {
    if (this.state.hasError) {
      throw new Error('ERROR!!!1111');
    }
  }

  render(): ReactNode {
    this.throw();
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ width: 'fit-content' }}
          onClick={() => this.setState({ hasError: true })}
        >
          Throw Error
        </button>
      </div>
    );
  }
}
