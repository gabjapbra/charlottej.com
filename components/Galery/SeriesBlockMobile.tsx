import Image from "next/image";

type SeriesBlockProps = {
  title?: string;
  technics?: string;
  description?: string;
  images?: string[];
  link?: string;
};

export default function SeriesBlockMobile({
  title,
  technics,
  description,
  images = [],
  link,
}: SeriesBlockProps) {
  return (
    <section className="mb-6 border-t-2 first:border-t-0">
      {title && (
        <p className="pt-6 text-justify">
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

      {images.map((src, index) => (
        <div key={index} className={`w-full mt-6 ${index === images.length - 1 ? "mb-6" : ""}`}>
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
    </section>
  );
}
