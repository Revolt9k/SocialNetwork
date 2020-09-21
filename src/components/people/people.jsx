import React from "react";
import classes from './people.module.css';
import * as axios from 'axios'
import userDeafaultAva from "../../../src/assets/images/noava.jpg"

class People extends React.Component{

    getPeopleList = () => {
        if (this.props.peopleList.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                this.props.setusers(response.data.items)
            });
        }
    }

    render() {
        return <div className={classes.content}>

            <div className={classes.row + " " + "row"}>
                <div className={classes.col + " " + 'col-xs-1'}>
                </div>
                <div className={classes.col + " " + 'col-xs-10'}>

                    {this.props.peopleList.map((user) => <div key={user.id}>
                        <div className={classes.container}>
                            <div>
                                <img className={classes.avaImg}
                                     src={user.photos.small != null ? user.photos.small : userDeafaultAva} alt=""/>
                                <div>
                                    {user.followed ?
                                        <button className={classes.buttons + " " + classes.unfollowButton} onClick={() => {
                                            this.props.unfollow(user.id)
                                        }}> unfollow </button> :
                                        <button className={classes.buttons + " " + classes.followButton} onClick={() => {
                                            this.props.follow(user.id)
                                        }}> follow </button>}
                                </div>
                            </div>
                            <div className={classes.info}>
                                <div>
                                    <div className={classes.fullName}> {user.name}</div>
                                    <div className={classes.status}>Status: {user.status}</div>
                                </div>
                                <div>
                                    {/*<div className={classes.city}>{user.location.city}  </div>*/}
                                    {/*<div className={classes.country}>{user.location.country}  </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>)}
                    <button onClick={this.getPeopleList}> show more</button>
                </div>
                <div className={classes.col + " " + 'col-xs-1'}>
                </div>
            </div>
        </div>
    }
}

export default People