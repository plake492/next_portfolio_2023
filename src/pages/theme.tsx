import useTheme from '@components/hooks/useTheme'
import {
  objectGenericString,
  objectGenericStringNumber,
} from '@components/types'
import { toKebabCase } from '@components/utils/helpers'
import * as React from 'react'

const colorTargets: string[] = [
  'primary',
  'secondary',
  'tertiary',
  'accent',
  'alt',
]

export default function Theme() {
  const [colors, setColors] = React.useState<objectGenericString | null>(null)

  const colorTheme = useTheme()

  React.useEffect((): void => {
    if (colorTheme) {
      const themeColors = Object.entries(colorTheme).reduce(
        (acc, cur): objectGenericString => {
          let curVal: objectGenericStringNumber = {}
          const [key, val] = cur
          colorTargets.forEach((color) => {
            if (
              key.includes(color) &&
              !key.includes('Font') &&
              !key.includes('-') // ! THIS REMOVES THE TONES
            ) {
              curVal[key] = val
            }
          })

          return { ...acc, ...curVal }
        },
        {}
      )

      setColors(themeColors)
    }
  }, [colorTheme])

  return (
    <div className="bg-black row" style={{ minHeight: '100vh' }}>
      <div className="col-3 position-sticky left-0 h-100 bg-black p-md">
        <div className="border-rounded overflow-hidden box-shadow shadow-grey shadow-2">
          {colors
            ? Object.entries(colors).map(([key, val]) => (
                <div key={key} className={`bg-${toKebabCase(key)} p-xl`}>
                  {key}: {val}
                </div>
              ))
            : null}
        </div>
      </div>

      <section className="col-9">
        {/* BG - PRIMARY */}
        <div className="h-min-vh-100 bg-primary text-light">
          <div className="container-xl py-xl">
            <h1 className="color-alt">Testing Header 1</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis placeat quibusdam quo temporibus excepturi
              exercitationem vel, officia tempora sunt repudiandae a. Animi,
              fugiat consequuntur in laboriosam vitae suscipit cupiditate ullam?
            </p>
            <h2 className="color-alt">Testing Header 2</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis placeat quibusdam quo temporibus excepturi
              exercitationem vel, officia tempora sunt repudiandae a. Animi,
              fugiat consequuntur in laboriosam vitae suscipit cupiditate ullam?
            </p>
            <h3 className="color-alt">Testing Header 3</h3>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis placeat quibusdam quo temporibus excepturi
              exercitationem vel, officia tempora sunt repudiandae a. Animi,
              fugiat consequuntur in laboriosam vitae suscipit cupiditate ullam?
            </p>
          </div>
        </div>

        {/* BG - Secondary */}
        <div className="bg-secondary text-light">
          <div className="container-xl py-xl">
            <h1>Testing</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis placeat quibusdam quo temporibus excepturi
              exercitationem vel, officia tempora sunt repudiandae a. Animi,
              fugiat consequuntur in laboriosam vitae suscipit cupiditate ullam?
            </p>
            <div className="row g-md">
              <div className="col-6 p-md border-primary bg-primary border-rounded box-shadow shadow-3 shadow-primary border border-dark">
                <h5 className="color-alt">Card</h5>
                <div className="border border-accent p-md border-rounded">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis architecto quis commodi accusamus iste veniam
                    laboriosam illo, ratione culpa excepturi dolore corrupti
                    eius iure consequatur porro pariatur itaque voluptate nemo!
                  </p>
                </div>
              </div>
              <div className="col-6 p-md border-primary bg-primary border-rounded box-shadow shadow-3 shadow-primary border border-dark">
                <h5 className="color-alt">Card</h5>
                <div className="border border-accent p-md border-rounded">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis architecto quis commodi accusamus iste veniam
                    laboriosam illo, ratione culpa excepturi dolore corrupti
                    eius iure consequatur porro pariatur itaque voluptate nemo!
                  </p>
                </div>
              </div>
              <div className="col-6 p-md border-primary bg-primary border-rounded box-shadow shadow-3 shadow-primary border border-dark">
                <h5 className="color-alt">Card</h5>
                <div className="border border-accent p-md border-rounded">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis architecto quis commodi accusamus iste veniam
                    laboriosam illo, ratione culpa excepturi dolore corrupti
                    eius iure consequatur porro pariatur itaque voluptate nemo!
                  </p>
                </div>
              </div>
              <div className="col-6 p-md border-primary bg-primary border-rounded box-shadow shadow-3 shadow-primary border border-dark">
                <h5 className="color-alt">Card</h5>
                <div className="border border-accent p-md border-rounded">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis architecto quis commodi accusamus iste veniam
                    laboriosam illo, ratione culpa excepturi dolore corrupti
                    eius iure consequatur porro pariatur itaque voluptate nemo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
