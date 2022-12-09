/* eslint-disable*/
import styles from './index.module.less'

export function bold() {
	document.execCommand('StyleWithCSS', true)
	document.execCommand('Bold', false)
}

export function replaceSelectedStrByEle(className: string) {

	// const selecter: any = window.getSelection()
	// const selectStr = selecter.toString()

	// if (selectStr.trim != "") {
	// 	const rang = selecter.getRangeAt(0)
	// 	const ele = document.createElement("i")
	// 	ele.className = className
	// 	ele.textContent = selectStr
	// 	rang.surroundContents(ele)
	// }
	const getRange = () => {
		const me = window;
		// const range = new Range(me.document);
		const range: any = new Range();

		const sel = window.getSelection();
		if (sel && sel.rangeCount) {
			const firstRange = sel.getRangeAt(0);
			const lastRange = sel.getRangeAt(sel.rangeCount - 1);
			range.setStart(firstRange.startContainer, firstRange.startOffset)
			range.setEnd(lastRange.endContainer, lastRange.endOffset)
		}
		return range
	}
	const range = getRange();
	range.applyInlineStyle('i', { class: className });
	range.select();
}

export function addStyle() {
	/**
	* 用元素替换被选中的文本
	*/
	replaceSelectedStrByEle(styles['nite-writer-pen']);
}

// /**
//  * 添加下划线
//  */
// addUnderline = () => {
//   this.replaceSelectedStrByEle(styles['custom-underline'])
// }

// /**
//  * 启用荧光笔
//  */
// enableNiteWriterPen = () => {
//   this.replaceSelectedStrByEle(styles['nite-writer-pen'])
// }

// /**
//  * 用元素替换被选中的文本
//  */
// https://blog.csdn.net/hefeng6500/article/details/94474303
// const replaceSelectedStrByEle = (className:string) => {
//   var getRange = () => {
//     var me:any = window;
//     var range = new Range(me.document);

//     var sel = window.getSelection();
//     if (sel && sel.rangeCount) {
//       var firstRange = sel.getRangeAt(0);
//       var lastRange = sel.getRangeAt(sel.rangeCount - 1);
//       range.setStart(firstRange.startContainer, firstRange.startOffset)
//         .setEnd(lastRange.endContainer, lastRange.endOffset);
//     }
//     return range
//   }
//   var range = getRange();
//   range.applyInlineStyle('i', {
//     class: className
//   });
//   range.select();
// }