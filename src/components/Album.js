import React from "react"

const Album = () => {
  return (
    <div className="relative overflow-hidden mt-16 sm:mt-24">
      <h2 class="text-base font-semibold tracking-wider text-highlight uppercase text-center">
        New Album
      </h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="z-50 px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
          <div>
            <iframe
              title="derp album"
              style={{ border: 0, width: "350px", height: "350px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=1077176655/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/"
              seamless
            >
              <a href="https://thatderpband.bandcamp.com/album/derp">
                derp. by derp
              </a>
            </iframe>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="sm:max-w-md md:max-w-lg sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <div>
              <p class="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl font-squada">
                derp. by derp.
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl">
                Their debut album, “derp.” features 8 original songs true to
                their sound. Heavy guitars and minor chord progressions are
                complemented by catchy, melodic choruses, punchy bass lines and
                technical drumming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Album
