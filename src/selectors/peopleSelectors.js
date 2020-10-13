import {createSelector} from "reselect";

export const getPeopleSelector = (state) => {
    return state.peoplePage.peopleList
}

export const getPeople = createSelector(getPeopleSelector, (people) => {
    return people.filter(people => true)
})

export const getPageSize = (state) => {
    return state.peoplePage.pageSize
}

export const getTotalUserCount = (state) => {
    return state.peoplePage.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.peoplePage.currentPage
}

export const getIsFetchingStatus = (state) => {
    return state.peoplePage.isFetching
}

export const getFollowingInProgressStatus = (state) => {
    return state.peoplePage.followingInProgress
}


