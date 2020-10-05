const ADD_PHOTO = 'addPhoto';
const CHANGE_URL = 'changeURL';

let initialState = {
    photosList: [
        {id: 1, photoURL: "https://st4.depositphotos.com/19492104/24042/i/950/depositphotos_240425890-stock-photo-banff-alberta-canada-jan-2019.jpg", photoALT: "some alt", description:"some decription",},
        {id: 2, photoURL: "https://img5.goodfon.ru/original/1920x1200/3/29/priroda-ozero-peizazh-gornye-vershiny-gory.jpg", photoALT: "some alt", description:"some decription",},
        {id: 3, photoURL: "https://theecology.net/wp-content/uploads/2019/05/post_5cc900742b1c5.jpg", photoALT: "some alt", description:"some decription",},
        {id: 4, photoURL: "https://i.artfile.ru/2880x1800_917966_[www.ArtFile.ru].jpg", photoALT: "some alt", description:"some decription",},
        {id: 5, photoURL: "https://w-dog.ru/wallpapers/10/10/424576727855578/kizhi-kareliya-rossiya.jpg", photoALT: "some alt", description:"some decription",},
        {id: 6, photoURL: "https://images.wallpaperscraft.ru/image/gory_ozer_domiki_bereg_les_hvoynyy_cveta_kraski_otrazhenie_dno_nebo_peyzazh_61587_2048x1152.jpg", photoALT: "some alt", description:"some decription",},
    ],
    newPhotoURL: ""
}

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_PHOTO: {
            if((state.newPhotoURL != false)&&(state.newPhotoURL != undefined)) {
                let newPhoto = {
                    id: "newID",
                    photoURL: state.newPhotoURL,
                    photoALT: "",
                    description: "new description"

                }
                return {
                    ...state,
                    photosList: [...state.photosList, newPhoto],
                    newPhotoURL: "",
                }
            } else {
                alert("enter any URL")
                return state
            }

        }
        case CHANGE_URL: {
            return {
                ...state,
                newPhotoURL: action.newUrl,
            }
        }
        default :
            return state;
    }
}
export const changeURL = (newUrl) => ({type: CHANGE_URL, newUrl})

export const addPhoto = () => ({type: ADD_PHOTO})

export default photosReducer