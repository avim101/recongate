import * as React from 'react';

interface IProfileImageProps {
    imageSrc?: string;
    userName: string;
    size: string:s | string:m| l;
    onClick?(): React.SyntheticEvent<HTMLImageElement>;
}


interface IProfileImageState {

}

class ProfileImage extends React.PureComponent<IProfileImageProps, IProfileImageState> {
  render() {
    return (
      ''
    );
  }
}

export default ProfileImage;
