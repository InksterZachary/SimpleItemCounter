import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    handleIncrement(product) {
        console.log(product);
        this.setState({count: this.state.count + 1});
    };

    handleDecrement() {
        this.setState({count: this.state.count - 1});
    };

    handleDelete() {
        this.setState({count: this.state.count = 0});
    }

    render() { 
        return (
            <div>
                { this.renderTags() }
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary m-2 btn-sm">
                    +
                </button>
                <button onClick={this.handleDecrement} className="btn btn-secondary m-2 btn-sm">
                    -
                </button>
                <button onClick={this.handleDelete} className="btn btn-danger m-2 btn-sm">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;