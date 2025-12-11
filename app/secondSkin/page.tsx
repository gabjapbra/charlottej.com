import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function SecondSkin() {
  return (
    <main>
      <div className="px-6 lg:hidden">
        <SeriesBlockMobile
          title="Second Skin"
          images={[
            "/second_skin/img1.webp",
            "/second_skin/img2.webp",
            "/second_skin/img3.webp",
            "/second_skin/img4.webp",
            "/second_skin/img5.webp",
            "/second_skin/img6.webp",
            "/second_skin/img7.webp",
          ]}
        />
      </div>
      <div className="hidden lg:block lg:mt-12">
          <SeriesBlockDesktop
          title="Second Skin"
          images={[
            "/second_skin/img1.webp",
            "/second_skin/img2.webp",
            "/second_skin/img3.webp",
            "/second_skin/img4.webp",
            "/second_skin/img5.webp",
            "/second_skin/img6.webp",
            "/second_skin/img7.webp",
          ]}
        />
      </div>
    </main>
  );
}