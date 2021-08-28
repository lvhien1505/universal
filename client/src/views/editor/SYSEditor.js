import React from 'react';

const SYSEditor = ({config}) => {
    return (
        <div id="sys-editor" className="border border-blue-300">
            {config.toolbar.visible ?  <div id="toolbar" className="h-10 border-0 border-b border-blue-300 bg-gray-100"></div> : null}
            <div id="conten-write" className="min-h-0 max-h-full bg-gray-300">
                <div  className="min-h-0 max-h-full py-16">
                    <div className="mx-auto bg-white" style={{height:"1123px",width:"794px"}}>

                    </div>
                </div>
            </div>        
        </div>
    )
}

export default SYSEditor
