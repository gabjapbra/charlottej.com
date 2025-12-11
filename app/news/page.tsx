import Image from "next/image";
import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function News() {
  return (
    <main>
        <div className="px-6 lg:hidden">
            <SeriesBlockMobile
                title='Exposition de fin de workshop "THE ESSENCE OF A PLACE" 03/11/2025 - 15/11/2025 Centrul de Interes in Centru, Cluj-Napoca, Romania.'
                images={[
                "/news/essence_of_a_place.webp",
                ]}
            />
            <SeriesBlockMobile
                title="Charlotte Jeanningros. « Typologies de l’expérience appliquées à la photographie documentaire contemporaine » Dans : La photographie au delà d'elle même. Institut Supérieur des arts et métier de Sfax, Université de Sfax. pp. 45 - 70"
                images={[
                "/news/la_photographie.webp",
                ]}
            />
            <SeriesBlockMobile
                title='Article dans "People’s Daily Online"'
                technics="link"
                images={[
                "/news/peoples_daily_online.webp",
                ]}
                link="http://paper.people.com.cn/rmrbhwb/pc/content/202508/21/content_30098245.html"
            />
            <SeriesBlockMobile
                title='BIGRE ! ENSA Dijon - Du 28 juin au 21 septembre 2025'
                images={[
                "/news/bigre.webp",
                ]}
            />
        </div>
        <div className="hidden lg:block lg:mt-12 lg:px-35">
            <SeriesBlockDesktop
                title='Exposition de fin de workshop "THE ESSENCE OF A PLACE" 03/11/2025 - 15/11/2025 Centrul de Interes in Centru, Cluj-Napoca, Romania.'
                images={[
                "/news/essence_of_a_place.webp",
                ]}
            />
            <SeriesBlockDesktop
                title="Charlotte Jeanningros. « Typologies de l’expérience appliquées à la photographie documentaire contemporaine » Dans : La photographie au delà d'elle même. Institut Supérieur des arts et métier de Sfax, Université de Sfax. pp. 45 - 70"
                images={[
                "/news/la_photographie.webp",
                ]}
            />
            <SeriesBlockDesktop
                title='Article dans "People’s Daily Online"'
                technics="LINK"
                images={[
                "/news/peoples_daily_online.webp",
                ]}
                link="http://paper.people.com.cn/rmrbhwb/pc/content/202508/21/content_30098245.html"
            />
            <SeriesBlockDesktop
                title='BIGRE ! ENSA Dijon - Du 28 juin au 21 septembre 2025'
                images={[
                "/news/bigre.webp",
                ]}
            />
        </div>
    </main>
  );
}
