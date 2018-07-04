import React from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import BreadCrumb from '../../components/breadCrumb/breadCrumb.jsx'

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import './about.scss'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
       editorState: EditorState.createEmpty(),
       data: {
         list: [{url:'/', menuName:'首页', icon:''}, {url:'', menuName:'about', icon:''}],
         btn: {addUrl:'/', btnName: '返回', icon:'left'}
       }
     }
  }
  handleChange = (content) => {
    console.log(content)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }
  handleHtmlChange = (val) => {
    console.log(val);
  }
  onEditorStateChange = (value) => {
    console.log(this.state.editorState);
  }

  render() {
    const { editorState } = this.state;

    const editorProps = {
     height: 200,
     contentFormat: 'raw',
     placeholder: 'Hello World!',
     initialContent: '',
     onChange: this.handleChange,
     onHTMLChange: this.handleHtmlChange,
     onRawChange: this.handleRawChange
   }
    return (
      <section >
        <BreadCrumb   {...this.state.data} />
        <div className='about'>
           <BraftEditor {...editorProps} />
        </div>

        {/* <Editor
            editorState={editorState}
            localization={{ locale: 'zh' }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          /> */}
      </section>
    )
  }
}

export default About;
