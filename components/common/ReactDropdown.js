import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const defaultOptions = [
    {
        title: 'US'
    },
    {
        title: 'FR'
    }
];

const ReactDropdown = (props) => {
    const { options = defaultOptions } = props;
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(options[0].title)

    let dropdownItems = options.map((item) => {
        return <Dropdown.Item as="button" key={item.title} onClick={() => setTitle(item.title)}>{item.title}</Dropdown.Item>
    });

    return (
        <div className='react-dropdown'>
            <DropdownButton
                title={title}
                // show={show}
                onToggle={() => console.log('toggled')}
            >
                {dropdownItems}
            </DropdownButton>
        </div>
    )
};
export default ReactDropdown;