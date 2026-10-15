import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
    PageBreak,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_resume(output_path: str, role_title="SOFTWARE ENGINEER & FULL-STACK DEVELOPER"):
    # A4 dimensions: 595.27 x 841.89 points
    # Margins: 36pt (0.5 in) left/right, 24pt top/bottom for balanced 2-page fit
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=24,
        bottomMargin=24,
    )

    styles = getSampleStyleSheet()

    # Professional Slate & Deep Navy Palette
    c_primary = colors.HexColor('#090d16')     # Deep High-Tech Slate
    c_accent = colors.HexColor('#0284c7')      # Professional Tech Blue
    c_sub = colors.HexColor('#475569')         # Slate 600
    c_line = colors.HexColor('#cbd5e1')        # Slate 300
    c_line_accent = colors.HexColor('#0284c7')

    name_style = ParagraphStyle(
        'ResumeName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=19,
        leading=22,
        alignment=TA_CENTER,
        textColor=c_primary,
    )

    title_style = ParagraphStyle(
        'ResumeTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        alignment=TA_CENTER,
        textColor=c_accent,
    )

    contact_style = ParagraphStyle(
        'ResumeContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.3,
        leading=11.5,
        alignment=TA_CENTER,
        textColor=c_sub,
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.8,
        leading=12.2,
        textColor=c_primary,
        spaceBefore=3.5,
        spaceAfter=1,
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.2,
        leading=11,
        alignment=TA_JUSTIFY,
        textColor=c_primary,
    )

    item_title_left = ParagraphStyle(
        'ItemTitleLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=c_primary,
    )

    item_date_right = ParagraphStyle(
        'ItemDateRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11,
        alignment=TA_RIGHT,
        textColor=c_sub,
    )

    item_sub_left = ParagraphStyle(
        'ItemSubLeft',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.8,
        leading=10,
        textColor=c_accent,
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.0,
        leading=10.5,
        alignment=TA_LEFT,
        textColor=c_primary,
        leftIndent=11,
        firstLineIndent=-11,
        spaceAfter=1.5,
    )

    def make_header_row(title_html, meta_html, col1=380, col2=143):
        p_left = Paragraph(title_html, item_title_left)
        p_right = Paragraph(meta_html, item_date_right)
        tbl = Table([[p_left, p_right]], colWidths=[col1, col2])
        tbl.setStyle(TableStyle([
            ('VALIGN', (0, 0), (-1, -1), 'TOP'),
            ('LEFTPADDING', (0, 0), (-1, -1), 0),
            ('RIGHTPADDING', (0, 0), (-1, -1), 0),
            ('TOPPADDING', (0, 0), (-1, -1), 0.5),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 0.5),
        ]))
        return tbl

    story = []

    # ========================================================
    # PAGE 1: HEADER, SUMMARY, SKILLS, FEATURED SOFTWARE PROJECTS
    # ========================================================

    # Header
    story.append(Paragraph("SURYA S", name_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph(f"{role_title.upper()} | B.E. COMPUTER SCIENCE &amp; ENGINEERING", title_style))
    story.append(Spacer(1, 2))

    contact_text = (
        "Coimbatore, Tamil Nadu, India • "
        "Email: <a href='mailto:surya25suresh2006@gmail.com' color='#0284c7'><u>surya25suresh2006@gmail.com</u></a> • "
        "LinkedIn: <a href='https://www.linkedin.com/in/surya-s-755937267/' color='#0284c7'><u>linkedin.com/in/surya-s-755937267</u></a><br/>"
        "GitHub: <a href='https://github.com/Surya252006' color='#0284c7'><u>github.com/Surya252006</u></a> • "
        "Portfolio: <a href='https://surya-s-portfolio-e8625.web.app/' color='#0284c7'><u>surya-s-portfolio-e8625.web.app</u></a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 2.5))
    story.append(HRFlowable(width="100%", thickness=0.8, color=c_line, spaceBefore=1, spaceAfter=2.5))

    # Professional Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))
    summary_text = (
        "Third-year <b>Computer Science and Engineering student at Dhanalakshmi Srinivasan College of Engineering, Coimbatore</b> "
        "passionate about software engineering, full-stack web development, and practical digital products. Demonstrated experience "
        "building live production platforms (<b>PosterKadai</b>, <b>KisanConnect</b>), hackathon solutions (<b>TN Scheme AI at Smartathon '26</b>), "
        "and sensor-driven applications (<b>Smart Fertilization System at Barnstromz 2K26</b>). Strong foundation in Object-Oriented Programming, "
        "Data Structures, REST APIs, and database engineering across Java, Python, JavaScript, TypeScript, React, Node.js, and MongoDB. "
        "Eager to contribute technical competence to software development internships, campus placements, and engineering teams."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 2.5))

    # Technical Skills (COMMA-SEPARATED FOR 100% ATS PARSING)
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))

    skills_data = [
        [
            Paragraph("<b>Programming Languages:</b>", item_title_left),
            Paragraph("Java (Core OOP, Collections), Python, C, C++, JavaScript (ES6+), TypeScript, SQL.", body_style)
        ],
        [
            Paragraph("<b>Frontend Development:</b>", item_title_left),
            Paragraph("React 18, Vite, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive UI/UX Design, DOM Manipulation.", body_style)
        ],
        [
            Paragraph("<b>Backend Development:</b>", item_title_left),
            Paragraph("Node.js, Express.js, FastAPI, RESTful Web Services, JSON APIs, Authentication, Middleware.", body_style)
        ],
        [
            Paragraph("<b>Databases &amp; Cloud:</b>", item_title_left),
            Paragraph("MongoDB Atlas (Atomic Operators, Aggregations), Firebase (Firestore, Hosting), SQLite, MySQL.", body_style)
        ],
        [
            Paragraph("<b>Developer Tools &amp; Hardware:</b>", item_title_left),
            Paragraph("Git, GitHub, Postman, Linux CLI, VS Code, ESP32 Microcontrollers, Arduino, IoT Sensors.", body_style)
        ],
        [
            Paragraph("<b>Core CS Foundations:</b>", item_title_left),
            Paragraph("Data Structures &amp; Algorithms, Object-Oriented System Architecture, Clean Code Principles, SDLC.", body_style)
        ],
    ]

    t_skills = Table(skills_data, colWidths=[130, 393])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0.8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0.8),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 2.5))

    # Featured Projects Section
    story.append(Paragraph("FEATURED SOFTWARE ENGINEERING PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))

    # Project 1: PosterKadai
    story.append(make_header_row(
        "<b>PosterKadai — E-Commerce Storefront &amp; Personalized Print Business</b><br/><i>Technologies: React 18, Firebase Cloud Firestore, Tailwind CSS, WhatsApp Business API</i>",
        "<a href='https://posterkadai-e364b.web.app/' color='#0284c7'><u>Live Web App</u></a>, 2025 – Present"
    ))
    story.append(Paragraph("• Architected and shipped an active production commercial storefront (<a href='https://posterkadai-e364b.web.app/' color='#0284c7'><u>posterkadai-e364b.web.app</u></a>) for customized posters and wall artwork.", bullet_style))
    story.append(Paragraph("• Implemented responsive client-side shopping cart management with instant real-time pricing and dynamic category browsing.", bullet_style))
    story.append(Paragraph("• Integrated automated WhatsApp checkout bridge delivering structured cart payloads directly to order fulfillment, achieving sub-1.2s page load speeds.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 2: KisanConnect
    story.append(make_header_row(
        "<b>KisanConnect — AgriTech Direct Marketplace Platform</b><br/><i>Technologies: React 18, Node.js, Express.js, MongoDB Atlas, Firebase Hosting</i>",
        "<a href='https://kisanconnect-2267e.web.app' color='#0284c7'><u>Live Deployment</u></a>, 2024 – Present"
    ))
    story.append(Paragraph("• Developed a full-stack agricultural marketplace platform eliminating intermediary markups, created as part of the MongoDB Tech-Odyssey initiative.", bullet_style))
    story.append(Paragraph("• Implemented real-time APMC Mandi market price comparison indicators (UP, DOWN, STABLE) allowing growers to benchmark transparent produce valuations.", bullet_style))
    story.append(Paragraph("• Designed race-condition-free inventory decrementing utilizing MongoDB atomic operators ($gte, $inc) across Farmer, Consumer, Retailer, and Admin tiers.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 3: TN Scheme AI
    story.append(make_header_row(
        "<b>TN Scheme AI — Smartathon '26 Government Welfare Discovery Platform</b><br/><i>Technologies: FastAPI, Python, React 18, MongoDB Atlas, Tailwind CSS</i>",
        "<a href='https://github.com/Surya252006/smartathon26dsu' color='#0284c7'><u>Smartathon '26 Hackathon</u></a>, 2026"
    ))
    story.append(Paragraph("• Engineered an automated scheme discovery system during the DSU × ONEYES Smartathon '26 (9–10 September 2026, Problem Statement #6).", bullet_style))
    story.append(Paragraph("• Implemented deterministic rule-matching algorithms evaluating student academic criteria, family income brackets, and demographics against Tamil Nadu state and central scholarship guidelines.", bullet_style))
    story.append(Paragraph("• Built an interactive web dashboard providing eligibility qualification scoring, required document verification checklists, and application deadline alerts.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 4: Smart Precision Fertilization System
    story.append(make_header_row(
        "<b>Smart Precision Fertilization System — IoT Sensor-Based Agriculture</b><br/><i>Technologies: Python, IoT Hardware (ESP32), Machine Learning, FastAPI</i>",
        "<a href='https://github.com/Surya252006' color='#0284c7'><u>Barnstromz 2K26 Expo</u></a>, 2026"
    ))
    story.append(Paragraph("• Designed a sensor-based agriculture telemetry system presented at the Barnstromz 2K26 project expo (11 September 2026).", bullet_style))
    story.append(Paragraph("• Ingested real-time analog and digital telemetry streams from soil NPK, moisture, and pH sensors using ESP32 microcontrollers.", bullet_style))
    story.append(Paragraph("• Evaluated soil conditions against optimal nutrient curves to recommend targeted bio-fertilizer dosages and mitigate environmental chemical runoff.", bullet_style))

    # Page Break to Page 2
    story.append(PageBreak())

    # ========================================================
    # PAGE 2: ADDITIONAL PROJECTS, EXPERIENCE, EDUCATION, ACHIEVEMENTS
    # ========================================================

    story.append(Paragraph("ADDITIONAL TECHNICAL PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))

    # Project 5: Java Bank Management System
    story.append(make_header_row(
        "<b>Java Banking Management System &amp; Ledger Engine</b><br/><i>Technologies: Java (OOP), File Persistence, Input Validation, Collections Framework</i>",
        "<a href='https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-' color='#0284c7'><u>GitHub Repository</u></a>, 2024"
    ))
    story.append(Paragraph("• Implemented a console banking transaction application demonstrating strict Object-Oriented Principles (encapsulation, abstraction, inheritance, polymorphism).", bullet_style))
    story.append(Paragraph("• Built account creation, PIN verification, deposit, withdrawal, and transaction logging routines with balance boundary checks to prevent arithmetic underflows.", bullet_style))
    story.append(Spacer(1, 2))

    # Project 6: Cognifyz Full-Stack Suite
    story.append(make_header_row(
        "<b>Cognifyz Full-Stack Engineering Suite</b><br/><i>Technologies: Node.js, Express.js, REST APIs, JavaScript, Bootstrap, EJS</i>",
        "<a href='https://github.com/Surya252006/cognifyz-fullstack-internship' color='#0284c7'><u>GitHub Repository</u></a>, 2024"
    ))
    story.append(Paragraph("• Completed 5 end-to-end full-stack web application modules with Node.js and Express REST endpoints during internship track.", bullet_style))
    story.append(Paragraph("• Implemented structured payload validation, clean middleware routing, and dynamic client-side interface rendering.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Experience & Internships
    story.append(Paragraph("WORK EXPERIENCE &amp; INTERNSHIPS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))

    # Experience 1: Skypark ITech
    story.append(make_header_row(
        "<b>Digital Marketing &amp; Web Operations Intern</b>, Skypark ITech",
        "11 – 27 August 2025"
    ))
    story.append(Paragraph("• Managed digital marketing initiatives, search engine indexing workflows, and content optimization strategies for web assets.", bullet_style))
    story.append(Paragraph("• Analyzed user engagement metrics and improved online visibility across targeted regional search demographics.", bullet_style))
    story.append(Spacer(1, 2))

    # Experience 2: Cognifyz Technologies
    story.append(make_header_row(
        "<b>Full-Stack Development Intern</b>, Cognifyz Technologies",
        "Remote, 2024"
    ))
    story.append(Paragraph("• Engineered responsive client-side web components and integrated backend RESTful endpoints with Node.js and Express.", bullet_style))
    story.append(Paragraph("• Authored clean, maintainable code following standardized software design principles across 5 production deliverables.", bullet_style))
    story.append(Spacer(1, 2))

    # Experience 3: PosterKadai Founder
    story.append(make_header_row(
        "<b>Founder &amp; Lead Technology Developer</b>, PosterKadai (Custom Art E-Commerce)",
        "Tamil Nadu, India, 2025 – Present"
    ))
    story.append(Paragraph("• Developed and deployed the entire digital product infrastructure on Google Firebase, managing catalog indexing and direct WhatsApp order channels.", bullet_style))
    story.append(Spacer(1, 2))

    # Experience 4: Image Color Lab
    story.append(make_header_row(
        "<b>Program Organizer &amp; Technical Curriculum Lead</b>, Image Color Lab",
        "Online, 2025 – 2026"
    ))
    story.append(Paragraph("• Organized a 15-day technical design and digital assets internship program, mentoring students on digital layouts and design fundamentals.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))

    story.append(make_header_row(
        "<b>Bachelor of Engineering (B.E.) in Computer Science and Engineering</b>",
        "<b>Third-Year (2024 – 2028)</b>"
    ))
    story.append(Paragraph("Dhanalakshmi Srinivasan College of Engineering, Coimbatore, Tamil Nadu, India", item_sub_left))
    story.append(Paragraph("• Affiliated with Anna University. Core Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL &amp; NoSQL), Operating Systems, Computer Networks, Software Engineering.", bullet_style))
    story.append(Paragraph("• Actively building and deploying production software and participating in collegiate technical exhibitions alongside academic curriculum.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Competitions, Exhibitions & Achievements
    story.append(Paragraph("HACKATHONS, EXHIBITIONS &amp; CERTIFICATIONS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=2.5))
    story.append(Paragraph("• <b>Smartathon '26 (DSU &times; ONEYES Hackathon):</b> Participant (9–10 September 2026) — Built <i>TN Scheme AI</i> government scholarship and welfare discovery platform.", bullet_style))
    story.append(Paragraph("• <b>Barnstromz 2K26 Project Expo:</b> Exhibitor (11 September 2026) — Demonstrated the <i>Smart Precision Fertilization System</i> integrating IoT soil sensors and predictive analysis.", bullet_style))
    story.append(Paragraph("• <b>MongoDB Tech-Odyssey:</b> Developed full-stack agricultural direct trade platform <i>KisanConnect</i> utilizing MongoDB Atlas atomic operators.", bullet_style))
    story.append(Paragraph("• <b>IIT Guwahati AI &amp; ML Coursework Qualification:</b> Qualified and completed machine learning foundations under IIT Guwahati E&amp;ICT Academy.", bullet_style))
    story.append(Paragraph("• <b>Full-Stack Development Certification:</b> Verified internship completion certificate from Cognifyz Technologies.", bullet_style))
    story.append(Paragraph("• <b>Open-Source Code Contributions:</b> 450+ verified Git commits across 9 active technical repositories on GitHub (<a href='https://github.com/Surya252006' color='#0284c7'><u>github.com/Surya252006</u></a>).", bullet_style))

    # Build PDF
    doc.build(story)
    print(f"Successfully generated resume PDF at: {output_path}")

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else 'public/resume/Surya_S_Software_Developer_Resume.pdf'
    role = sys.argv[2] if len(sys.argv) > 2 else 'Software Engineer & Full-Stack Developer'
    os.makedirs(os.path.dirname(os.path.abspath(target)), exist_ok=True)
    build_resume(target, role)
