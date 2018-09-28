import React, {Component} from 'react';
import AccordionItem from '../common/AccordionItem';
import PropTypes from 'prop-types';


class Accordion extends Component {
    static propTypes = {
        content: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);
        this.props = props;
        const openSections = {};

        this.state = {openSections};
    }

    onClick = title => {
        const {
            state: {openSections},
        } = this;

        const isOpen = !!openSections[title];

        this.setState({
            openSections: {
                [title]: !isOpen
            }
        });
    };


    render() {

        const {
            onClick,
            props: {content},
            state: {openSections},
        } = this;


        return (
            <div className="m-accordion m-accordion--default" id={this.props.id} role="tablist">
                {
                    this.props.items.map((item) => (
                        <AccordionItem
                            isOpen={!!openSections[item.title]}
                            title={item.title}
                            id={item.id}
                            onClick={onClick}
                            content={item.content}
                        />
                    ))
                }</div>
        )
    }
}

export default Accordion