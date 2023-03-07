import { useState } from 'react';
import Link from 'next/link';
import Select, { components } from 'react-select';

//custom styles
const customStyles = {
    input: (provided, state) => ({
        ...provided,
        fontSize: 14,
        lineHeight: '16px',
        fontWeight: 500,
        color: '#161632'
    })
}

//custom input
const Control = ({ children, ...props }) => (
    <components.Control {...props}>
        <img src="/images/icon-search.svg" alt="icon" width="24" height="24" style={{ marginLeft: 24 }} /> {children}
    </components.Control>
);


// customGroup label
const formatGroupLabel = (data) => (
    <span className='category-label'>{data.label}</span>
);

// custom options list
const CustomOption = ({ innerProps, isDisabled, data }) => (
    !isDisabled ? (
        <div {...innerProps}>
            <ul className='category-list'>
                <li>
                    <Link href={data.href}>
                        <a>
                            <div className="category-list__item-logo">
                                <img src={data.logo} width="32" height="32" />
                                {data.isVerified && <img src="/images/icon-checked-circle-blue.svg" alt="" className='icon-verified' width="10" height="10" />}
                            </div>
                            <div className="category-list__item-name">
                                <span>{data.label}</span>
                                {data.subLabel && <span className="sub-label">{data.subLabel}</span>}
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    ) : null
)

const NoOptionsMessage = props => {
    console.log(props.selectProps.noOptionMessage)
    if (props.selectProps && props.selectProps.serverSideLoading === true) {
        return (
            <components.NoOptionsMessage {...props} >
                Loading...
            </components.NoOptionsMessage>
        );
    } else {
        return (
            <components.NoOptionsMessage {...props} >
                {props.selectProps && props.selectProps.noOptionMessage ? props.selectProps.noOptionMessage : 'No data found in search'}
            </components.NoOptionsMessage>
        );
    }
};

const ReactSelect = (props) => {

    const [serverSideLoading, setServerSideLoading] = useState(false);
    const [timeInterval, setTimeInterval] = useState(null);

    const handleInputChange = (value) => {

        if (!serverSideLoading && value.length > 2) {
            setServerSideLoading(true);
            if (timeInterval) {
                clearTimeout(timeInterval);
                setTimeInterval(null);
            }
            let newTimeInterval = setTimeout(() => {
                setServerSideLoading(false);
            }, 3000);
            setTimeInterval(newTimeInterval);
        }

        props.handleInputChange({
            target: {
                name: props.name,
                value: value,
                type: 'select',
            }
        });
    }
    const handleOnKeyDown = (e) => {
        if (e.keyCode == 13) {
            props.handleEnterKeyPressed()
        }
    }

    return (
        <div className="react-select-wrapper">
            <Select
                styles={customStyles}
                options={props.options}
                placeholder={'Items, collections and users'}
                components={{
                    Control,
                    Option: CustomOption,
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => null,
                    NoOptionsMessage
                }}
                formatGroupLabel={formatGroupLabel}
                instanceId={props.instanceId ? pros.instanceId : 'onXRPSearch'}
                className="react-select-container"
                classNamePrefix="react-select"
                onInputChange={handleInputChange}
                onKeyDown={handleOnKeyDown}
                serverSideLoading={serverSideLoading}
                noOptionMessage={props.noOptionMessage ? props.noOptionMessage : null}
            //menuIsOpen={true}
            />
        </div>
    )
};
export default ReactSelect;