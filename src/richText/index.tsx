/* eslint-disable*/
import React, { useEffect, useState } from "react"
import styles from './index.module.less'

// interface RichTextProps {
// 	[key: string]: any
// }

function bold() {
	document.execCommand('StyleWithCSS', true)
	document.execCommand('Bold', false)
}


/**
 * 添加下划线
 */
addUnderline = () => {
  this.replaceSelectedStrByEle(styles['custom-underline'])
}

/**
 * 启用荧光笔
 */
enableNiteWriterPen = () => {
  this.replaceSelectedStrByEle(styles['nite-writer-pen'])
}

/**
 * 用元素替换被选中的文本
 */
replaceSelectedStrByEle = (className) => {
  var getRange = () => {
    var me = window;
    var range = new Range(me.document);

    var sel = window.getSelection();
    if (sel && sel.rangeCount) {
      var firstRange = sel.getRangeAt(0);
      var lastRange = sel.getRangeAt(sel.rangeCount - 1);
      range.setStart(firstRange.startContainer, firstRange.startOffset)
        .setEnd(lastRange.endContainer, lastRange.endOffset);
    }
    return range
  }
  var range = getRange();
  range.applyInlineStyle('i', {
    class: className
  });
  range.select();
}



export function RichText() {

	const [selection, setSelection] = useState<any>({})

	function addP() {
		setSelection(document.getSelection())
		// const selection = document.getSelection() || {}
		// const { } = selection
		console.log(selection)
	}

	useEffect(() => {
		// window.addEventListener("load", () =>
		// 	(frames as any)["editor"].document.designMode = "on";
		// });
		document.execCommand('StyleWithCSS', true)
		document.execCommand('Bold', true)

	}, [])
	return <div>
		<button onClick={() => { bold() }}>bold</button>
		<button onClick={() => { addP() }}>add p</button>
		<div
			className={styles['rt-container']}
			contentEditable={true}
		>
		</div>
	</div>
}
