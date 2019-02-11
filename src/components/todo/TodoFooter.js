import React, {
    Component
} from 'react';

class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        };
    };

    render() {
        return ( 
            <div className = "col-lg-12" >
                <div className = 'm-sm' > Кол - во заданий: 
                    < span className = "badge badge-primary m-l-sm" > {
                        this.props.todos.length
                    }
                    </span>
                </div >
            </div>
        )
    }
}

export default TodoFooter