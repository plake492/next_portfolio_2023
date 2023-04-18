export interface HeroAnimationRefs {
  vidRef: React.RefObject<HTMLDivElement>;
  textRef: React.RefObject<HTMLDivElement>;
}
export const heroAnimations = (
  gsap: any,
  { vidRef, textRef }: HeroAnimationRefs
) => {
  const tl = gsap.timeline({
    defaults: { duration: 2, ease: 'power4.in' },
  });

  const videoEl = vidRef.current as HTMLDivElement;

  tl.fromTo(
    videoEl.children[1],
    {
      filter: 'grayscale(0.5) brightness(0) hue-rotate(180deg)',
    },
    {
      duration: 1.5,
      filter: 'grayscale(0) brightness(0.5) hue-rotate(0deg)',
      yPercentage: -100,
    },
    '0'
  );
  tl.from(textRef.current, { y: '250', autoAlpha: 0 }, '0.5');
  tl.to(textRef.current, { background: '#222222aa' }, '0.75');
  tl.fromTo(
    (textRef.current as HTMLDivElement).children[0],
    { color: '#000000' },
    { color: '#dddddd' },
    '1'
  );
  tl.to(
    videoEl.children[1],
    { yPercent: -100, duration: 2, ease: 'power3.in' },
    '2.5'
  );
  tl.to(
    videoEl.children[0],
    { yPercent: -50, autoAlpha: 0, duration: 2 },
    '2.5'
  );
};
