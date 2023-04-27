import * as React from 'react'

import useAnimation, { GSAPTypes } from '@components/hooks/useAnimation'
import { curtainAnimation } from '@components/utils/animations/curtainAnimation'
import { Form, Input, Textarea } from '@plake492/form-validation'
import useTheme from '@components/hooks/useTheme'
import {
  objectGenericString,
  objectGenericStringNumber,
} from '@components/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

import GridStripWrapper from './GridStripWrapper'

export default function Contact(): JSX.Element {
  const [formStyles, setFormStyles] = React.useState<objectGenericString>({})

  const colorTheme = useTheme()
  const contactRef = React.useRef(null)

  React.useEffect(() => {
    if (colorTheme) {
      const formConfig: { [key: string]: string } = {
        shadowColor: colorTheme?.accent as string,
        fieldBackgroundColor: '#242424aa',
        fieldBorderColor: colorTheme?.tertiary as string,
        fieldPaddingY: '0.25rem',
        fieldFontSize: '1rem',
        fieldBorderRadius: '8px',
        fieldBorderColorFocus: colorTheme?.tertiary as string,
        successColor: colorTheme?.['tertiary-30'] as string,
        labelTextColor: colorTheme?.alt as string,
        labelFontSize: '0.875rem',
        messageFontSize: '0.75rem',
        messagePaddingX: '0.125rem',
        messageBackgroundColor: '#00000000',
        errorColor: colorTheme?.error as string,
        maxWidth: '100%',
      }

      setFormStyles(formConfig)
    }
  }, [colorTheme])

  const [message, setMessage] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  const updateMessage = (key: string, val: string): void =>
    setMessage((prev) => ({ ...prev, [key]: val }))

  return (
    <section
      id="contact"
      ref={contactRef}
      className="position-relative border border-5 border-dark h-vh-100 overflow-hidden position-relative z-2"
      style={{ borderWidth: '2rem' }}
    >
      <GridStripWrapper dir="tl">
        <div className="position-relative z-2 py-xl px-none px-md-md px-lg-xl">
          <div className="position-relative mb-xxl my-xl">
            <div className="px-md-xl px-lg-xl px-md h-100 position-relative z-1">
              <p className="h4 text-lg mb-lg">
                Lets build something amazing together!
              </p>

              {Object.keys(formStyles).length ? (
                <Form
                  rowGap="xs"
                  styleOptions={formStyles}
                  onSubmit={(event, isSuccess) =>
                    console.log('isSuccess ==>', isSuccess)
                  }
                  noValidate
                  submitButton={
                    <button
                      type="submit"
                      className="bg-primary px-lg py-xs text-lg border-rounded border border-tertiary c-pointer"
                    >
                      Submit
                    </button>
                  }
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
                    placeholder="_"
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
                    placeholder="_"
                  />
                  <Textarea
                    label={'Message'}
                    id="message"
                    value={message.message}
                    onChange={(v) => updateMessage('message', v as string)}
                    placeholder="_"
                  />
                </Form>
              ) : null}
              <div className="my-xl d-flex justify-content-start justify-content-md-end gap-xl">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ width: '36' }}
                  color={colorTheme?.['tertiary-10'] as string}
                />
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{ width: '36' }}
                  color={colorTheme?.['tertiary-30'] as string}
                />
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ width: '36' }}
                  color={colorTheme?.['tertiary-50'] as string}
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ width: '36' }}
                  color={colorTheme?.['tertiary-70'] as string}
                />
              </div>
            </div>
          </div>
        </div>
      </GridStripWrapper>
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

export const SuperSVG = function () {
  const colorTheme = useTheme()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
      // viewBox="0 0 650 650"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a-grad">
          <stop
            stopColor={colorTheme?.accent as string}
            stopOpacity="1"
            offset="0%"
          />
          <stop
            stopColor={colorTheme?.tertiary as string}
            stopOpacity="1"
            offset="75%"
          />
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
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
      </g>
    </svg>
  )
}
