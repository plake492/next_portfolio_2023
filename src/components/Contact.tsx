import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCode } from '@fortawesome/free-solid-svg-icons'
import {
  faNodeJs,
  faSass,
  faCss3,
  faSquareJs,
} from '@fortawesome/free-brands-svg-icons'
import useAnimation from '@components/hooks/useAnimation'
import { curtainAnimation } from '@components/utils/animations/curtainAnimation'
import { Form, Input, Textarea } from '@plake492/form-validation'
import useTheme from '@components/hooks/useTheme'

export default function Contact(): JSX.Element {
  const colorTheme = useTheme()

  const formStyles = {
    shadowColor: colorTheme?.accent,
    fieldBackgroundColor: '#242424aa',
    fieldTextColor: colorTheme?.accentLight,
    fieldPlaceholderTextColor: 'cornflower',
    fieldBorderColor: 'indego',
    fieldBorderColorFocus: colorTheme?.tertiary,
    labelTextColor: colorTheme?.tertiary,
    errorColor: 'red',
    successColor: 'orange',
  }

  const [message, setMessage] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const updateMessage = (key: string, val: string): void =>
    setMessage((prev) => ({ ...prev, [key]: val }))

  return (
    <section className="position-relative border-bottom border-left border-right border-5 border-accent">
      {/* <CurtainAnimation /> */}

      <div className="row py-xl px-xl">
        <div className="col-2 flex-center gap-xxxl px-xl border-left border-2 border-accent">
          {/* <FontAwesomeIcon
            icon={faMugHot}
            className="color-tertiary-20"
            width={60}
          />
          <FontAwesomeIcon
            icon={faCode}
            className="color-tertiary-40"
            width={60}
          />

          <FontAwesomeIcon
            icon={faCss3}
            className="color-tertiary-80"
            width={60}
          /> */}
        </div>
        <div
          className="border-left border-right border-accent col-8 position-relative my-xl
          my-xl"
          style={{ minHeight: '90vh' }}
        >
          <div className="px-xl  h-100 position-relative z-1">
            <p className="color-accent-light text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ex
              eveniet, expedita commodi, sed beatae eius mollitia est, laborum
              voluptatibus ad iste quos aspernatur voluptatem minima. Adipisci,
              aut? A, natus!
            </p>

            <div className="">
              <Form
                styleOptions={formStyles}
                formLabel={'Contact'}
                onSubmit={(event, isSuccess) =>
                  console.log('isSuccess ==>', isSuccess)
                }
                noValidate
              >
                <Input
                  type={'text'}
                  label={'Name'}
                  id={'name'}
                  col={6}
                  validationType="text"
                  isRequired
                  value={message.name}
                  onChange={(v) => updateMessage('name', v as string)}
                />
                <Input
                  type={'email'}
                  label={'Email'}
                  id={'email'}
                  col={6}
                  validationType="email"
                  isRequired
                  value={message.email}
                  onChange={(v) => updateMessage('email', v as string)}
                />
                <Textarea
                  label={'Message'}
                  id="message"
                  value={message.message}
                  onChange={(v) => updateMessage('message', v as string)}
                />
              </Form>
            </div>
            {JSON.stringify(message)}
          </div>
          <div className="position-absolute mt-xl top-50 left-50 absolute-center z-0 w-100">
            <SuperSVG />
          </div>
        </div>
        <div className="col-2 flex-center gap-xxxl px-xl border-right border-2 border-accent">
          {/* <FontAwesomeIcon
            icon={faNodeJs}
            className="color-tertiary-20"
            width={60}
          />
          <FontAwesomeIcon
            icon={faSass}
            className="color-tertiary-60"
            width={60}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            className="color-tertiary-80"
            width={60}
          /> */}
        </div>
      </div>
    </section>
  )
}

function CurtainAnimation() {
  const spacerWrapperRef = React.useRef<HTMLDivElement>(null)

  useAnimation<HTMLDivElement>(curtainAnimation, { spacerWrapperRef })

  return (
    <div
      className="spacer-wrapper position-absolute top-0 left-0 w-100 h-100 z-2 pe-none"
      ref={spacerWrapperRef}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`spacer spacer-${i + 1} bg-primary-${i + 1}0`}
          style={{ '--spacer-height': i } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

function SuperSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a-grad">
          <stop
            stopColor="hsl(331, 90%, 56%)"
            stopOpacity="1"
            offset="0%"
          ></stop>
          <stop
            stopColor="hsl(270, 73%, 53%)"
            stopOpacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        strokeWidth="5.5"
        stroke="url(#a-grad)"
        fill="none"
        id="hexagon-aniamtion"
      >
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
      </g>
    </svg>
  )
}
