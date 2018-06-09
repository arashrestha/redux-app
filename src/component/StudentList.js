import React, { Component } from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {selectStudent} from '../action/StudentAction'

class StudentList extends Component {
    render() {
        return (
            <div>
                <table border="1">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.lists.map(pist => {
                            return(
                                <tr key={pist.id}>
                                <td>{pist.id}</td>
                         
                                <td onClick={()=>this.props.handleclick(pist)}>{pist.name}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>

                </table>
                <br/>
                <b>selected student is:{this.props.selected.name}</b>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return({
        lists:state.students,
        selected:state.selected
    })
}

function mapDispatchToProps(dispatch){
    	return bindActionCreators({
    		handleclick:selectStudent
    	},dispatch)
}




export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
