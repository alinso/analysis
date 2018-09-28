import React from 'react';
import ServiceItem from '../common/ServiceItem';

class ServiceList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ul>{
                this.props.items.map((item) => {
                    return <ServiceItem label={item.label} link={item.link}/>
                })
            }</ul>
        )
    }
}

export default ServiceList;