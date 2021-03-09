import React from "react"
import {
  AmazonMusic,
  AppleMusic,
  Pandora,
  Spotify,
  YouTubeMusic,
} from "./Icons/icons"

const MusicCloud = () => {
  return (
    <div className="relative overflow-hidden mt-16 sm:mt-24">
      <h2 className="text-center text-base font-bold uppercase text-highlight tracking-wider">
        FIND ON
      </h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-0 md:grid-cols-5 lg:mt-6">
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            target="__blank"
            className="icon-link flex flex-col justify-center items-center"
            href="https://open.spotify.com/artist/1xjC302nv5t6FqJbJY63Bh?si=qSX8sr5_Q9COF6MFBwdcGQ"
          >
            <Spotify />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            target="__blank"
            className="icon-link flex flex-col justify-center items-center"
            href="https://music.apple.com/us/artist/derp/1554624471"
          >
            <AppleMusic />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            target="__blank"
            className="icon-link flex flex-col justify-center items-center"
            href="https://music.amazon.com/artists/B08KGX558B/derp"
          >
            <AmazonMusic />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            target="__blank"
            className="icon-link flex flex-col justify-center items-center"
            href="https://music.youtube.com/playlist?list=OLAK5uy_kjikPE1mkhLRES9UNZXMwtlo232mD_HOM"
          >
            <YouTubeMusic />
          </a>
        </div>
        <div className="col-span-1 flex justify-center py-8 px-8">
          <a
            target="__blank"
            className="icon-link flex flex-col justify-center items-center"
            href="https://www.pandora.com/artist/derp/derp-explicit/ALPhK5mx3mcqK3V?_branch_match_id=895392734575075052"
          >
            <Pandora />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MusicCloud
