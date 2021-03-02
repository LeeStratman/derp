import React from "react"
import { AmazonMusic, AppleMusic, Spotify, YouTubeMusic } from "./Icons/icons"

const MusicCloud = () => {
  return (
    <div className="relative overflow-hidden mt-16 sm:mt-24">
      <p className="text-center text-base font-bold uppercase text-highlight tracking-wider">
        FIND ON
      </p>
      <div className="mt-6 grid grid-cols-2 gap-0 md:grid-cols-4 lg:mt-6">
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            className="flex flex-col justify-center items-center"
            href="https://open.spotify.com/artist/1xjC302nv5t6FqJbJY63Bh?si=qSX8sr5_Q9COF6MFBwdcGQ"
          >
            <Spotify />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            className="flex flex-col justify-center items-center"
            href="https://music.apple.com/us/artist/derp/1554624471"
          >
            <AppleMusic />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            className="flex flex-col justify-center items-center"
            href="https://music.amazon.com/artists/B08KGX558B/derp"
          >
            <AmazonMusic />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            className="flex flex-col justify-center items-center"
            href="https://music.youtube.com/playlist?list=OLAK5uy_kjikPE1mkhLRES9UNZXMwtlo232mD_HOM"
          >
            <YouTubeMusic />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MusicCloud
