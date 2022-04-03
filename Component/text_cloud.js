import TagCloud from "TagCloud";
import dynamic from "next/dynamic";
import { useRef } from "react";
const container = '.tagcloud';
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
 const tag = {
    radius: 100,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
}
const Text_cloud=dynamic(
  () => {
      const refTag=useRef();
      return <span ref={refTag}>{TagCloud(container,texts,tag)}</span>;
    },
    { ssr: false }
  );

export default Text_cloud;