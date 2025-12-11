import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function SecondSkin() {
  return (
    <main>
      <div className="px-6 lg:hidden">
      <SeriesBlockMobile
        title="It Sticks"
        images={[
          "/it_sticks/img1.webp",
          "/it_sticks/img2.webp",
          "/it_sticks/img3.webp",
          "/it_sticks/img4.webp",
          "/it_sticks/img5.webp",
          "/it_sticks/img6.webp",
          "/it_sticks/img7.webp",
        ]}
      />
      </div>
      <div className="hidden lg:block lg:mt-12">
        <SeriesBlockDesktop
          title="It Sticks"
          images={[
            "/it_sticks/img1.webp",
            "/it_sticks/img2.webp",
            "/it_sticks/img3.webp",
            "/it_sticks/img4.webp",
            "/it_sticks/img5.webp",
            "/it_sticks/img6.webp",
            "/it_sticks/img7.webp",
          ]}
        />
      </div>
    </main>
  );
}