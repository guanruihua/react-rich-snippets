import { useState } from 'react'
import type { RowState } from './type'


export function useRichText(values: RowState[] = []):
	[RowState[], RowState[], Record<string, any>] {
	const [show, setShow] = useState<RowState[]>(values)
	const [showArray, setShowArray] = useState<RowState[]>(values)

	const updateShowValue = () => {
		// setShow(showArray.map(item => <div>{`${item.value}`}</div>).join('\n'))
		setShow(showArray)
	}

	const addRow = () => {
		setShowArray(showArray.concat({ index: showArray.length, value: '' }))
		updateShowValue()
	}
	const updateIndexRow = (value: string, index = 0) => {
		const newShowArray = [...showArray]
		newShowArray[index].value = value
		setShowArray(newShowArray)
		updateShowValue()
	}

	return [
		show,
		showArray,
		{
			updateIndexRow,
			addRow,
			setShow,
			setShowArray
		}]
}