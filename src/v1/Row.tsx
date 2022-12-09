/* eslint-disable*/
import React, { useState, ChangeEvent, useRef } from "react"
import styles from './row.module.less'

export interface RowProps {

	[key: string]: any
}

export function Row(props: RowProps) {
	const { onChange, value = '' } = props
	const [replicatedValue, setReplicatedValue] = useState<string>(value)
	const [tempValue, setTempValue] = useState<string>(value)





	return <div className={styles['rich-text-row']}>
		<div
			className={styles['rich-text-row-text']}
		// data-replicated-value={replicatedValue}
		>
			<div
				className="content"
				suppressContentEditableWarning
				style={{
					width: '100%',
					outline: 'none',
					userSelect: 'text',
					whiteSpace: 'pre-wrap',
					overflowWrap: 'anywhere',
				}}
				role={'textbox'}
				spellCheck={true}
				contentEditable={true}
				// onBlur={() => {
				// 	setTempValue(value)
				// }}
				onInput={(e: any) => {
					// console.log(e.currentTarget.textContent)
					const newValue = e.currentTarget.textContent
					// console.log(value, newValue)
					console.log(newValue)
					// setReplicatedValue(newValue || '')
					onChange && onChange(newValue)
				}}
			>{tempValue}</div>
			{/* <textarea
				value={value}
				onInput={function (e: ChangeEvent<HTMLTextAreaElement>) {
					const newValue = e.target.value
					setReplicatedValue(newValue || '')
					onChange && onChange(newValue)
				}}
			/> */}
		</div>
		{/* <div className={styles['rich-text-row-control']}>
			<button>bold</button>
		</div> */}
	</div >
}
