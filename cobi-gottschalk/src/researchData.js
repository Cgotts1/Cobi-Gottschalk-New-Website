import dissertationFinal from "./images/dissertation-final.jpg"
import dissertationFinalPdf from "./documents/Dissertation-Final.pdf"
import pollenJeans from "./images/pollen-jeans.jpg"
import pollenJeansPdf from "./documents/Forensic-Palynology.pdf"
import stratigraphicReport from "./images/stratigraphy-report.jpg"
import stratigraphicReportPdf from "./documents/Stratigraphic-Report.pdf"



export const researchProjects = [
    {
      projectType: 'Forensic',
      projectName: 'An Analysis of Sexual Dimorphism in the Shape of the Human Proximal Femur and its Relationship to the Acetabulum of the Pelvis',
      // projectGitHub: 'https://github.com/Cgotts1/API-Project',
      projectSite:`${dissertationFinalPdf}`,
      projectImage: `${dissertationFinal}`,
      projectSummary: "This study focuses on the sexually dimorphic shape differences of the proximal male and female femur and their relationship in size between the acetabulum of the pelvis and the femoral head. The research demonstrates high correlation and potential benefits in the identification of human skeletal remains, particularly in cases involving commingled remains, further advancing scientific understanding of the femur and pelvis.",
      projectTech: "🛠 SPSS25 | Digital Caliper | Femur | Os Coxae | ImageJ | Kubtec Xpert 80L",
      projectContributers: "Supervisor: Dr. James Ohman (LJMU)"
    },

    {
        projectType: 'Forensic',
        projectName: 'So You Think Your Jeans Are Clean? The Preservation of Pollen from Washed Clothing',
        // projectGitHub: 'https://github.com/Cgotts1/API-Project',
        projectSite:`${pollenJeansPdf}`,
        projectImage: `${pollenJeans}`,
        projectSummary: "This research aimed to investigate whether pollen present in soil, transferred onto clothing, could still be detected after washing. After applying soil containing pollen to denim fabric and subjecting it to multiple wash cycles, the study revealed that even after three standard wash cycles, pollen traces remained on the fabric, providing valuable insights for law enforcement and archaeologists regarding the persistence of pollen on clothing.",
        projectTech: "🛠 Denim Jeans | AEG Washing Machine | Ariel Detergent | Micron Mesh",
      projectContributers: "Supervisor: Dr. Christopher Hunt (LJMU)",
      },
      {
        projectType: 'Archaeology',
        projectName: 'Stratigraphic Report',
        // projectGitHub: 'https://github.com/Cgotts1/API-Project',
        projectSite:`${stratigraphicReportPdf}`,
        projectImage: `${stratigraphicReport}`,
        projectSummary: "The excavation of Trench 70 ditch [70007] involved the application of various techniques to explore the archaeological materials within the soil deposits, revealing substantial evidence of human activities, particularly those associated with cooking, which has enriched our comprehension of the history of the Poulton area.",
        projectTech: "🛠 Trowels | Spades | Buckets | Mattocks",
      projectContributers: "Contributors: Penny Briggs, Lynsay Hamilton",

      }
]