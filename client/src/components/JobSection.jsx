import Job from "./Job.jsx";

function JobSection({category}){
    const jobs = [
    {
        field: "Tech",
        img: "technova.png",
        role: "Frontend Developer",
        company: "TechNova",
        where: "Remote",
        salary: "$70k - $90k/year"
    },
    {
        field: "Tech",
        img: "codecraft.png",
        role: "Backend Engineer",
        company: "CodeCraft",
        where: "Austin, TX",
        salary: "$85k - $110k/year"
    },
    {
        field: "Tech",
        img: "technova.png",
        role: "DevOps Engineer",
        company: "TechNova",
        where: "Seattle, WA",
        salary: "$95k - $120k/year"
    },
    {
        field: "Tech",
        img: "innova.png",
        role: "Cybersecurity Analyst",
        company: "InnovaWorks",
        where: "Remote",
        salary: "$90k - $115k/year"
    },
    {
        field: "Tech",
        img: "codecraft.png",
        role: "QA Engineer",
        company: "CodeCraft",
        where: "Denver, CO",
        salary: "$70k - $95k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "UI/UX Designer",
        company: "Designly",
        where: "New York, NY",
        salary: "$60k - $80k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Content Strategist",
        company: "Designly",
        where: "Remote",
        salary: "$50k - $68k/year"
    },

    {
        field: "Data",
        img: "insightful.png",
        role: "Data Analyst",
        company: "Insightful",
        where: "Chicago, IL",
        salary: "$65k - $85k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Market Research Associate",
        company: "Insightful",
        where: "Boston, MA",
        salary: "$60k - $78k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Product Manager",
        company: "InnovaWorks",
        where: "San Francisco, CA",
        salary: "$100k - $130k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Sales Executive",
        company: "InnovaWorks",
        where: "Atlanta, GA",
        salary: "$65k + commission"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Digital Marketing Specialist",
        company: "Designly",
        where: "Los Angeles, CA",
        salary: "$55k - $75k/year"
    }
    ];
    return(
        <div className="mt-[2em]">
            <p className="text-[1.5rem] lg:w-[60%] pt-[0.5em] py-[1em] subheading font-bold">{category} Jobs</p>
            {jobs.map((job) => (job.field == category &&
                <div className="py-[1em] border-b border-gray-200">
                    <Job img={job.img} role={job.role} company={job.company} where={job.where} salary={job.salary} />
                </div>
            ))}
        </div>
    )
}

export default JobSection;