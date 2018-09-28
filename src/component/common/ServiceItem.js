import React from 'react';

class ServiceItem extends React.Component{
    constructor(props){
        super(props);
        this.link=props.link;
        this.label=props.label;
    }

    onClick(e){
        alert(this.link);
    }

    render(){
        return(
            <li className={"service_item"} onClick={this.onClick}>{this.label}</li>
        )
    }
}
export default ServiceItem;