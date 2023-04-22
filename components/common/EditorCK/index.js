// NPM and doc: https://www.npmjs.com/package/ckeditor4-react
import { CKEditor } from 'ckeditor4-react';

const defaultConfig = {
    toolbarGroups: [
        { name: 'paragraph', groups: ['list'] },
        { name: 'links', groups: ['links'] },
        { name: 'styles', groups: ['styles'] },
    ],
    extraPlugins: ["editorplaceholder"],
    format_tags: "p;h3",
    format_h3: { element: 'h3', attributes: { 'class': 'your-class-name' } },
    removeButtons: 'Styles,Underline,Subscript,Superscript,Unlink,Anchor',
    uiColor: '#e8e8ef',
    editorplaceholder: 'Type details',
    contentsCss: ["/ckeditor-content-style.css"]// used to override iframe style
};


const EditorCK = (props) => {
    let ckEditor;
    const { config, error } = props;
    const getEditorData = () => {
        if (!ckEditor) return;
        console.log(ckEditor.getData())
    }
    return (
        <>
            <CKEditor
                initData={props.value ? props.value : undefined}
                config={config || defaultConfig}
                onFocus={({ editor }) => {
                    ckEditor = editor
                }}
                onChange={({ event, editor }) => console.log(editor)}
            />
            {
                error && <span className="error" style={{ paddingLeft: 0 }}>{error}</span>
            }
        </>
    );
}
export default EditorCK;