import { type } from 'abandonjs'

type ClassNameBaseUnit = Record<string, any> | string | undefined | null | number | boolean

export type ClassNameUnit = ClassNameBaseUnit | ClassNameBaseUnit[]

export function classNames(...rest: ClassNameUnit[]): string {

	const resultSet = new Set<string | number>()
	const choicesMap: Record<string, boolean> = {}

	function checkValid(itemFlag: boolean, key: string) {
		if (itemFlag === false && resultSet.has(key)) {
			resultSet.delete(key)
		}
		if (itemFlag === true && !resultSet.has(key)) {
			resultSet.add(key)
		}
	}

	function forEachData(list: ClassNameUnit[]) {
		list.forEach(item => {

			if (!item) return

			if (Array.isArray(item)) return forEachData(item)

			if (typeof item === 'string' || typeof item === 'number') {
				resultSet.add(item)
				return
			}

			if (type(item) === 'Object') {
				for (const key in item as Record<string, any>) {
					const itemFlag = !!(item as unknown as Record<string, any>)[key]
					choicesMap[key] = itemFlag
					checkValid(itemFlag, key)
				}
				return
			}
		})
	}

	forEachData(rest)


	// for (const key in choicesMap as Record<string, any>) {
	// 	checkValid(choicesMap[key], key)
	// }

	return [...resultSet].join(' ')
}
