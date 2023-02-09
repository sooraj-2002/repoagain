import 'https://rawcdn.githack.com/flackr/scroll-timeline/637746fa559c3f9d01fcdaf2fcb7e649d18dfc33/dist/scroll-timeline.js';

// Create ScrollTimeline
const myScrollTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  scrollSource: document.scrollingElement, // For legacy implementations
  orientation: 'block',
    scrollOffsets: [
        new CSSUnitValue(0, 'percent'),
        new CSSUnitValue(100, 'percent'),
    ],
});

// Animate Progress Bar on Scroll
new Animation(
  new KeyframeEffect(
    document.querySelector('#progress'),
    {
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    { duration: 1, fill: "forwards" }
  ),
  myScrollTimeline
).play();