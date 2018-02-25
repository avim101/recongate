import * as React from 'react';
import './PlainTextContentEditable.css';
import isFunction from 'lodash/isFunction';
import clone from 'lodash/clone';

interface IPlainTextContentEditable {
    contentEditable?: boolean;
    className?: string;
    placeholder?: string;
    style?: object;
    minRows: number;
    maxRows: number;
    onChange?: (e: React.SyntheticEvent<HTMLDivElement>, value: string) => void;
}

interface IPlainTextContentEditableState {
    text: string;
}

class PlainTextContentEditable extends React.PureComponent<IPlainTextContentEditable, IPlainTextContentEditableState> {

    public static defaultProps: Partial<IPlainTextContentEditable> = {
        contentEditable: true,
        className: '',
        placeholder: 'start typing',
        style: {}
    };

    public state: IPlainTextContentEditableState = {
        text: ''
    };

    getText(element: HTMLDivElement): string {
        return element.innerText;
    }

    validate(element: HTMLDivElement): boolean {
        return true;
    }

    textChanged(e: React.SyntheticEvent<HTMLDivElement>, element: HTMLDivElement): void {
        const text = clone(this.getText(element));
        this.setState({text: text});
        if (isFunction(this.props.onChange)) {
            this.props.onChange(e, text);
        }
    }

    onTextChange = (e: React.SyntheticEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        const element = e.target as HTMLDivElement;
        const isValid = this.validate(element);
        if (isValid) {
            this.textChanged(e, element);
        }

    }

    onPaste(e: React.ClipboardEvent<HTMLDivElement>): void {
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        document.execCommand('insertText', false, text);
    }

    getClassName(): string {
        const placeholder = this.state.text === '' ? 'PlainTextContentEditable-has-placeholder' : '';
        return `PlainTextContentEditable ${placeholder} ${this.props.className}`;
    }

    render(): JSX.Element {
        return (
            <div
                contentEditable={this.props.contentEditable}
                style={this.props.style}
                className={this.getClassName()}
                onPaste={this.onPaste}
                onInput={this.onTextChange}
                data-placeholder={this.props.placeholder}
                data-content={this.state.text}
            />
        );
    }
}

export default PlainTextContentEditable;