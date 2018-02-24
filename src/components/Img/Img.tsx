import * as React from 'react';

interface Iimg {
    alt?: string;
    height?: number;
    width?: number;
    src: string | null;
    className?: string;

    onClick?(e: React.SyntheticEvent<HTMLImageElement>): void;
}

const Img: React.StatelessComponent<Iimg> = (props: Iimg) => {

    const src = props.src || `http://via.placeholder.com/${props.width}x${props.width}`;

    return (
        <img
            className={props.className}
            src={src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
        />
    );
};

Img.defaultProps = {
    alt: 'image',
    height: 65,
    width: 65,
    className: ''
};

export default Img;
