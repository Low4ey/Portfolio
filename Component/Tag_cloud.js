import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'jQuery', count: 20 },
  { value: 'MongoDB', count: 13 },
  { value: 'JavaScript', count: 33 },
  { value: 'React', count: 25 },
  { value: 'Nodejs', count: 23 },
  { value: 'Express.js', count: 20 },
  { value: 'HTML5', count: 25 },
  { value: 'CSS3', count: 17 },
  { value: 'NextJS', count: 20 },
  { value: 'Photoshop', count: 7 },
  { value: 'Python', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'MySQL', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'C++', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'JAVA', count: 22 },
  { value: 'Kotlin', count: 11 },
]

/* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 3s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size}em`,
      border: `2px solid ${color}`,
      margin: '0.1em',
      padding: '0.1em',
      display: 'inline-block',
      color: 'white',
      borderRadius:"6px"
    }}
  >
    {tag.value}
  </span>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={4} renderer={customRenderer} />
)