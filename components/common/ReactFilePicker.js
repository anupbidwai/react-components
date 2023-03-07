/**
https://www.npmjs.com/package/react-file-picker
*/

// import { FilePicker } from 'react-file-picker';
import dynamic from "next/dynamic";

const FilePicker = dynamic(
    () => {
        return import("react-file-picker")
            .then((mod) => mod.FilePicker);
    }, { ssr: false }
);

const ReactFilePicker = (props) => {
    const {
        error,
        value,
        isIconVisible = true,
        label = "+add image",
        isChangeBtnShow = true,
        imageIndex
    } = props;

    const handleOnChange = async (FileObject) => {
        await props.onChange({
            target: {
                value: FileObject,
                name: props.name ? props.name : 'images',
                type: 'file',
                index : imageIndex
            }
        })
    }

    // clear
    const handleClear = (e) => {
        e.stopPropagation();
        if(imageIndex !== undefined){
            props.handleClearFileInput(props.name, imageIndex)
        } else {
            props.handleClearFileInput(props.name)
        }
        
    };

    const handleError = (errMsg) => {
        console.log("errMsg ==> ", errMsg)
        if (props.handleError) {
            props.handleError({
                target: {
                    name: props.name ? props.name : 'images',
                    type: 'file',
                    error: errMsg
                }
            })
        }
    }


    return (
        <div className="file-picker">
            <FilePicker
                extensions={['jpg', 'jpeg', 'png', 'gif', 'webp']}
                onChange={FileObject => handleOnChange(FileObject)}
                onError={errMsg => handleError(errMsg)}
                maxSize={5}
            >
                <div className='file-picker__trigger'>
                    {/* if image selected */}
                    {value ?
                        <>
                            <div className="thumbnail-wrapper" >
                                {isChangeBtnShow && <button type="button" className="btn-edit">change picture</button>}
                                <img src={value.trim() || "/images/img-detail-dummy-thumbnail.png"} onClick={(e) => e.stopPropagation()} />
                            </div>
                            <button className="btn-clear" onClick={handleClear}>
                                <img src="/images/icon-close.svg" alt="clear" widt="20" height="20" />
                            </button>
                        </>
                        :
                        <>
                            {isIconVisible && <img src="/images/icon-img.svg" alt="img" width="40" height="40" />}
                            {label && <button className="blue-link">{label}</button>}
                        </>
                    }
                </div>
            </FilePicker >
            {error && <span className="error">{error}</span>}
        </div>
    )
}
export default ReactFilePicker;