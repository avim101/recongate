import * as React from 'react';
import { ProfileImageSize } from '../ProfileImage';
import './ImageNotAvailable.css';

interface IimageNotAvailable {
    size: string;
    active: boolean;
    className?: string;

    onClick?(e: React.SyntheticEvent<HTMLSpanElement>): void;
}

enum FontSize {
    s = '.6em',
    m = '.9em',
    l = '1.2em'
}

const ImageNotAvailable: React.StatelessComponent<IimageNotAvailable> = (props: IimageNotAvailable) => {

    return (
        <div
            className={'ImageNotAvailable ' + ' ' + props.className + ' ' + (props.active === true ? 'active' : '')}
            style={{
                width:  ProfileImageSize[props.size],
                height: ProfileImageSize[props.size],
                fontSize: FontSize[props.size]
            }}
            onClick={props.onClick}
        >
            Not Available
        </div>
    );
};

ImageNotAvailable.defaultProps = {
    className: ''
};

export default ImageNotAvailable;