/* eslint-disable*/
import React from "react"
import { Row } from './Row'
import { Review } from './Review'
import type { RowState } from "./type"
import styles from './index.module.less'
export * from './useRichText'

export interface RichTextProps {
	rows?: RowState[]
	action: any
	[key: string]: any
}

export function RichText(props: RichTextProps) {
	const { rows = [], action = {} } = props
	return <div>
		<div className={styles['rich-text-control']}>
			<button onClick={() => {



				const selecter: any = window.getSelection()
				const selectStr = selecter.toString()

				// const ele = document.createElement("i")
				// ele.className = 'aaa'
				// ele.textContent = selectStr
				const { startContainer, endContainer, commonAncestorContainer } = selecter.getRangeAt(0)
				const rang = selecter.getRangeAt(0)
				const { nodeName, className, firstChild, lastChild, firstElementChild } = selecter.getRangeAt(0).commonAncestorContainer
				if (nodeName == "DIV" && className === 'content') {
					console.log(firstChild, lastChild)
					// selecter.getRangeAt(0).commonAncestorContainer.firstElementChild = firstElementChild.innerText
					try {
						const ele = document.createTextNode(firstElementChild.innerText)
						rang.surroundContents(ele)
					} catch (error) {

					}
					// rang.surroundContents(firstElementChild.innerText)
					return;
				}
				// selecter.getRangeAt(0).surroundContents(ele);
				// else { //this case when i select from top to bottom with the button
				// selecter.getRangeAt(0).commonAncestorContainer.querySelector("#higlight-this").querySelector("p").getRangeAt(0).surroundContents(ele)
				// }

				if (selectStr.trim != "") {
					const ele = document.createElement("i")
					ele.className = 'aaa'
					ele.textContent = selectStr
					rang.surroundContents(ele)
				}
			}}>h1</button>
			<button onClick={action.addRow}>add Row</button>
		</div>
		<div>
			{rows.map((item, index) => {
				const { value = '' } = item
				return <Row
					key={String(index)}
					value={value}
					onChange={(value: string) => {
						action.updateIndexRow(value, index)
					}}
				/>
			})}
		</div>
	</div>
}

RichText.Row = Row
RichText.Review = Review