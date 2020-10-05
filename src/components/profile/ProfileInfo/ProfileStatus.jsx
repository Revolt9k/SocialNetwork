import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={() => {
                        this.activateEditMode()
                    }} className={classes.status}> {this.props.status || "-----"}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={() => {
                        this.deactivateEditMode()
                    }} value={this.state.status} className={classes.input}/>
                </div>
            }
        </div>
    }

}
export default ProfileStatus