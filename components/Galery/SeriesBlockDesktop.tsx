import Image from "next/image";

type SeriesBlockDesktopProps = {
  title?: string;
  technics?: string;
  description?: string;
  images?: string[];
  link?: string;
};

export default function SeriesBlockDesktop({
  title,
  technics,
  description,
  images = [],
  link,
}: SeriesBlockDesktopProps) {
  return (
    <section className="mb-6 border-t-2 lg:flex lg:gap-8 lg:items-start lg:w-[65%] lg:mx-auto">
      {/* Images à gauche */}
      <div className="lg:w-2/3">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-full ${index === images.length - 1 ? "mb-6" : "mb-4"}`}
          >
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={src}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </a>
            ) : (
              <Image
                src={src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            )}
          </div>
        ))}
      </div>

      {/* Texte à droite */}
      <div className="lg:w-1/3 lg:flex lg:flex-col lg:justify-start pt-4">
        {title && (
          <p className="text-justify lg:text-lg">
            <strong>{title}</strong>
          </p>
        )}

        {technics && (
          link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 inline-block"
            >
              {technics}
            </a>
          ) : (
            <p className="mt-2">{technics}</p>
          )
        )}

        {description && (
          <p className="mt-2 text-justify">{description}</p>
        )}
      </div>
    </section>
  );
}
