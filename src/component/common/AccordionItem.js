import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
    static propTypes = {
        content: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };


    onClick = () => {
        this.props.onClick(this.props.title);
    };


    render() {

        const {
            onClick,
            props: { isOpen, title },
        } = this;

        return (
                <div className="m-accordion__item">
                    <div className="m-accordion__item-head collapsed" role="tab" id={this.props.id+"_head"}
                         data-toggle="collapse" href={"#"+this.props.id+"_body"} aria-expanded="false" onClick={onClick}>
                        <span className="m-accordion__item-title">{this.props.title}</span>
                    </div>
                    {isOpen && (
                    <div className="m-accordion__item-body " id={this.props.id+"_body"} role="tabpanel"
                         aria-labelledby="m_accordion_1_item_1_head" data-parent={this.props.id}>
                        <div className="m-accordion__item-content">
                            <p>
                                {this.props.content}
                            </p>
                        </div>
                    </div>)}
                </div>
        );
    }
}

export default Tab;
