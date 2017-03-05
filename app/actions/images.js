import * as types from './types';
import Api from '../lib/api';
import * as config from '../config';

export function fetchImages(tag) {
    return (dispatch, getState) => {
        return Api.get(`${config.CDNCloudName}/image/list/${encodeURIComponent(tag)}.json`)
            .then((response) => {
                dispatch(setSearchedImages({ images: response.resources }));
            })
            .catch((ex) => {
                //NOTE: when Cloudinary CDN did not find any items using the given tag for the research
                //it returns a 404 error and a message saying 'Resource not found - No resources found for type list nosuchtag'
                //into a header proeprty called 'x-cld-error'. That's why we need to do this kind of validation into the catch
                const noItemsHeader = ex.headers.map['x-cld-error'];
                if (noItemsHeader && noItemsHeader.length) {
                    //TODO: research and improve this
                    dispatch(setSearchedImages({ images: [] }));
                }
                else {
                    throw ex;
                }
            });
    }
}

export function setSearchedImages({ images }) {
    return {
        type: types.SET_SEARCHED_IMAGES,
        images
    };
}