// import useAnimation from '@components/hooks/useAnimation'
// import { pinProgressAnimation } from '@components/utils/animations/pinProgressAnimaition'
// import React from 'react'

// type Props = {
//   children: React.ReactNode
// }

// export default function PinWrapper({ children }: Props) {
//   const sectionRef = React.useRef<HTMLElement>(null)

//   const theme = useAnimation<HTMLElement>(pinProgressAnimation, { sectionRef })

//   return (
//     <section ref={sectionRef} className="">
//       {children}
//       <div
//         className="w-vw-100 py-xs position-absolute bottom-0 left-0 scroll-progress-bar"
//         style={{
//           bottom: '-0.227rem',
//           left: '-0.227rem',

//           background: `linear-gradient(45deg, ${theme?.tertiary}, ${theme?.accent})`,
//         }}
//       ></div>
//     </section>
//   )
// }
