import React from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import { SiteHeader } from "@/components/site-header"
import "@splidejs/react-splide/css"
import Image from "next/image"
import Carousel from "@/components/carousel"

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <SiteHeader />
      <div className="absolute inset-0">
        <Carousel />
      </div>
    </div>
  )
}

export default Home
