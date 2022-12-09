/* eslint-disable*/
import React from "react"
import { RichText, useRichText } from '..'

export default function RichTextPage() {

	const [show, showArray, action] = useRichText([{
		index: 0,
		value: `  Nowadays it is common to see that many parents focus their attention on their children, but leave their own parents without proper care. The most typical example is the phenomenon of empty nest seniors. This problem has aroused the public concern and has become the hot topic of many discussions.

Paying little attention to older parents can have serious consequences. First, the elderly often feel lonely and depressed if there is no child with whom they can talk, and this can have a bad effect on their mental health. Second, the aged parents with no children by their sides can have a lot of trouble in their daily life due to disease or old age.

In my opinion, we should take the following measures. Children should be encouraged to live with or near their old parents, which is very helpful for them to know their parents, concern and attend their daily life. And it is also necessary for them to create chances to communicate with their aged parents. Besides, our govemmeiit should strive to establish the service system for the elderly and expand its social insurance coverage among them.`
	}])

	return <div
		style={{
			// display: 'grid',
			// gridTemplateColumns: '1fr 1fr'
		}}>
		{/* <RichText.Review show={show} /> */}
		<RichText rows={showArray} action={action} />
	</div>
}