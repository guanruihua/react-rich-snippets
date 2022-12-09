import React from "react"
import { RowState } from "./type"
import styles from './preview.module.less'

export interface ReviewProps {
	show: RowState[]
	[key: string]: any
}

function handleShow(show: RowState[]) {
	return show.map(item => {
		const { value = '' } = item
		return `<pre style='margin:0;padding:0;'>${value}</pre>`
	}).join('')
}

export function Review(props: ReviewProps) {
	const { show = [] } = props

	return <div
		className={styles['preview']}
		dangerouslySetInnerHTML={{ __html: handleShow(show) }}
	/>
}
