import TagCloud from "TagCloud";
import dynamic from "next/dynamic";
const container = '.tagcloud';
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
 const tag = {
    radius: 230,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
}
const Text_cloud=dynamic(
    () => {
      return TagCloud(container,texts,tag);
    },
    { ssr: false }
  );

export default Text_cloud;