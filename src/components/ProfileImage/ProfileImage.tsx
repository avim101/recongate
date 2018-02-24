import * as React from 'react';
import isFunction from 'lodash/isFunction';
import Img from '../Img/Img';
import ImageNotAvailable from './ImageNotAvailable/ImageNotAvailable';
import './ProfileImage.css';

export interface IprofileImage {
    imageSrc?: string;
    userName: string;
    size: string;
    id: number;

    onClick?(e: React.SyntheticEvent<HTMLElement>): void;
}

interface IprofileImageState {
    active: boolean;
}

export enum ProfileImageSize {
    s = 50,
    m = 80,
    l = 110
}

export class ProfileImage extends React.PureComponent<IprofileImage, IprofileImageState> {

    public state: IprofileImageState = {
        active: false
    };

    setActive = (val: boolean): void => {
        this.setState({active: val});
    }

    handleImgClick = (e: React.SyntheticEvent<HTMLElement>): void => {
        this.setActive(!this.state.active);
        if (isFunction(this.props.onClick)) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <React.Fragment>
                {!!this.props.imageSrc ?
                    (
                        <Img
                            key={this.props.id}
                            className={'ProfileImage ' + (this.state.active === true ? 'active' : '')}
                            src={this.props.imageSrc}
                            width={ProfileImageSize[this.props.size] - 5}
                            height={ProfileImageSize[this.props.size] - 5}
                            onClick={(e) => this.handleImgClick(e)}
                        />
                    )
                    :
                    (
                        <ImageNotAvailable
                            key={this.props.id}
                            size={this.props.size}
                            active={this.state.active}
                            onClick={(e) => this.handleImgClick(e)}
                        />
                    )
                }
            </React.Fragment>
        );
    }
}