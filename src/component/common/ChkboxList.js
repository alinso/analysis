import React from 'react';


class Chkboxlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        props.values.map((v) => {
            this.state[v.id] = false
        });
    }

    onChange(key, value) {
        this.setState({ [key]: value }, (state) => {
            this.props.onChange(this.state);
            this.colorChecked();
        })
    }

    colorChecked(){
        for (var key in this.state) {
            if(this.state[key]){
              document.getElementById("checkbox"+key).style.backgroundColor="red";
            }else{
                document.getElementById("checkbox"+key).style.backgroundColor="white";
            }
        }
    }

    render() {
        return (
            <div className="list-group-item form-group">
                {this.props.values.map((value, i) => (
                    <div className="checkboxdiv" id={"checkbox"+i} key={i}>
                        <label>
                            <input
                                onChange={(e) => this.onChange(value.id, e.target.checked)}
                                type='checkbox' className={"checkbox"}
                                value={this.state[value.id]}
                            />
                            {value.label}
                        </label>
                    </div>
                ))}
            </div>
        )
    }
}

export default Chkboxlist;