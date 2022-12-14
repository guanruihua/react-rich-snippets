/* eslint-disable*/
import React from 'react'
import Draft, { Editor, EditorState, CompositeDecorator, convertFromRaw, convertToRaw } from 'draft-js'
import 'draft-js/dist/Draft.css'
import Immutable from 'immutable';

// const rawContent = {
// 	blocks: [
// 		{
// 			text: (
// 				'This is an "immutable" entity: Superman. Deleting any ' +
// 				'characters will delete the entire entity. Adding characters ' +
// 				'will remove the entity from the range.'
// 			),
// 			type: 'unstyled',
// 			entityRanges: [{ offset: 31, length: 8, key: 'first' }],
// 		},
// 		{
// 			text: '',
// 			type: 'unstyled',
// 		},
// 		{
// 			text: (
// 				'This is a "mutable" entity: Batman. Characters may be added ' +
// 				'and removed.'
// 			),
// 			type: 'unstyled',
// 			entityRanges: [{ offset: 28, length: 6, key: 'second' }],
// 		},
// 		{
// 			text: '',
// 			type: 'unstyled',
// 		},
// 		{
// 			text: (
// 				'This is a "segmented" entity: Green Lantern. Deleting any ' +
// 				'characters will delete the current "segment" from the range. ' +
// 				'Adding characters will remove the entire entity from the range.'
// 			),
// 			type: 'unstyled',
// 			entityRanges: [{ offset: 30, length: 13, key: 'third' }],
// 		},
// 	],

// 	entityMap: {
// 		first: {
// 			type: 'TOKEN',
// 			mutability: 'IMMUTABLE',
// 		},
// 		second: {
// 			type: 'TOKEN',
// 			mutability: 'MUTABLE',
// 		},
// 		third: {
// 			type: 'TOKEN',
// 			mutability: 'SEGMENTED',
// 		},
// 	},
// };

const rawContent = {
  "entityMap": {
    "0": {
      "type": "image",
      "mutability": "IMMUTABLE",
      "data": {
        "src": "http://ww1.sinaimg.cn/mw690/b22ba716ly1fcxu21947oj20nm0fp7dd",
        "description": "smile_by_bestday-d2xrc2p"
      }
    },
    "1": {
      "type": "link",
      "mutability": "MUTABLE",
      "data": {
        "src": "https://myanbin.github.io/",
        "description": "my blog"
      }
    }
  },
  "blocks": [{
    "key": "fe9gb",
    "text": "Today is a Gift",
    "type": "header-one",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [],
    "data": {}
  }, {
    "key": "5l7ar",
    "text": " ",
    "type": "atomic",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [{
      "offset": 0,
      "length": 1,
      "key": 0
    }],
    "data": {}
  }, {
    "key": "e9m80",
    "text": "Tomorrow is the future. Yesterday was the past; But what is today?",
    "type": "unstyled",
    "depth": 0,
    "inlineStyleRanges": [{
      "offset": 16,
      "length": 8,
      "style": "ITALIC"
    }, {
      "offset": 42,
      "length": 4,
      "style": "ITALIC"
    }],
    "entityRanges": [],
    "data": {}
  }, {
    "key": "f48j1",
    "text": "A GIFT!",
    "type": "unstyled",
    "depth": 0,
    "inlineStyleRanges": [{
      "offset": 2,
      "length": 4,
      "style": "ITALIC"
    }, {
      "offset": 2,
      "length": 4,
      "style": "BOLD"
    }],
    "entityRanges": [],
    "data": {}
  }, {
    "key": "co676",
    "text": "That is why it is called the 'present'",
    "type": "unstyled",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [{
      "offset": 30,
      "length": 7,
      "key": 1
    }],
    "data": {}
  }, {
    "key": "ahodf",
    "text": "Sh.",
    "type": "unordered-list-item",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [],
    "data": {}
  }, {
    "key": "csmcg",
    "text": "Tang.",
    "type": "unordered-list-item",
    "depth": 0,
    "inlineStyleRanges": [],
    "entityRanges": [],
    "data": {}
  }]
}


const styles = {
	root: {
		fontFamily: '\'Helvetica\', sans-serif',
		padding: 20,
		width: 600,
	},
	editor: {
		border: '1px solid #ccc',
		cursor: 'text',
		minHeight: 80,
		padding: 10,
	},
	button: {
		marginTop: 10,
		textAlign: 'center',
	},
	immutable: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		padding: '2px 0',
	},
	mutable: {
		backgroundColor: 'rgba(204, 204, 255, 1.0)',
		padding: '2px 0',
	},
	segmented: {
		backgroundColor: 'rgba(248, 222, 126, 1.0)',
		padding: '2px 0',
	},
};

const blockRenderMap = Immutable.Map({
	'header-two': {
		element: 'h2'
	},
	'unstyled': {
		element: 'h2'
	}
});

function getEntityStrategy(mutability: any) {
	return function (contentBlock: any, callback: any, contentState: any) {
		contentBlock.findEntityRanges(
			(character: any) => {
				const entityKey = character.getEntity();
				if (entityKey === null) {
					return false;
				}
				return contentState.getEntity(entityKey).getMutability() === mutability;
			},
			callback
		);
	};
}

function getDecoratedStyle(mutability: any) {
	switch (mutability) {
		case 'IMMUTABLE': return styles.immutable;
		case 'MUTABLE': return styles.mutable;
		case 'SEGMENTED': return styles.segmented;
		default: return null;
	}
}

const TokenSpan = (props: any) => {
	const style = getDecoratedStyle(
		props.contentState.getEntity(props.entityKey).getMutability()
	);
	return (
		<span
			data-offset-key={props.offsetkey}
			style={style as any} >
			{props.children}
		</span>
	);
};

const decorator = new CompositeDecorator([
	{
		strategy: getEntityStrategy('IMMUTABLE'),
		component: TokenSpan,
	},
	{
		strategy: getEntityStrategy('MUTABLE'),
		component: TokenSpan,
	},
	{
		strategy: getEntityStrategy('SEGMENTED'),
		component: TokenSpan,
	},
]);

const blocks = convertFromRaw(rawContent as any);

export class MyEditor extends React.Component {
	state = {
		// editorState: EditorState.createEmpty()
		editorState: EditorState.createWithContent(blocks, decorator),
	};
	onChange = (editorState: any) => this.setState({ editorState });
	// focus = () => this.refs.editor.focus();
	logState = () => {
		const content = this.state.editorState.getCurrentContent();
		console.log(convertToRaw(content));
	};
	render() {
		return (
			<Editor
				blockRenderMap={Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap)}
				editorState={this.state.editorState}
				onChange={this.onChange} />
		);
	}
}