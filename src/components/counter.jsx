import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    constructor(props){
        super(props);
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
        this.setState({value: this.state.value + 1});
    };

    handleDecrement() {
        this.setState({value: this.state.value - 1});
    };

    handleDelete() {
        this.setState({value: this.state.value = 0});
    };

    render() { 
        console.log('this', this.props);
        return (
            <div>
                {/* { this.renderTags() } */}
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
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;