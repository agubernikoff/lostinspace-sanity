import React from 'react'

const HighlightIcon = () => <span style={{fontWeight: 'bold'}}>H</span>
const HighlightDecorator = (props) => (
  <span style={{backgroundColor: '#9e99d5', color: 'white'}}>{props.children}</span>
)

export default {
  name: 'header',
  title: 'Header',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Highlight',
            value: 'highlight',
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
        ],
      },
    },
  ],
}
