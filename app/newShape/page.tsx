import SeriesBlockMobile from "@/components/Galery/SeriesBlockMobile";
import SeriesBlockDesktop from "@/components/Galery/SeriesBlockDesktop";

export default function NewShape() {
  return (
    <main>
      <div className="px-6 lg:hidden">
        <SeriesBlockMobile
          title="New Shape"
          images={[
            "/new_shape/img1.webp",
            "/new_shape/img2.webp",
            "/new_shape/img3.webp",
            "/new_shape/img4.webp",
            "/new_shape/img5.webp",
            "/new_shape/img6.webp",
            "/new_shape/img7.webp",
            "/new_shape/img8.webp",
            "/new_shape/img9.webp",
            "/new_shape/img10.webp",
            "/new_shape/img11.webp",
            "/new_shape/img12.webp",
            "/new_shape/img13.webp",
            "/new_shape/img14.webp",
            "/new_shape/img15.webp",
            "/new_shape/img16.webp",
          ]}
        />
      </div>
      <div className="hidden lg:block lg:mt-12">
        <SeriesBlockDesktop
          title="New Shape"
          images={[
            "/new_shape/img1.webp",
            "/new_shape/img2.webp",
            "/new_shape/img3.webp",
            "/new_shape/img4.webp",
            "/new_shape/img5.webp",
            "/new_shape/img6.webp",
            "/new_shape/img7.webp",
            "/new_shape/img8.webp",
            "/new_shape/img9.webp",
            "/new_shape/img10.webp",
            "/new_shape/img11.webp",
            "/new_shape/img12.webp",
            "/new_shape/img13.webp",
            "/new_shape/img14.webp",
            "/new_shape/img15.webp",
            "/new_shape/img16.webp",
          ]}
        />
      </div>
    </main>
  );
}