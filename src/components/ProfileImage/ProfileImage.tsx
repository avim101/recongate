import * as React from 'react';
import isFunction from 'lodash/isFunction';
import ReactTooltip from 'react-tooltip';
import Img from '../Img/Img';
import ImageNotAvailable from './ImageNotAvailable/ImageNotAvailable';
import './ProfileImage.css';

export interface IProfileImage {
    imageSrc?: string;
    userName: string;
    size: string;
    id: number;

    onClick?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

interface IProfileImageState {
    active: boolean;
}

export enum ProfileImageSize {
    s = 50,
    m = 80,
    l = 110
}

export class ProfileImage extends React.PureComponent<IProfileImage, IProfileImageState> {

    public static defaultProps: Partial<IProfileImage> = {
        imageSrc: '',
    };

    public state: IProfileImageState = {
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

    render(): JSX.Element {
        return (
            <React.Fragment>
                <a data-for="userName" data-tip={this.props.userName}>
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
                </a>
                <ReactTooltip place="bottom" type="dark" effect="solid" id="userName"/>
            </React.Fragment>
        );
    }
}
