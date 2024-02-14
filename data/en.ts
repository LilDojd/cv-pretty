import { getAssetPath } from "@/app/lib/utils";
import { Data } from "@/types/data";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { PhoneIcon } from "lucide-react";
import { Calendar, Mail, Send } from "lucide-react";
import { VSBGLogo, InSilicoMedicineLogo } from "@/images/logos";

const data: Data = {
  name: "Georgiy Andreev",
  lastUpdatedAt: new Date(),
  status: {
    color: "blocked",
    label: "Not Available",
  },
  location: "Abu Dhabi, UAE, GMT+4",
  locationLink: "https://www.google.com/maps/place/Abu+Dhabi",
  bio: "CompChem/StructBio/Software Engineer",
  summary:
    "I have a proven track record of participating in research projects in Structural Biology and Computational Chemistry with global collaborators. My experiences have deepened my understanding of the community's need for responsive, robust, and scalable scientific software, a challenge I have enthusiastically met as Lead Developer for Alchemistry in Chemistry42. Currently, I work primarily with Python and C++. I do scientific illustrations and renders. I love proteins and small molecules; I want to believe the feeling is mutual",
  avatarUrl: getAssetPath() + "/locale/en/avatar.jpg",
  languages: [
    {
      type: "spoken",
      name: "English",
      proficiency: 5,
    },
    {
      type: "spoken",
      name: "Russian",
      proficiency: 5,
    },
    {
      type: "spoken",
      name: "Chinese",
      proficiency: 3,
    },
    {
      type: "spoken",
      name: "Georgian",
      proficiency: 2,
    },
    {
      type: "programming",
      name: "Python",
      proficiency: 5,
    },
    {
      type: "programming",
      name: "Rust",
      proficiency: 4,
    },
    {
      type: "programming",
      name: "C++",
      proficiency: 3,
    },
    {
      type: "programming",
      name: "JS/TS",
      proficiency: 2,
    },
  ],
  skills: [
    {
      type: "bio",
      stack: [
        "Molecular Modeling",
        "Refinement",
        "Docking",
        "Bioinformatics",
        "MM/QM/ML Biosimulations",
        "Enhanced Sampling",
        "Drug Design",
        "Chemoinformatics",
      ],
    },
    {
      type: "ml",
      stack: [
        "Generative Models",
        "Graph Neural Networks",
        "Geometric Deep Learning",
        "Active Learning",
        "Predictive Models",
        "MLOps",
      ],
    },
    {
      type: "dev",
      stack: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Version Control",
        "CI/CD",
        "Neo4j",
        "NoSQL",
        "Product Lifecycle",
      ],
    },
    {
      type: "visualization",
      stack: [
        "Seaborn",
        "Plotly",
        "Dash",
        "PyMOL",
        "Mol*",
        "VIAMD",
        "ChimeraX",
        "NGLView",
        "Blender",
      ],
    },
    {
      type: "soft",
      stack: [
        "Problem Solving",
        "Presentation",
        "Teamwork",
        "Adaptability",
        "Communication",
      ],
    },
  ],
  education: [
    {
      school: "Lomonosov Moscow State University",
      degree: "Master's degree in Bioengineering and Bioinformatics",
      start: "2017",
      end: "2023",
    },
  ],
  work: [
    {
      company: ">VSBG",
      link: "https://vsb.fbb.msu.ru/",
      badges: ["Lab"],
      title: "Student → Alumni",
      logo: VSBGLogo,
      start: "2019",
      end: "2023 ",
      description:
        "I developed computational methods for rational enzyme design under Dr. Golovin A.V.'s guidance. I also created hybrid molecular mechanics and machine-learning methods for protein-ligand binding affinity estimation and guided generative modeling of binders",
    },
    {
      company: "InSilico Medicine",
      link: "https://insilico.com/",
      badges: ["Research", "Drug Discovery"],
      title: "Structural Biologist",
      logo: InSilicoMedicineLogo,
      start: "2020",
      end: "2022",
      description:
        "Took part in developing ISM001-055, a first-in-class small molecule inhibitor for treating IPF (Phase 2).  I supported two internal drug discovery projects and three external collaborations by providing valuable insights into the mechanisms of action of small molecules and their interactions. Additionally, I developed a platform to track the results of internal ADMET assays",
    },
    {
      company: "InSilico Medicine",
      link: "https://insilico.com/",
      badges: ["Development"],
      title: "Alchemistry Lead Developer",
      logo: InSilicoMedicineLogo,
      start: "2022",
      end: "Current",
      description:
        "Delivered Alchemistry, a physics-based Hit-to-Lead optimization and Prioritization platform based on binding free energy calculations. It achieves state-of-the-art accuracy of 1.5 kcal/mol across a wide range of targets, at a fraction of the cost of traditional methods. The platform is integrated into Chemistry42 SaaS, which is used for designing internal preclinical candidates, as well as by several biospharmaceutical companies",
    },
  ],
  contacts: [
    {
      label: "Mail me",
      href: "mailto:yawner@pm.me",
      icon: Mail,
      toolbar: true,
    },
    {
      label: "Call me",
      href: "tel:+971501169750",
      icon: PhoneIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/georgiy-andreev",
      icon: SiLinkedin,
    },
    {
      label: "Setup a meeting",
      href: "https://cal.com/yawner",
      icon: Calendar,
      toolbar: true,
    },
    {
      label: "Telegram",
      href: "https://t.me/LouisBuilyon",
      icon: Send,
      toolbar: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/LilDojd",
      icon: SiGithub,
    },
  ],
  projects: [
    {
      title: "Alchemistry",
      techStack: ["OpenMM", "RDKit", "PyTorch", "ray", "Neo4j"],
      description:
        "SOTA Alchemical free energy calculations for drug discovery",
      link: {
        label: "insilico.com/chemistry42",
        href: "https://insilico.com/chemistry42",
      },
    },
    {
      title: "ISM001-055",
      techStack: ["GROMACS", "AMBER", "Plumed", "MOE", "DFTB+"],
      description:
        "AI-discovered drug now in Phase 2 clinical trials for IPF. A team I was part of has played a significant role in reaching this milestone",
      link: {
        label: "clinicaltrials.gov/study/NCT05938920",
        href: "https://www.clinicaltrials.gov/study/NCT05938920",
      },
    },
    {
      title: "Result Tracker",
      techStack: ["Plotly/Dash", "React", "Node.js"],
      description:
        "An internal dashboard for tracking, visualizing, and analyzing the results of ADMET assays",
    },
    {
      title: "Colabind",
      techStack: ["GROMACS", "xtb", "JAX", "Martini Force Field", "MDAnalysis"],
      description:
        "A Cloud-based approach for prediction of binding sites with CG cosolvent simulations",
      link: {
        label: "github.com/porekhov/CG_probeM",
        href: "https://github.com/porekhov/CG_probeMD",
      },
    },
    {
      title: "NN-Enhanced ABFE",
      techStack: ["OpenMM-Torch", "PyTorch", "Plumed", "RDKit"],
      description:
        "A hybrid ML/MM approach for binding free energy calculations with ANI2x neural network potentials",
    },
    {
      title: "CNNs for Enzymes",
      techStack: ["GROMACS", "TensorFlow", "Rosetta"],
      description:
        "Exploratory research project on the applicability of CNNs for enzyme activity prediction",
    },
  ],
};

export default data;
