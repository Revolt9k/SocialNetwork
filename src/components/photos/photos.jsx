import React from "react";
import classes from './photos.module.css';

const photos = (props) => {


    let addPhotoREF = React.createRef()

    let localAddPhoto = () => {
        props.localAddPhoto()
    }

    let onURLchange = () => {
        let newUrl = addPhotoREF.current.value
        props.onChange(newUrl)
    }


    return <div className={classes.content}>
        <div className={classes.row + " row"}>
            <div className={classes.col + ' col-xs-1'}>
            </div>
            <div className={classes.col + ' col-xs-10'}>
                <div className={classes.album}>
                    {props.photosList.map((photo) => <div key={photo.id} className={classes.photo}>
                        <img className={classes.photoIMG} src={photo.photoURL} alt={photo.photoALT}/>
                        {/*<div className={classes.description}> {photo.description} </div>*/}
                    </div>)}
                </div>

            </div>
            <div className={classes.col + ' col-xs-1'}>
            </div>

        </div>
        <div className={classes.row + " row"}>
            <div className={classes.col + ' col-xs-1'}>
            </div>
            <div className={classes.col + ' col-xs-10'}>
                <div className={classes.addText}>
                    Add more photos!
                </div>
                <div className={classes.addArea}>
                    <textarea onChange={onURLchange} placeholder="enter photo URL" className={classes.textarea}
                              ref={addPhotoREF} value={props.newPhotoURL} />
                    <button onClick={localAddPhoto} className={classes.addButton}> add photo</button>
                </div>
            </div>
            <div className={classes.col + ' col-xs-1'}>
            </div>
        </div>
    </div>

}


export default photos