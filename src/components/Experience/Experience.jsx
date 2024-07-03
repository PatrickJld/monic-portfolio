import ExpCard from "./ExpCard.jsx";

export default function Experience() {
    return(
        <section>
            <h1 className="font-shippori text-5xl m-10 mb-24">Experience</h1>

            <ExpCard
                title="Targaryen Pictures"
                date="2020 – present "
                desc="Documentary Wedding Vendor, Marketing, Content Creator, and Talent"
            />
            <ExpCard
                title="Shumai Dimsum"
                date="2022-2023"
                desc="Restaurant @MATOS foodcourt, Design Graphic, Booth Keeper"
            />
            <ExpCard
                title="Noizy Tribe"
                date="2019- present"
                desc="Freelancer Dancer"
            />
        </section>
    )
}
