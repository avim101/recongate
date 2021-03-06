import * as React from 'react';
import { IProfileImage, ProfileImage } from './components/ProfileImage/ProfileImage';
import './App.css';
import PlainTextContentEditable from './components/PlainTextContentEditable/PlainTextContentEditable';

interface IAppState {
    profileImages: Array<IProfileImage>;
}

class App extends React.PureComponent<{}, IAppState> {

    public state: IAppState = {
        profileImages: [
            {
                id: 1,
                userName: 'avi',
                size: 'l',
                imageSrc: './profile.jpg'
            },
            {
                id: 2,
                userName: 'avi',
                size: 'l',
            },
            {
                id: 3,
                userName: 'avi',
                size: 'm',
                imageSrc: './profile.jpg'
            },
            {
                id: 4,
                userName: 'avi',
                size: 'm',
            },
            {
                id: 5,
                userName: 'avi',
                size: 's',
                imageSrc: './profile.jpg'
            },
            {
                id: 6,
                userName: 'shahaf',
                size: 's',
            }
        ]
    };

    render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        Recongate Front End Challenge
                        <br/>
                        <br/>
                        Avi Maslati
                    </h1>
                </header>
                <div className="center-content">
                    {this.state.profileImages.map((profileImage: IProfileImage) => (
                        <ProfileImage {...profileImage} key={profileImage.id}/>
                    ))}
                </div>
                <div className="center-content">
                    <PlainTextContentEditable minRows={15} maxRows={15} style={{width: '500px'}}/>
                </div>
            </div>
        );
    }
}

export default App;