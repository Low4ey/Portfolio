import TagCloud from "TagCloud";
import Script from "next/script";
import React from 'react'

const Text_cloud = () => {
    const container = '.tagcloud';
    const texts = [
        '3D', 'TagCloud', 'JavaScript',
        'CSS3', 'Animation', 'Interactive',
        'Mouse', 'Rolling', 'Sphere',
        '6KB', 'v2.x',
    ];
    var tag = TagCloud(container, texts, {
        radius: 230,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep: true
    })
    return (<>
        {/* <Script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js" /> */}
        <span className="tagcloud"></span>
            {tag}

    </>
    )
}

export default Text_cloud;