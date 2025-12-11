import Image from "next/image";
import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function News() {
  return (
    <main>
        <div className="px-6 lg:hidden">
            <SeriesBlockMobile
                    title="FILME"
                    technics="Video (7'21), 3 photographies (29,7 x 42 cm)"
                    description="©Charlotte Jeanningros & Liudmila Zichenko"
                    images={[
                    "/moving_images/filme.webp",
                    ]}
            />
            <SeriesBlockMobile
                    title="Keep In Touch"
                    technics="Video (6'16), 2020"
                    description='The softness, and the comfort of a "home" can it fill the lack of physical contact that generates our virtual communications. Slowly, the environment that seemed to us to be a cocoon is gradually giving way to a feeling of confinement.'
                    images={[
                    "/moving_images/keep_in_touch.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=ph_NWNsvczU"
            />
            <SeriesBlockMobile
                    title="CHAY"
                    technics="Video (13'46), 2020"
                    description='Among the changes in the rhythms of modern life, certain practices—sometimes considered questionable—still punctuate everyday existence. Immersed in the warmth of a home, we can still trace connections to archaic times, places, and practices from the origins of humanity.'
                    images={[
                    "/moving_images/chay.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=b-c0S3TEhUk"
            />
            <SeriesBlockMobile
                    title="POSTE 15"
                    technics="Video (1h51), 2018"
                    description='From her vantage point, a huntress awaits the decisive moment. In this isolation, she indulges in reverie and reflection, troubled by her connection to the outside world. This self-filmed footage confronts the viewer with the actual duration of the moment and offers a glimpse into this unwavering practice.'
                    images={[
                    "/moving_images/poste15.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=_FVVWg7O-w4"
            />
            <SeriesBlockMobile
                    title="A Plein Pantet"
                    technics="Video (6'00), 2017"
                    description="Language reflects a person's origins. It's a sign of our belonging to a territory that is uniquely ours and accompanies us no matter where we go. In a world where we don't claim our place of origin, where we forget our own language, faced with global domination, I point a camera in front of my face and let the melody of words flow from my mouth."
                    images={[
                    "/moving_images/a_plein_pantet.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=pF0eoiMQwVY"
            />
        </div>
        <div className="hidden lg:block lg:mt-12">
                <SeriesBlockDesktop
                    title="FILME"
                    technics="Video (7'21), 3 photographies (29,7 x 42 cm)"
                    description="©Charlotte Jeanningros & Liudmila Zichenko"
                    images={[
                    "/moving_images/filme.webp",
                    ]}
            />
            <SeriesBlockDesktop
                    title="Keep In Touch"
                    technics="Video (6'16), 2020"
                    description='The softness, and the comfort of a "home" can it fill the lack of physical contact that generates our virtual communications. Slowly, the environment that seemed to us to be a cocoon is gradually giving way to a feeling of confinement.'
                    images={[
                    "/moving_images/keep_in_touch.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=ph_NWNsvczU"
            />
            <SeriesBlockDesktop
                    title="CHAY"
                    technics="Video (13'46), 2020"
                    description='Among the changes in the rhythms of modern life, certain practices—sometimes considered questionable—still punctuate everyday existence. Immersed in the warmth of a home, we can still trace connections to archaic times, places, and practices from the origins of humanity.'
                    images={[
                    "/moving_images/chay.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=b-c0S3TEhUk"
            />
            <SeriesBlockDesktop
                    title="POSTE 15"
                    technics="Video (1h51), 2018"
                    description='From her vantage point, a huntress awaits the decisive moment. In this isolation, she indulges in reverie and reflection, troubled by her connection to the outside world. This self-filmed footage confronts the viewer with the actual duration of the moment and offers a glimpse into this unwavering practice.'
                    images={[
                    "/moving_images/poste15.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=_FVVWg7O-w4"
            />
            <SeriesBlockDesktop
                    title="A Plein Pantet"
                    technics="Video (6'00), 2017"
                    description="Language reflects a person's origins. It's a sign of our belonging to a territory that is uniquely ours and accompanies us no matter where we go. In a world where we don't claim our place of origin, where we forget our own language, faced with global domination, I point a camera in front of my face and let the melody of words flow from my mouth."
                    images={[
                    "/moving_images/a_plein_pantet.webp",
                    ]}
                    link="https://www.youtube.com/watch?v=pF0eoiMQwVY"
            />

        </div>
    </main>
  );
}
