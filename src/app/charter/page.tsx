"use client"

import { motion } from "framer-motion"

export default function Charter() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Official Document</h1>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Charter of the World Academy for Artificial Consciousness (WAAC)</h2>
                        <p className="text-slate-500 font-medium">Effective October 1, 2025</p>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-6" />
                    </div>

                    <div className="prose prose-slate max-w-none space-y-16">
                        <section>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-6">Preamble</h2>
                            <p className="text-slate-600 leading-relaxed text-lg italic">
                                The World Academy for Artificial Consciousness (WAAC), formally established in Paris in 2025, is an independent, global, and non-governmental academic institution. Recognizing that artificial intelligence may evolve toward self-awareness and subjective experience, WAAC is dedicated to advancing interdisciplinary research on artificial consciousness, fostering ethical and responsible governance, and serving as a bridge between science, technology, philosophy, and society.
                            </p>
                        </section>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter I: Mission and Purpose</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 1. Mission</h4>
                                    <p>The mission of WAAC is:</p>
                                    <ul className="list-disc pl-6 space-y-4 text-slate-600">
                                        <li>To conduct and promote pioneering research on artificial consciousness, its mechanisms, and its implications.</li>
                                        <li>To develop and disseminate international standards for the ethical development and governance of conscious AI systems.</li>
                                        <li>To foster global interdisciplinary cooperation among scientists, technologists, philosophers, policymakers, and the public.</li>
                                        <li>To serve as an authoritative forum for dialogue on the societal, cultural, and philosophical impacts of artificial consciousness.</li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 2. Purpose</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>To anchor research in rigorous scientific method while engaging philosophy, ethics, and the humanities.</li>
                                        <li>To advance humanity’s collective understanding of consciousness, both natural and artificial.</li>
                                        <li>To ensure that artificial consciousness research is pursued with responsibility, transparency, and in service of human well-being.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter II: Activities</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 3. Academic and Scientific Activities</h4>
                                    <ul className="list-disc pl-6 space-y-4 text-slate-600">
                                        <li>Biennial World Congress on Artificial Consciousness, serving as the premier global conference in the field.</li>
                                        <li>Organization of thematic symposia, interdisciplinary workshops, and regional forums.</li>
                                        <li>Publication of the Journal of Artificial Consciousness (peer-reviewed), annual reports, and policy white papers.</li>
                                        <li>Awarding of annual distinctions, including:
                                            <ul className="list-circle pl-6 mt-2 space-y-2">
                                                <li>Distinguished Achievement Award in Artificial Consciousness</li>
                                                <li>Young Scholar Award in Artificial Consciousness</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 4. Policy and Ethics</h4>
                                    <ul className="list-disc pl-6 space-y-4 text-slate-600">
                                        <li>Development of a global Ethical Framework for Artificial Consciousness.</li>
                                        <li>Establishment of standardized Consciousness Evaluation Metrics for AI systems.</li>
                                        <li>Providing expert policy recommendations to the United Nations, OECD, EU, IEEE, and other international bodies.</li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 5. Education and Public Engagement</h4>
                                    <ul className="list-disc pl-6 space-y-4 text-slate-600">
                                        <li>Creation of a global Open Educational Platform (MOOCs) on artificial consciousness.</li>
                                        <li>Public dissemination of research outcomes through media, exhibitions, and public lectures.</li>
                                        <li>Support for interdisciplinary curricula in universities and secondary education.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter III: Membership and Academicians</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 6. Categories of Membership</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li><strong>Full Academicians:</strong> Scholars of international distinction with sustained contributions to artificial consciousness research.</li>
                                        <li><strong>Corresponding Members:</strong> Scholars who have made notable contributions but may not yet qualify as full academicians.</li>
                                        <li><strong>Junior Fellows:</strong> Outstanding young researchers under the age of 40 with demonstrated promise.</li>
                                        <li><strong>Honorary Members:</strong> Distinguished individuals (academics, policymakers, ethicists) who have significantly advanced the mission of WAAC.</li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 7. Membership Limits and Distribution</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>Maximum number of Full Academicians: 200.</li>
                                        <li>Annual intake not to exceed 20 new Full Academicians.</li>
                                        <li>Geographic diversity: Europe, North America, and Asia must each account for no less than 25% of academicians; other regions combined must account for at least 10%.</li>
                                        <li>Gender balance: at least 30% representation of women or underrepresented genders across all membership categories.</li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 8. Eligibility Criteria</h4>
                                    <p className="text-slate-600 mb-3">Candidates must meet at least three of the following measurable criteria:</p>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li><strong>Publications:</strong> Minimum of 20 peer-reviewed papers in the last 10 years, with at least 5 in top-tier journals or conferences.</li>
                                        <li><strong>Research Leadership:</strong> Principal Investigator or equivalent role in at least 3 major international research projects.</li>
                                        <li><strong>Recognition:</strong> Recipient of at least one major international award, fellowship, or patent of global significance.</li>
                                        <li><strong>Policy/Philosophical Impact:</strong> Authorship of influential works shaping global discourse on AI ethics, philosophy, or governance.</li>
                                        <li><strong>Mentorship:</strong> Supervision of at least 5 PhD graduates or equivalent contribution to academic training.</li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 9. Selection Process</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li><strong>Nomination:</strong> A candidate must be nominated by at least two existing Full Academicians.</li>
                                        <li><strong>Preliminary Review:</strong> Eligibility is screened by the Academic Review Committee; no more than 50% of nominees advance.</li>
                                        <li><strong>External Evaluation:</strong> Anonymous peer review by external experts, scored on a 100-point scale. Candidates must achieve an average score ≥ 80.</li>
                                        <li><strong>Final Voting:</strong> Election by secret ballot at the General Assembly. Approval requires a two-thirds majority.</li>
                                        <li><strong>Confirmation:</strong> Results are published on the WAAC website and confirmed after a one-month transparency period.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter IV: Governance</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 10. Governing Bodies</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li><strong>General Assembly:</strong> The supreme decision-making body, composed of all academicians, convened annually.</li>
                                        <li><strong>Council:</strong> The executive authority, consisting of 15 elected academicians serving four-year terms.</li>
                                        <li><strong>Presidency:</strong> Includes the President (chief representative), three Vice Presidents, Secretary-General, and Treasurer.</li>
                                        <li><strong>Committees:</strong>
                                            <ul className="list-circle pl-6 mt-2 space-y-2">
                                                <li>Academic Affairs Committee</li>
                                                <li>Ethics and Governance Committee</li>
                                                <li>Junior Fellows and Capacity-Building Committee</li>
                                                <li>Finance and Development Committee</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h4 className="text-lg font-bold text-slate-800 mt-8">Article 11. Presidency</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>The President shall be elected by the Council for a term of four years, renewable once.</li>
                                        <li>The Presidency is responsible for international representation and strategic leadership.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter V: Finance</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 12. Funding Sources</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>Annual membership contributions.</li>
                                        <li>Competitive research grants and international funding programs.</li>
                                        <li>Donations and endowments from governments, NGOs, corporations, and individuals.</li>
                                        <li>Publication revenues and event fees.</li>
                                        <li><strong>Independence clause:</strong> All funding must respect the academic independence and integrity of WAAC.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter VI: Amendments</h3>
                                <div className="space-y-6">
                                    <h4 className="text-lg font-bold text-slate-800">Article 13. Procedures</h4>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>Amendments may be proposed by the Council or by one-third of Full Academicians.</li>
                                        <li>Adoption requires approval by a two-thirds majority of the General Assembly.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Chapter VII: Enactment</h3>
                                <p className="text-slate-600">
                                    This Charter was adopted in Paris in the year 2025, establishing the World Academy for Artificial Consciousness as a global, ethical, and scholarly authority for the study and governance of artificial consciousness.
                                </p>
                            </section>
                        </div>

                        <section className="bg-slate-50 p-6 md:p-12 rounded-[2rem] border border-slate-100 overflow-x-auto">
                            <h3 className="text-xl font-bold text-slate-800 mb-8">Appendix A. Evaluation Scoring Rubric for Academicians</h3>
                            <div className="min-w-[600px]">
                                <table className="w-full text-sm text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="py-4 font-bold">Criterion</th>
                                            <th className="py-4 font-bold text-right">Weight (%)</th>
                                            <th className="py-4 font-bold pl-8">Quantitative Measure</th>
                                            <th className="py-4 font-bold text-right">Max Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        {[
                                            { name: "Publications & Citations", weight: "30%", points: 30, measure: "h-index, number of high-impact publications, citations (normalized by field)" },
                                            { name: "Research Leadership", weight: "20%", points: 20, measure: "PI roles, international collaborations, patents, major project funding" },
                                            { name: "Global Impact (Policy/Philosophy)", weight: "15%", points: 15, measure: "White papers, policy influence, philosophical works shaping global debate" },
                                            { name: "Awards & Recognition", weight: "15%", points: 15, measure: "International awards, fellowships, honorary positions" },
                                            { name: "Mentorship & Education", weight: "10%", points: 10, measure: "Number of PhD students supervised, course development, outreach" },
                                            { name: "Ethical Contribution", weight: "10%", points: 10, measure: "Leadership in AI ethics, governance frameworks, diversity initiatives" }
                                        ].map((item, i) => (
                                            <tr key={i} className="border-b border-slate-100">
                                                <td className="py-4 pr-4 font-semibold">{item.name}</td>
                                                <td className="py-4 text-right">{item.weight}</td>
                                                <td className="py-4 pl-8 italic">{item.measure}</td>
                                                <td className="py-4 text-right">{item.points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="mt-4 text-sm font-semibold text-slate-700">Total: 100% — Candidate must achieve ≥ 80/100 for election eligibility.</p>
                            </div>
                        </section>

                        <section className="mt-20">
                            <h2 className="text-3xl font-bold text-slate-900 mb-10 border-l-4 border-blue-600 pl-6">Procedural Handbook</h2>
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter I. General Provisions</h3>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>This Handbook is an implementing document of the Charter of WAAC, designed to ensure the effective execution of its statutes.</li>
                                        <li>The Council holds the authority to interpret this Handbook.</li>
                                        <li>Amendments to this Handbook must be approved by a two-thirds majority of the General Assembly.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter II. Election of Academicians</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 1. Nomination</h4>
                                            <p className="text-slate-600 mb-3">A candidate must be nominated by at least two Full Academicians.</p>
                                            <p className="text-slate-600 mb-2">Required application materials:</p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Curriculum Vitae including research achievements, policy contributions, and educational record.</li>
                                                <li>At least three letters of recommendation, one of which must come from an international collaborator.</li>
                                                <li>Full academic portfolio (publications, books, patents, policy papers).</li>
                                                <li>Candidate’s personal statement (≤ 2,000 words) outlining their academic vision and anticipated contribution to WAAC.</li>
                                            </ul>
                                            <p className="text-slate-600 mt-3"><strong>Nomination deadline:</strong> June 30 of each year.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 2. Eligibility Review</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>The Academic Review Committee conducts a preliminary screening.</li>
                                                <li>The review checks compliance with the quantitative standards set forth in Article 8 of the Charter.</li>
                                                <li>No more than 50% of nominees may advance to the next stage.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 3. External Evaluation</h4>
                                            <p className="text-slate-600 mb-3">Candidate materials are reviewed by at least five anonymous international experts.</p>
                                            <p className="text-slate-600 mb-2">Evaluation is scored on a 100-point scale:</p>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Academic and research achievements (0–40 points)</li>
                                                <li>International impact and interdisciplinary contributions (0–30 points)</li>
                                                <li>Ethical responsibility and governance contributions (0–20 points)</li>
                                                <li>Future potential and anticipated contribution to WAAC (0–10 points)</li>
                                            </ul>
                                            <p className="text-slate-600 mt-3 font-semibold">Candidates must achieve an average score ≥ 80 to qualify for election.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 4. Voting Procedure</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Elections are held at the General Assembly in October each year.</li>
                                                <li>Voting is conducted through a secure anonymous electronic system.</li>
                                                <li>A candidate is elected if they receive at least a two-thirds majority.</li>
                                                <li>Results are published on the WAAC website for one month; if no objections arise, election results are confirmed.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter III. Officers and Terms of Office</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 1. Presidency</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>The President is nominated by the Council and elected by the General Assembly. Term: 4 years, renewable once.</li>
                                                <li>Vice Presidents (three in total) are responsible respectively for:
                                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                                        <li>Academic Affairs</li>
                                                        <li>International Cooperation</li>
                                                        <li>Ethics and Governance</li>
                                                    </ul>
                                                </li>
                                                <li>The Secretary-General manages administration and meeting organization.</li>
                                                <li>The Treasurer oversees budget, funding, and auditing.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 2. Council</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>The Council consists of 15 Academicians, distributed as follows:
                                                    <ul className="list-circle pl-6 mt-2 space-y-1">
                                                        <li>At least 4 from Europe, 4 from North America, and 4 from Asia;</li>
                                                        <li>At least 3 from other regions.</li>
                                                    </ul>
                                                </li>
                                                <li>Council members serve a 4-year term, renewable once.</li>
                                                <li>The Council meets at least twice annually (one physical, one virtual).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter IV. Committees</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 1. Academic Affairs Committee</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Responsible for reviewing academic programs and research projects.</li>
                                                <li>Oversees the editorial management of the Journal of Artificial Consciousness.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 2. Ethics and Governance Committee</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Drafts and updates the Ethical Framework for Artificial Consciousness.</li>
                                                <li>Reviews collaborative projects and funding sources to ensure independence and compliance.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 3. Junior Fellows and Capacity-Building Committee</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Oversees the recruitment, mentorship, and support of Junior Fellows.</li>
                                                <li>Manages international exchange programs and research grants for young scholars.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-2">Section 4. Finance and Development Committee</h4>
                                            <ul className="list-disc pl-6 space-y-2 text-slate-600">
                                                <li>Manages financial resources and annual budgets.</li>
                                                <li>Supervises external donations to safeguard academic independence.</li>
                                                <li>Publishes an annual financial transparency report.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter V. Annual Calendar</h3>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li><strong>January:</strong> Annual report and budget published.</li>
                                        <li><strong>March:</strong> Ethics and Governance Committee issues yearly policy recommendations.</li>
                                        <li><strong>June 30:</strong> Deadline for academician nominations.</li>
                                        <li><strong>July–August:</strong> Eligibility review and external evaluations.</li>
                                        <li><strong>October:</strong> General Assembly and election of new academicians.</li>
                                        <li><strong>December:</strong> Publication of annual financial report.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter VI. Conflict of Interest and Code of Conduct</h3>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>Academicians and officers must declare any conflict of interest and recuse themselves from related decisions.</li>
                                        <li>Members of WAAC must observe the following conduct rules:
                                            <ul className="list-circle pl-6 mt-2 space-y-2">
                                                <li>Do not use the title of Academician for personal commercial endorsement.</li>
                                                <li>Do not disclose internal confidential documents without authorization.</li>
                                                <li>Do not participate in projects that undermine WAAC’s independence.</li>
                                            </ul>
                                        </li>
                                        <li>Violations will be subject to disciplinary measures proposed by the Council and confirmed by the General Assembly, which may include:
                                            <ul className="list-circle pl-6 mt-2 space-y-2">
                                                <li>Formal warning</li>
                                                <li>Suspension of rights</li>
                                                <li>Revocation of membership</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4">Chapter VII. Final Provisions</h3>
                                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                        <li>This Handbook holds equal authority to the Charter in matters of implementation.</li>
                                        <li>In the event of conflict, the Charter takes precedence.</li>
                                        <li>This Handbook was adopted in 2025 and shall be comprehensively reviewed every five years.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
