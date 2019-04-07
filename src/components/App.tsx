import * as React from "react";
import { render } from "react-dom";
import { produce } from "immer";

interface IState {
    count: number;
}

class App extends React.Component<{}, IState> {
    state: IState = {
        count: 0
    };

    handleClick = () => {
        this.setState(
            produce((draft) => {
                draft.count = draft.count + 1;
            })
        );
    }

    render() {
        return (
            <div>
                <button title="decrement" onClick={this.handleClick}>
                    -
        </button>
                {this.state.count}
                <button title="increment" onClick={this.handleClick}>
                    +
        </button>
            </div>
        );
    }
}

export { App };
