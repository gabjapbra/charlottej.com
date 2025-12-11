import Image from "next/image"
import Accordion, { AccordionSection } from "../../components/Accordeon/accordeon";

export default function Artist() {
    
    const sections: AccordionSection[] = [
        {
            title: "Education",
            content: (
                <div>
                    <p className="mt-6">2020 - 2024</p>
                    <p><strong>International Fine-art PhD.</strong> Shanghai Academy of Fine Arts, Shanghai University (China)</p>
                    <p className="mt-6">2017 - 2019</p>
                    <p><strong>Master of Arts.</strong> ENSA Dijon (France)</p>
                    <p className="mt-6">2014 - 2017</p>
                    <p><strong>Bachelor of Arts.</strong> ENSA Dijon (France)</p>
                    <p className="mt-6">2016</p>
                    <p className="pb-4"><strong>Certificate of completion of Fashion Design training.</strong> Ligne et Formation, Paris-Montrouge (France)</p>
                </div>
            )
        },
        {
            title: "Awards",
            content: (
                <div>
                    <p className="mt-6">2024</p>
                    <p><strong>AI Painting competition “Wandering in the Forbidden city - the Palace of Versaille”.</strong> Second Price. Co-sponsored by People's Daily (overseas edition), Beijing (China)</p>
                    <p className="mt-6">2023</p>
                    <p className="pb-4"><strong>K-Droz competition “Children’s drawings”.</strong> Shortlisted. Organised by K-Droz association (France)</p>
                </div>
            )
        },
        {
            title: "Commissariat",
            content: (
                <div>
                    <p className="mt-6">2025</p>
                    <p className="pb-4"><strong>Assistante d'exposition : BIGRE !</strong> ENSA Dijon, commissariat : Perrine Lacroix</p>
                </div>
            )
        },
        {
            title: "Publications",
            content: (
                <div>
                    <p className="mt-6">2025</p>
                    <p><strong>“La photographie au delà d'elle même”</strong> Institut Supérieur des Arts et Métiers de Sfax, Université de Sfax. pp. 45–70.</p>
                    <p className="mt-6">Jun. 2024</p>
                    <p><strong>“Contemporary Documentary Photography: Between Reality and Staging.”</strong> Scientific journal of arts and design No. 4.</p>
                    <p className="mt-6">Feb. 2023</p>
                    <p><strong>“Three Documentary Regimes Through Contemporary French Photography.”</strong> Semeion Med No. 8.</p>
                    <p className="mt-6">Jan. 2022</p>
                    <p><strong>"Hunting Game".</strong> Clic.he, Sensibile No. 46.</p>
                    <p className="mt-6">Dec. 2021</p>
                    <p><strong>"Eden Garden".</strong> Pulsar – Uma Revista No. 2.</p>
                    <p className="mt-6">Avr. 2019</p>
                    <p className="pb-4"><strong>"Paradise on sale".</strong> Revue Fantôme, *Le repos*, No. 1.</p>
                </div>
            )
        },
        {
            title: "Group Exhibitions",
            content: (
            <div>
                <p className="mt-6">2025</p>
                <p><strong>The essence of a place.</strong> Centrul de Interes, Cluj-Napoca (Romania)</p>
                <p className="mt-6">2024 - 2025</p>
                <p><strong>Dreamland - Homeland.</strong> Hangzhou Winland Center. Hangzhou (China)</p>
                <p className="mt-6">2024</p>
                <p><strong>Exhibition of awarded works during the AI painting competition “Wandering at the Forbidden City - the Palace of Versailles”.</strong> Palace Museum, Beijing (China)</p>
                <p className="mt-6">2024</p>
                <p><strong>Photography Biennale.</strong> Espace Marceline Lartigue. Culture et Territoires 58, Authiou (France)</p>
                <p className="mt-6">2024</p>
                <p><strong>14th International Exhibition of Traditional Fine Arts.</strong> Shanghai Art Collection Museum, Shanghai (China)</p>
                <p className="mt-6">2023</p>
                <p><strong>L’enfance de l’Art.</strong> K-DROZ, Espace Ségur, Paris (France)</p>
                <p className="mt-6">2022</p>
                <p><strong>Ici et Maintenant.</strong> Espace Jean de Joigny, Joigny (France)</p>
                <p className="mt-6">2022</p>
                <p><strong>Lusted men collection #3.</strong> Château du Feÿ, Lyon, Paris...(France)</p>
                <p className="mt-6">2022</p>
                <p><strong>On clothing - The visible self.</strong> Espace Millepiani, Roma (Italy)</p>
                <p className="mt-6">2022</p>
                <p><strong>Political statement.</strong> Espace Millepiani, Roma (Italy)</p>
                <p className="mt-6">2022</p>
                <p><strong>The Next.</strong> Li Tang Gallery (On line), New-York (USA)</p>
                <p className="mt-6">2022</p>
                <p><strong>GanJue 感觉.</strong> South China Art Museum (On line), Beijing (China)</p>
                <p className="mt-6">2021</p>
                <p><strong>International exchange art festival I & II.</strong> Changwon National University Exhibition Hall (South Korea)</p>
                <p className="mt-6">2020</p>
                <p className="pb-4"><strong>ChuMei 出梅 II.</strong> Jincai Gallery, Hangzhou (China)</p>
            </div>
            )
        },
        {
            title: "Workshops",
            content: (
            <div>
                <p className="mt-6">2025</p>
                <p><strong>« Autoportrait ».</strong> ENSA Dijon / L'amour, Hangzhou (China)</p>
                <p className="mt-6">2024</p>
                <p><strong>« Flying commando ».</strong> Vertical, Hangzhou (China)</p>
                <p className="mt-6">2024</p>
                <p><strong>« Art of Living ».</strong> Vertical, Hangzhou (China)</p>
                <p className="mt-6">2021</p>
                <p><strong>« To Take Away ».</strong> E-ART, Hangzhou (China)</p>
                <p className="mt-6">2021</p>
                <p><strong>« Mask ».</strong> E-ART, Hangzhou (China)</p>
                <p className="mt-6">2020</p>
                <p className="pb-4"><strong>« Coffee ».</strong> E-ART, Hangzhou (China)</p>
            </div>
            )
        },
        {
            title: "Readings",
            content: (
            <div>
                <p className="mt-6">2024</p>
                <p><strong>Jury of the 2024 photography competition “The holiday getaway”.</strong> UFE Shanghai</p>
                <p className="mt-2"><strong>« Origins of Modern Art ».</strong> Hangzhou Vocational School for Arts, Hangzhou (China)</p>
                <p className="mt-6">2023</p>
                <p className="pb-4"><strong>« From Chay to Shanghai ».</strong> Chay’s library (France)</p>
            </div>
            )
        }
    ];
    return (
        <main>
            <div className="lg:hidden">
                <div className="relative w-full h-[48vh] flex flex-col">
                    <Image
                        src="/artist/artist.webp"
                        alt=""
                        fill
                        className="object-contain object-top pr-6 pl-6 pt-4"
                    />
                </div>
                <div className="text-justify pr-6 pl-6">
                    <p className="text-lg font-bold">Charlotte Jeanningros’s work is built around familiar environments, starting from a discovery or awareness that becomes the focus of her explorations. Her observations are not guided by the spectacular nature of a scene, but rather rely on the recurrence of visits and the repetition of mundane moments from everyday life. She documents her encounters and experiences through photography, video, and sometimes objects, questioning these practices as well as our perception of familiar settings.</p>
                    <p className="mt-6">Charlotte Jeanningros was born in France in 1992.</p>
                    <p className="mt-6">During her studies, she benefited from the exchange program with the China Academy of Art in Hangzhou and decided to settle in China in 2019 after obtaining her Master of Art at ENSA Dijon. She graduated with an International Fine Arts Ph.D. from the Shanghai Academy of Fine Arts University in 2024. She currently lives in France and works in the ENSA Dijon.</p>
                    <p className="mt-6 pb-6">Her work has been exhibited at the first Authiou Photography Biennial (France) as well as in various institutions and galleries such as the Shanghai Art Collection Museum, Espace Ségur (Paris), Espace Jean de Joigny (France), Espace Millepiani (Roma, Italy) and Jincai Gallery (Hangzhou, China). In addition to exhibitions, her productions have been the subject of several publications, including in the Scientific Revue of Arts and Design No. 4, SEMEION MED. No. 8. and a book chapter in the collective book "La Photographie, Au delà d'elle même" published by the Institute of Arts and Crafts and the University of Sfax.</p>
                </div>
                <div className="px-6 pb-20">
                    <Accordion sections={sections} />
                </div>
            </div>
            <div className="hidden lg:block lg:mx-auto lg:pb-20 lg:mt-12 max-w-[880px] px-6">
            {/* Ligne image + 1 paragraphe */}
            <div className="lg:flex lg:gap-6">
                {/* Image à gauche */}
                <div className="lg:flex-shrink-0 lg:w-[30%] w-full mb-4 lg:mb-0">
                <Image
                    src="/artist/artist.webp"
                    alt="Charlotte Jeanningros"
                    width={600}   // largeur de référence
                    height={800}  // hauteur de référence
                    className="w-full h-auto object-contain"
                />
                </div>

                {/* Texte à droite */}
                <div className="lg:flex-1 text-justify">
                <p className="text-lg font-bold mb-6">
                    Charlotte Jeanningros’s work is built around familiar environments, starting from a discovery or awareness that becomes the focus of her explorations. Her observations are not guided by the spectacular nature of a scene, but rather rely on the recurrence of visits and the repetition of mundane moments from everyday life. She documents her encounters and experiences through photography, video, and sometimes objects, questioning these practices as well as our perception of familiar settings.
                </p>
                </div>
            </div>

            {/* Ligne suivante : texte en deux colonnes */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 mb-6 text-justify">
                <div>
                <p className="mb-6">
                    Charlotte Jeanningros was born in France in 1992.
                </p>
                <p className="mb-6">
                    During her studies, she benefited from the exchange program with the China Academy of Art in Hangzhou and decided to settle in China in 2019 after obtaining her Master of Art at ENSA Dijon. She graduated with an International Fine Arts Ph.D. from the Shanghai Academy of Fine Arts University in 2024. She currently lives in France and works in the ENSA Dijon.
                </p>
                </div>
                <div>
                <p className="mb-6">
                    Her work has been exhibited at the first Authiou Photography Biennial (France) as well as in various institutions and galleries such as the Shanghai Art Collection Museum, Espace Ségur (Paris), Espace Jean de Joigny (France), Espace Millepiani (Roma, Italy) and Jincai Gallery (Hangzhou, China). In addition to exhibitions, her productions have been the subject of plusieurs publications, y compris dans le Scientific Revue of Arts and Design No. 4, SEMEION MED. No. 8, et un chapitre dans le livre collectif "La Photographie, Au delà d'elle même".
                </p>
                </div>
            </div>

            {/* Accordion */}
            <Accordion sections={sections} />
            </div>


        </main>
    );
}