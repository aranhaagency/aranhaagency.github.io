import React, { PureComponent } from 'react'

class BraveRewards extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            token: '91f3e7560c33ed59e0b1ad0d4caaf049f457cd0db604320536bef542610a7378',
            domain: 'aranhaagency.github.io'
        };
    }

    render() {
        return (
            <div className={style}>
                <p>This is a Brave Rewards publisher verification file.</p>
                <p>{this.state.domain}</p>
                <p>{this.state.token}</p>
            </div>
        );
    }
}


export default BraveRewards
