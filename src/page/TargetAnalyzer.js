import '../css/common/Tabs.css';
import React from 'react';
import Tabs from '../component/targetanalyzer/Tabs'
import ChkboxList from '../component/common/ChkboxList';
import Accoridon from '../component/common/Accordion';
import ServiceList from '../component/targetanalyzer/ServiceList';


class TargetAnalyzer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.setState({targetNumber:{}});

    }

    onChange(name, values) {
        this.setState({targetNumber: values});
    }


    render() {
        const targets=[];
        const targets2=[] ;


        let target;
        for(let i =0;i<5;i++){
             target= {id:i,label:"li target li target li target li target "+i};
            targets.push(target);
        }


        for(let i =0;i<5;i++){
            target= {id:i,label:"dr target dr target dr target dr target "+i};
            targets2.push(target);
        }


        const serviceItems=[
            {label:"service 1", link:"link 1"},
            {label:"service 2", link:"link 2"},
            {label:"service 3", link:"link 3"},
            {label:"service 4", link:"link 4"},
        ];

        const serviceList  = (<ServiceList items={serviceItems}/>);


        const AccordionItems=[
            {id:"id1",content:serviceList,title:"title1"},
            {id:"id2",content:serviceList,title:"title2"},
            {id:"id3",content:serviceList,title:"title3"},
            {id:"id4",content:serviceList,title:"title4"}
        ];

        return (
            <div>
                <h3>Target analyzer</h3>
                <div className={'LI_DRTabs'}>
                    <Tabs>
                        <div label="LI Targets">
                            <h4>Targets</h4>
                            <form className="form">
                                <div className="list-group col-xs-6">
                                    <ChkboxList
                                        onChange={(values) => this.onChange('targetNumber', values)}
                                        values={targets}
                                    />
                                </div>
                            </form>
                        </div>
                        <div label="DR Targets">
                            <h4>Targets</h4>
                            <form className="form">
                                <div className="list-group col-xs-6">
                                    <ChkboxList
                                        onChange={(values) => this.onChange('target', values)}
                                        values={targets2}
                                    />
                                </div>
                            </form>
                        </div>
                    </Tabs>
                </div>
                <div className="services col-md-2">
                    <Accoridon items={AccordionItems}/>
                </div>
            </div>
        )
    }

}

export default TargetAnalyzer;
