import React from "react"
import { Derp } from "./Icons/icons"

const Hero = ({ openSidePanel }) => {
  return (
    <div className="relative overflow-hidden">
      <main className="mt-16 sm:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl max-w-xs">
                <span className="sr-only">derp.</span>
                <Derp />
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Derp is a 4-piece pop-punk/rock band from Madison, WI. They
                formed in 2008 when three of the band members talked about the
                idea after a show. They quickly called their first choice for a
                drummer. After he turned them down, they called Mark and they
                have been derping ever since. Derp consists of Mark Fairchild
                (drums), Nicholai Stratman (bass), David Mikulski (lead guitar,
                backup vocals) and Dan Edgette (lead vocals, rhythm guitar).
                Derp can’t wait to play some live shows in the Madison area
                again soon!
              </p>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="sm:max-w-md md:max-w-lg sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <iframe
                title="Trembling Music Video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6uYAMuQil9I"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
