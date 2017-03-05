import * as config from '../config';

export function resolveImageUrl(imageData, width) {
    const image = `${imageData.public_id}.${imageData.format}`;
    if (width) {
        return `https://res.cloudinary.com/${config.CDNCloudName}/image/upload/c_scale,w_${width}/${image}`;
    }
    else {
        return `https://res.cloudinary.com/${config.CDNCloudName}/image/upload/${image}`;
    }
}