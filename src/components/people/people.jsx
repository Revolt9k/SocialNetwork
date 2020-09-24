import React from "react";
import classes from './people.module.css';
import userDeafaultAva from "../../../src/assets/images/noava.jpg"
import Loader from "../../assets/common/loader";
import {NavLink} from "react-router-dom";

const People = (props) => {

        let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={classes.content}>

            <div className={classes.row + " " + "row"}>
                <div className={classes.col + " " + 'col-xs-2'}>
                    <div className={classes.pagetext}>Page:</div>
                    <div>
                    {pages.map(page => {
                        return <button className={(props.currentPage === page && classes.selectButton) + " " + classes.pageButton} onClick={() => {props.changePage(page)}}> {page} </button>
                    })}
                    </div>
                </div>
                <div className={classes.col + " " + 'col-xs-10'}>

                    {props.isFetching === true ? <Loader isFetching /> : null}


                    {props.peopleList.map((user) => <div key={user.id}>
                        <div className={classes.container}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                <img className={classes.avaImg}
                                     src={user.photos.small != null ? user.photos.small : userDeafaultAva} alt=""/>
                                </NavLink>
                                <div>
                                    {user.followed ?
                                        <button className={classes.buttons + " " + classes.unfollowButton}
                                                onClick={() => {
                                                    props.unfollow(user.id)
                                                }}> unfollow </button> :
                                        <button className={classes.buttons + " " + classes.followButton}
                                                onClick={() => {
                                                    props.follow(user.id)
                                                }}> follow </button>}
                                </div>
                            </div>
                            <div className={classes.info}>
                                <div>
                                    <div className={classes.fullName}> {user.name}</div>
                                    <div className={classes.status}>Status: {user.status}</div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    }

export default People