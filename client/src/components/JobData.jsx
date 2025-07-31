const JobData = [
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
        field: "Tech",
        img: "codecraft.png",
        role: "Full Stack Developer",
        company: "CodeCraft",
        where: "San Diego, CA",
        salary: "$100k - $125k/year"
    },
    {
        field: "Tech",
        img: "technova.png",
        role: "Mobile App Developer",
        company: "TechNova",
        where: "Remote",
        salary: "$80k - $100k/year"
    },
    {
        field: "Tech",
        img: "innova.png",
        role: "Cloud Architect",
        company: "InnovaWorks",
        where: "New York, NY",
        salary: "$110k - $140k/year"
    },
    {
        field: "Tech",
        img: "codecraft.png",
        role: "Machine Learning Engineer",
        company: "CodeCraft",
        where: "Remote",
        salary: "$115k - $145k/year"
    },
    {
        field: "Tech",
        img: "technova.png",
        role: "Site Reliability Engineer",
        company: "TechNova",
        where: "Chicago, IL",
        salary: "$105k - $135k/year"
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
        field: "Design",
        img: "designly.png",
        role: "Graphic Designer",
        company: "Designly",
        where: "Austin, TX",
        salary: "$55k - $70k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Creative Director",
        company: "Designly",
        where: "Los Angeles, CA",
        salary: "$90k - $120k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Visual Designer",
        company: "Designly",
        where: "Remote",
        salary: "$65k - $85k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Product Designer",
        company: "Designly",
        where: "Chicago, IL",
        salary: "$75k - $95k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Brand Designer",
        company: "Designly",
        where: "Remote",
        salary: "$58k - $78k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Motion Designer",
        company: "Designly",
        where: "Miami, FL",
        salary: "$65k - $82k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Interaction Designer",
        company: "Designly",
        where: "Boston, MA",
        salary: "$70k - $90k/year"
    },
    {
        field: "Design",
        img: "designly.png",
        role: "Design Researcher",
        company: "Designly",
        where: "Remote",
        salary: "$60k - $88k/year"
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
        field: "Data",
        img: "insightful.png",
        role: "Data Scientist",
        company: "Insightful",
        where: "Remote",
        salary: "$90k - $115k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Business Intelligence Analyst",
        company: "Insightful",
        where: "San Francisco, CA",
        salary: "$85k - $105k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Quantitative Analyst",
        company: "Insightful",
        where: "New York, NY",
        salary: "$100k - $130k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Data Engineer",
        company: "Insightful",
        where: "Seattle, WA",
        salary: "$95k - $120k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Research Data Coordinator",
        company: "Insightful",
        where: "Remote",
        salary: "$60k - $78k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Data Governance Analyst",
        company: "Insightful",
        where: "Denver, CO",
        salary: "$70k - $90k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "Statistical Modeler",
        company: "Insightful",
        where: "Atlanta, GA",
        salary: "$85k - $110k/year"
    },
    {
        field: "Data",
        img: "insightful.png",
        role: "ETL Developer",
        company: "Insightful",
        where: "Phoenix, AZ",
        salary: "$80k - $100k/year"
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
        field: "Business",
        img: "innova.png",
        role: "Operations Manager",
        company: "InnovaWorks",
        where: "Dallas, TX",
        salary: "$90k - $115k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Business Analyst",
        company: "InnovaWorks",
        where: "Chicago, IL",
        salary: "$75k - $95k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Partnership Manager",
        company: "InnovaWorks",
        where: "Remote",
        salary: "$85k - $110k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Strategic Planner",
        company: "InnovaWorks",
        where: "Boston, MA",
        salary: "$95k - $120k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Account Manager",
        company: "InnovaWorks",
        where: "Remote",
        salary: "$60k - $85k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Operations Analyst",
        company: "InnovaWorks",
        where: "Seattle, WA",
        salary: "$70k - $90k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Business Development Associate",
        company: "InnovaWorks",
        where: "New York, NY",
        salary: "$65k - $88k/year"
    },
    {
        field: "Business",
        img: "innova.png",
        role: "Growth Manager",
        company: "InnovaWorks",
        where: "Remote",
        salary: "$90k - $125k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Digital Marketing Specialist",
        company: "Designly",
        where: "Los Angeles, CA",
        salary: "$55k - $75k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Content Marketing Manager",
        company: "Designly",
        where: "Remote",
        salary: "$70k - $90k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "SEO Specialist",
        company: "Designly",
        where: "New York, NY",
        salary: "$60k - $78k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Social Media Manager",
        company: "Designly",
        where: "Remote",
        salary: "$58k - $75k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Email Marketing Coordinator",
        company: "Designly",
        where: "Boston, MA",
        salary: "$55k - $70k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Marketing Analyst",
        company: "Designly",
        where: "Denver, CO",
        salary: "$60k - $82k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Brand Marketing Associate",
        company: "Designly",
        where: "Chicago, IL",
        salary: "$65k - $85k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "PPC Campaign Manager",
        company: "Designly",
        where: "Remote",
        salary: "$70k - $95k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Marketing Copywriter",
        company: "Designly",
        where: "Seattle, WA",
        salary: "$50k - $68k/year"
    },
    {
        field: "Marketing",
        img: "designly.png",
        role: "Influencer Marketing Coordinator",
        company: "Designly",
        where: "San Francisco, CA",
        salary: "$60k - $80k/year"
    }
];

export default JobData;