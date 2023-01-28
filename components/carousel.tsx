import React from "react"
import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

type Props = {}

const Carousel = (props: Props) => {
  return (
    <Splide
      options={{
        rewind: true,
        height: 960,
        arrows: false,
        autoplay: true,
        interval: 3000,
      }}
    >
      <SplideSlide className="bg-sky-900 relative">
        <Image
          src="https://source.unsplash.com/WLUHO9A_xik"
          fill
          alt="gambar"
          className="object-cover"
        />
        <div className="flex flex-col text-center gap-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-4xl md:text-6xl font-bold">
            Aksi 100 Lilin Tragedi Kanjuruhan
          </p>
          <p className="text-xl md:text-2xl font-semibold">Fikri Naufal</p>
        </div>
      </SplideSlide>
      <SplideSlide className="bg-lime-900 relative">
        <Image
          src="https://source.unsplash.com/HwFQO55q924"
          fill
          alt="gambar"
          className="object-cover"
        />
        <div className="flex flex-col text-center gap-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-4xl md:text-6xl font-bold">
            Aksi 100 Lilin Tragedi Kanjuruhan
          </p>
          <p className="text-xl md:text-2xl font-semibold">Fikri Naufal</p>
        </div>
      </SplideSlide>
    </Splide>
  )
}

export default Carousel
