import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function Almost_documentary() {
  return (
    <main>
        <div className="px-6 lg:hidden">
                <SeriesBlockMobile
                        title="Essence"
                        technics="7 photographs (22x11cm), 2025."
                        images={[
                        "/almost_documentary/essence/img1.webp",
                        "/almost_documentary/essence/img2.webp",
                        ]}
                />
                <SeriesBlockMobile
                        title="Queen of the Castel"
                        technics="5 photos, 40 x 60 cm, 2025"
                        images={[
                        "/almost_documentary/queen/img1.webp",
                        "/almost_documentary/queen/img2.webp",
                        ]}
                />
                <SeriesBlockMobile
                        title="Paysage rêvé - Paysage révélé"
                        images={[
                        "/almost_documentary/reve/img1.webp",
                        "/almost_documentary/reve/img2.webp",
                        "/almost_documentary/reve/img3.webp",
                        "/almost_documentary/reve/img4.webp",
                        "/almost_documentary/reve/img5.webp",
                        "/almost_documentary/reve/img6.webp",
                        "/almost_documentary/reve/img7.webp",
                        ]}
                />
                <SeriesBlockMobile
                        title="Portrait"
                        images={[
                        "/almost_documentary/portrait/img1.webp",
                        "/almost_documentary/portrait/img2.webp",
                        "/almost_documentary/portrait/img3.webp",
                        "/almost_documentary/portrait/img4.webp",
                        "/almost_documentary/portrait/img5.webp",
                        "/almost_documentary/portrait/img6.webp",
                        ]}
                />
                <SeriesBlockMobile
                        title="Battlefield"
                        images={[
                        "/almost_documentary/battlefield/img1.webp",
                        "/almost_documentary/battlefield/img2.webp",
                        "/almost_documentary/battlefield/img3.webp",
                        ]}
                />
                <SeriesBlockMobile
                        title="Charlotte"
                        images={[
                        "/almost_documentary/charlotte/img1.webp",
                        "/almost_documentary/charlotte/img2.webp",
                        ]}
                />
            </div>
            <div className="hidden lg:block lg:mt-12">
                <SeriesBlockDesktop
                        title="Essence"
                        technics="7 photographs (22x11cm), 2025."
                        images={[
                        "/almost_documentary/essence/img1.webp",
                        "/almost_documentary/essence/img2.webp",
                        ]}
                />
                <SeriesBlockDesktop
                        title="Queen of the Castel"
                        technics="5 photos, 40 x 60 cm, 2025"
                        images={[
                        "/almost_documentary/queen/img1.webp",
                        "/almost_documentary/queen/img2.webp",
                        ]}
                />
                <SeriesBlockDesktop
                        title="Paysage rêvé - Paysage révélé"
                        images={[
                        "/almost_documentary/reve/img1.webp",
                        "/almost_documentary/reve/img2.webp",
                        "/almost_documentary/reve/img3.webp",
                        "/almost_documentary/reve/img4.webp",
                        "/almost_documentary/reve/img5.webp",
                        "/almost_documentary/reve/img6.webp",
                        "/almost_documentary/reve/img7.webp",
                        ]}
                />
                <SeriesBlockDesktop
                        title="Portrait"
                        images={[
                        "/almost_documentary/portrait/img1.webp",
                        "/almost_documentary/portrait/img2.webp",
                        "/almost_documentary/portrait/img3.webp",
                        "/almost_documentary/portrait/img4.webp",
                        "/almost_documentary/portrait/img5.webp",
                        "/almost_documentary/portrait/img6.webp",
                        ]}
                />
                <SeriesBlockDesktop
                        title="Battlefield"
                        images={[
                        "/almost_documentary/battlefield/img1.webp",
                        "/almost_documentary/battlefield/img2.webp",
                        "/almost_documentary/battlefield/img3.webp",
                        ]}
                />
                <SeriesBlockDesktop
                        title="Charlotte"
                        images={[
                        "/almost_documentary/charlotte/img1.webp",
                        "/almost_documentary/charlotte/img2.webp",
                        ]}
                />
            </div>
    </main>
  );
}
