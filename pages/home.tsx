import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import { SiteHeader } from "@/components/site-header"
import "@splidejs/react-splide/css"
import Image from "next/image"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <SiteHeader />
      <div className="absolute inset-0">
        <Splide
          options={{
            rewind: true,
            height: 960,
            arrows: false /*autoplay: true, interval: 3000*/,
          }}
        >
          <SplideSlide className="bg-sky-900 relative">
            <Image
              src="https://source.unsplash.com/WLUHO9A_xik"
              fill
              alt="gambar"
              className="object-cover"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold">
              asdad
            </p>
          </SplideSlide>
          <SplideSlide className="bg-lime-900">iya</SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

export default Home
