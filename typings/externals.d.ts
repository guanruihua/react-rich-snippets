// TypeScript users only add this code
// import { BaseEditor } from 'slate'
// import { ReactEditor } from 'slate-react'

// type CustomElement = { type: 'paragraph'; children: CustomText[] }
// type CustomText = { text: string }

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }
declare module 'is-hotkey'
declare module '*.less' {
	const resource: { [key: string]: string };
	export = resource;
}

declare module '*.module.less' {
	const resource: { [key: string]: string };
	export = resource;
}

