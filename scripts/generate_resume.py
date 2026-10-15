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

def build_resume(output_path: str):
    # A4 dimensions: 595.27 x 841.89 points
    # Margins: 36pt (0.5 in) left/right, 26pt top/bottom for balanced 2-page fit
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=26,
        bottomMargin=26,
    )

    styles = getSampleStyleSheet()

    # Color Palette
    c_primary = colors.HexColor('#090d16')     # Deep High-Tech Slate
    c_accent = colors.HexColor('#0284c7')      # Tech Blue / Cyan
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
        fontSize=10,
        leading=12.5,
        textColor=c_primary,
        spaceBefore=4,
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
    # PAGE 1: HEADER, SUMMARY, SKILLS, AI & ML PROJECTS
    # ========================================================

    # Header
    story.append(Paragraph("SURYA S", name_style))
    story.append(Spacer(1, 1))
    story.append(Paragraph("ARTIFICIAL INTELLIGENCE ENGINEER, B.E. COMPUTER SCIENCE &amp; ENGINEERING", title_style))
    story.append(Spacer(1, 2))

    contact_text = (
        "Coimbatore / Mannargudi, Tamil Nadu, India, "
        "Email: <a href='mailto:surya25suresh2006@gmail.com' color='#0284c7'><u>surya25suresh2006@gmail.com</u></a>, "
        "LinkedIn: <a href='https://www.linkedin.com/in/surya-suresh-755937267/' color='#0284c7'><u>linkedin.com/in/surya-suresh</u></a><br/>"
        "GitHub: <a href='https://github.com/Surya252006' color='#0284c7'><u>github.com/Surya252006</u></a>, "
        "Portfolio: <a href='https://surya-s-portfolio-e8625.web.app/' color='#0284c7'><u>surya-s-portfolio-e8625.web.app</u></a>"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 3))
    story.append(HRFlowable(width="100%", thickness=0.8, color=c_line, spaceBefore=1, spaceAfter=3))

    # Executive Summary
    story.append(Paragraph("EXECUTIVE SUMMARY", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))
    summary_text = (
        "Motivated early-career <b>Artificial Intelligence Engineer</b> and Computer Science undergraduate (B.E. 2024 – 2028) "
        "with demonstrated experience in applied Machine Learning, IoT sensor telemetry ingestion, and scalable full-stack web architectures. "
        "Hands-on in designing healthcare diagnostic triage systems (<b>MedPulse AI</b>), real-time agricultural telemetry classification achieving <b>91.4% accuracy</b>, "
        "and hackathon award solutions (<b>SMARTATHON'26 AI Scheme &amp; Scholarship Matcher</b>). Proficient in Python, PyTorch, TensorFlow, Scikit-Learn, Java, React, FastAPI, Node.js, and MongoDB Atlas. "
        "IIT Guwahati AI &amp; ML Certification qualified, committed to engineering reliable, verified, and human-centric software."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 3))

    # Technical Skills (COMMA-SEPARATED FOR 100% ATS COMPATIBILITY)
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))

    skills_data = [
        [
            Paragraph("<b>AI &amp; Machine Learning:</b>", item_title_left),
            Paragraph("Python, PyTorch, TensorFlow, Scikit-Learn, NumPy, Pandas, Data Preprocessing, Feature Engineering, Supervised Learning, NLP Intent Classification, Model Metrics Evaluation, Predictive Analytics.", body_style)
        ],
        [
            Paragraph("<b>Programming Languages:</b>", item_title_left),
            Paragraph("Python, Java (Core OOP, Collections, Multithreading), C, C++, JavaScript (ES6+), TypeScript, SQL.", body_style)
        ],
        [
            Paragraph("<b>Web &amp; Full-Stack Development:</b>", item_title_left),
            Paragraph("React 18, Vite, Node.js, Express.js, REST APIs, FastAPI (Asynchronous Endpoints), HTML5, CSS3, Tailwind CSS, Bootstrap, EJS.", body_style)
        ],
        [
            Paragraph("<b>Databases &amp; Cloud Tools:</b>", item_title_left),
            Paragraph("MongoDB Atlas (Atomic Operators, Aggregations), Firebase (Firestore, Hosting, Authentication), SQLite, Git, GitHub, Postman.", body_style)
        ],
        [
            Paragraph("<b>Hardware &amp; IoT Telemetry:</b>", item_title_left),
            Paragraph("ESP32 Microcontrollers, Arduino, Physical Sensor Ingestion (NPK, Soil Moisture, pH), Serial Telemetry Streaming, REST Webhooks.", body_style)
        ],
        [
            Paragraph("<b>Core CS Foundations:</b>", item_title_left),
            Paragraph("Data Structures &amp; Algorithms, Object-Oriented System Architecture, Clean Code Principles, Linux CLI, Agile Development.", body_style)
        ],
    ]

    t_skills = Table(skills_data, colWidths=[130, 393])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 3))

    # Applied AI Projects Section
    story.append(Paragraph("FEATURED ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))

    # Project 1: MedPulse AI
    story.append(make_header_row(
        "<b>MedPulse AI — Healthcare Symptom Triage System</b><br/><i>Technologies: Python, PyTorch, TensorFlow, Scikit-Learn, FastAPI, REST APIs</i>",
        "<a href='https://github.com/Surya252006/medplus-ai' color='#0284c7'><u>GitHub Repository</u></a>, 2025"
    ))
    story.append(Paragraph("• Architected an applied clinical symptom classification engine analyzing multi-symptom input vectors to categorize patient urgency levels and risk priorities.", bullet_style))
    story.append(Paragraph("• Implemented lightweight, asynchronous RESTful inference microservices with FastAPI, achieving latency under 150ms for clinical triage scoring and risk categorization.", bullet_style))
    story.append(Paragraph("• Built structured error boundaries and standardized JSON health metric outputs to facilitate seamless interoperability with hospital triage portals.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 2: SMARTATHON'26
    story.append(make_header_row(
        "<b>SMARTATHON'26 — AI Scheme &amp; Scholarship Eligibility Matcher</b><br/><i>Technologies: FastAPI, Python 3.13, React 18, MongoDB Atlas, Tailwind CSS</i>",
        "<a href='https://github.com/Surya252006/smartathon26dsu' color='#0284c7'><u>DSU &times; ONEYES Hackathon</u></a>, 2026"
    ))
    story.append(Paragraph("• Engineered an intelligent scheme-matching engine for SMARTATHON'26 (Problem Statement #6), evaluating student academic, income, and demographic criteria.", bullet_style))
    story.append(Paragraph("• Designed deterministic rule-matching algorithms against central and Tamil Nadu state scholarship catalogs with an automated 96% qualification scoring rubric.", bullet_style))
    story.append(Paragraph("• Developed an interactive React 18 UI with real-time eligibility progress trackers, dynamic document checklists, and application deadline alerts.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 3: Smart Precision Soil Telemetry
    story.append(make_header_row(
        "<b>Smart Precision Soil Telemetry &amp; Crop Recommendation ML</b><br/><i>Technologies: Python, PyTorch, Scikit-Learn, IoT ESP32, FastAPI</i>",
        "<a href='https://github.com/Surya252006' color='#0284c7'><u>IoT &amp; ML Telemetry</u></a>, 2025"
    ))
    story.append(Paragraph("• Built an end-to-end telemetry pipeline streaming real-time physical soil sensor data (nitrogen, phosphorus, potassium, moisture, and pH) via ESP32 microcontrollers.", bullet_style))
    story.append(Paragraph("• Trained multi-parameter classification models achieving 91.4% crop variety compatibility accuracy and precise bio-fertilizer dosage recommendations.", bullet_style))
    story.append(Paragraph("• Mitigated chemical runoff through algorithmic soil health monitoring, visualizing historical fertility trends via responsive web dashboards.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 4: Personal Finance AI Assistant
    story.append(make_header_row(
        "<b>Personal Finance AI Assistant &amp; Conversational Bot</b><br/><i>Technologies: Python, NLP Intent Parsing, Scikit-Learn, React 18</i>",
        "<a href='https://github.com/Surya252006/Personal-Finance-chat-bot' color='#0284c7'><u>GitHub Repository</u></a>, 2024"
    ))
    story.append(Paragraph("• Developed a conversational personal finance assistant utilizing natural language query parsing to categorize spending and suggest budget optimization rules.", bullet_style))
    story.append(Paragraph("• Engineered interactive visual distribution summaries and dynamic savings goal trackers with responsive chat interfaces.", bullet_style))

    # Clean Page Break between Page 1 and Page 2
    story.append(PageBreak())

    # ========================================================
    # PAGE 2: FULL-STACK PROJECTS, WORK EXPERIENCE, EDUCATION, ACHIEVEMENTS
    # ========================================================

    # Full-Stack & Systems Projects
    story.append(Paragraph("FULL-STACK &amp; SYSTEMS ENGINEERING PROJECTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))

    # Project 5: KisanConnect
    story.append(make_header_row(
        "<b>KisanConnect — AgriTech Direct Marketplace Platform</b><br/><i>Technologies: React 18, Node.js, Express.js, MongoDB Atlas, Firebase Hosting</i>",
        "<a href='https://kisanconnect-2267e.web.app' color='#0284c7'><u>kisanconnect-2267e.web.app</u></a>, 2024 – Present"
    ))
    story.append(Paragraph("• Deployed live to production on Firebase Hosting (<a href='https://kisanconnect-2267e.web.app' color='#0284c7'><u>kisanconnect-2267e.web.app</u></a>), directly bridging farmers with bulk and retail buyers to eliminate middleman markups.", bullet_style))
    story.append(Paragraph("• Implemented real-time APMC Mandi price comparison indices, empowering growers to benchmark market trends before listing agricultural produce.", bullet_style))
    story.append(Paragraph("• Engineered race-condition-free inventory decrementing utilizing MongoDB atomic operators ($gte, $inc) across multi-role access tiers (Farmer, Retailer, Admin).", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 6: Console Banking & Ledger Engine
    story.append(make_header_row(
        "<b>Console Banking &amp; Atomic Ledger Engine</b><br/><i>Technologies: Java, OOP Design Patterns, File Persistence, Input Validation</i>",
        "<a href='https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-' color='#0284c7'><u>GitHub Repository</u></a>, 2024"
    ))
    story.append(Paragraph("• Developed an enterprise console banking engine demonstrating strict Object-Oriented Principles (encapsulation, abstraction, inheritance, polymorphism).", bullet_style))
    story.append(Paragraph("• Built an isolated double-entry transaction journal with atomic credit/debit validation, balance guarantees, and permanent file persistence.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Project 7: PosterKadai
    story.append(make_header_row(
        "<b>PosterKadai — Production E-Commerce Storefront</b><br/><i>Technologies: React 18, Firebase Firestore, WhatsApp API, Tailwind CSS</i>",
        "<a href='https://posterkadai-e364b.web.app/' color='#0284c7'><u>posterkadai-e364b.web.app</u></a>, 2025 – Present"
    ))
    story.append(Paragraph("• Shipped production commercial storefront (<a href='https://posterkadai-e364b.web.app/' color='#0284c7'><u>posterkadai-e364b.web.app</u></a>) featuring responsive catalog exploration, instant cart state, and direct WhatsApp checkout integration.", bullet_style))
    story.append(Paragraph("• Optimized frontend assets to sustain sub-1.2s page load speeds with continuous client engagement across regional demographics.", bullet_style))
    story.append(Spacer(1, 3.5))

    # Professional Experience & Internships
    story.append(Paragraph("PROFESSIONAL EXPERIENCE &amp; INTERNSHIPS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))

    # Experience 1: Cognifyz Internship
    story.append(make_header_row(
        "<b>Full-Stack Development Intern</b>, Cognifyz Technologies",
        "Remote, 2024"
    ))
    story.append(Paragraph("• Engineered responsive client-side user interfaces and integrated backend RESTful endpoints with Node.js, Express, and EJS following industry best practices.", bullet_style))
    story.append(Paragraph("• Implemented interactive form validations, asynchronous data fetching pipelines, and modular component architectures across 5 production task deliverables.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Experience 2: PosterKadai Founder
    story.append(make_header_row(
        "<b>Founder &amp; Lead Technology Developer</b>, PosterKadai (Commercial E-Commerce)",
        "Tamil Nadu, India, 2025 – Present"
    ))
    story.append(Paragraph("• Architected the entire digital product infrastructure, cloud hosting (Firebase), database rules (Firestore), and customer WhatsApp order fulfillment pipeline.", bullet_style))
    story.append(Paragraph("• Handled end-to-end technical execution from system architecture to production deployment, managing digital reach and automated catalog pipelines.", bullet_style))
    story.append(Spacer(1, 2.5))

    # Experience 3: Image Color Lab
    story.append(make_header_row(
        "<b>Program Organizer &amp; Technical Curriculum Lead</b>, Image Color Lab",
        "Online, 2025 – 2026"
    ))
    story.append(Paragraph("• Structured and delivered an intensive 15-day online technical and design internship program for creative developers and designers.", bullet_style))
    story.append(Paragraph("• Designed training evaluation frameworks, managed participant operations and certification, and coordinated hands-on project workflows.", bullet_style))
    story.append(Spacer(1, 3.5))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))

    story.append(make_header_row(
        "<b>Bachelor of Engineering (B.E.) in Computer Science and Engineering</b>",
        "<b>2024 – 2028</b>"
    ))
    story.append(Paragraph("Anna University Affiliated Institution, Coimbatore, Tamil Nadu, India", item_sub_left))
    story.append(Paragraph("• Core Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++), Artificial Intelligence Fundamentals, Database Systems (RDBMS &amp; NoSQL), Computer Networks, Operating Systems.", bullet_style))
    story.append(Paragraph("• Active hands-on software development alongside academic curriculum; building and deploying production-grade systems since 1st year.", bullet_style))
    story.append(Spacer(1, 3.5))

    # Honors & Achievements
    story.append(Paragraph("HONORS, CERTIFICATIONS &amp; ACHIEVEMENTS", section_heading))
    story.append(HRFlowable(width="100%", thickness=0.5, color=c_line_accent, spaceBefore=1, spaceAfter=3))
    story.append(Paragraph("• <b>IIT Guwahati AI &amp; ML Certification Qualified:</b> Advanced qualification in applied machine learning, statistical modeling, and neural computing foundations.", bullet_style))
    story.append(Paragraph("• <b>SMARTATHON'26 Hackathon Finalist:</b> DSU &times; ONEYES Hackathon (Problem Statement #6) — Engineered full-stack AI Scholarship &amp; Scheme Matcher.", bullet_style))
    story.append(Paragraph("• <b>Full-Stack Engineering Certification:</b> Completed comprehensive development internship track at Cognifyz Technologies.", bullet_style))
    story.append(Paragraph("• <b>Active Open-Source Builder:</b> 450+ verified Git commits and 9 publicly accessible technical repositories on GitHub (<a href='https://github.com/Surya252006' color='#0284c7'><u>github.com/Surya252006</u></a>).", bullet_style))
    story.append(Paragraph("• <b>Production Deployments:</b> Deployed multiple live applications running 24/7 on Google Cloud / Firebase Hosting with real active users.", bullet_style))

    # Build PDF
    doc.build(story)
    print(f"Successfully generated resume PDF at: {output_path}")

if __name__ == '__main__':
    target = sys.argv[1] if len(sys.argv) > 1 else 'public/resume/Surya_S_AI_Engineer_Resume.pdf'
    os.makedirs(os.path.dirname(os.path.abspath(target)), exist_ok=True)
    build_resume(target)
