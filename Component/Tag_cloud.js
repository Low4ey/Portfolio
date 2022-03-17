import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'NextJS', count: 22 },
  { value: 'Photoshop', count: 7 },
  { value: 'Python', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'MySQL', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'JAVA', count: 30 },
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
    }}
  >
    {tag.value}
  </span>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={4} renderer={customRenderer} />
)