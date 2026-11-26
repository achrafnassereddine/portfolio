// 1. Bilingual EN / FR Dictionary
const translations = {
    en: {
        nav_labs: "Labs",
        nav_exp: "Experience",
        nav_cap: "Capabilities",
        nav_edu: "Education",
        nav_contact: "Contact",
        hero_status: "Seeking 4–6 Month Summer 2027 Internship — SOC, Threat Hunting & DFIR (Casablanca / Rabat)",
        hero_title_1: "Cybersecurity Engineer",
        hero_title_2: "focused on SOC, DFIR & DevSecOps.",
        hero_lead: "Computer & Network Engineering student at EMSI Casablanca. I architect detection labs, harden CI/CD pipelines, and audit web & network infrastructures.",
        btn_cv: "Download CV (PDF)",
        btn_email: "Copy Email",
        metric_1: "Wazuh, Sysmon & Velociraptor",
        metric_2: "SAST, DAST, SBOM & Cosign",
        metric_3: "ISO 27001, EBIOS RM & Law 09-08",
        sec_labs: "01 / Featured Security Labs & Architecture",
        all_repos: "All Repositories ↗",
        arch_1: "ARCHITECTURE // TELEMETRY & TRIAGE PIPELINE",
        arch_2: "ARCHITECTURE // SHIFT-LEFT CI/CD SECURITY GATING",
        arch_3: "ARCHITECTURE // 3-NODE HYPERCONVERGED HA CLUSTER",
        arch_4: "ARCHITECTURE // MULTI-TENANT ISOLATION & ALERTING",
        lab1_title: "Purple Team & SOC Detection Lab",
        lab1_desc: "End-to-end detection engineering environment hosted on Proxmox VE. Ingested Windows Sysmon telemetry into Wazuh SIEM, simulated adversary TTPs with MITRE Caldera, wrote custom detection rules, and performed endpoint triage and DFIR investigations using Velociraptor.",
        lab1_focus: "Focus: Detection Engineering, Threat Hunting, Endpoint Forensics",
        lab2_title: "Automated DevSecOps CI/CD Pipeline",
        lab2_desc: "Hardened software delivery pipeline integrating SAST (CodeQL), secret scanning (Gitleaks), container vulnerability scanning (Trivy), DAST (OWASP ZAP), CycloneDX SBOM generation, and cryptographic container signing via Cosign.",
        lab2_focus: "Focus: Shift-Left Security, Supply Chain Integrity, Automated Security Gating",
        lab3_title: "High-Availability Virtualization Cluster",
        lab3_desc: "Deployed and configured a multi-node Proxmox VE cluster backed by Ceph distributed storage to ensure fault tolerance, live VM migration, and segmented network zones for isolated security lab workloads.",
        lab3_focus: "Focus: High Availability, Network Segmentation, Infrastructure Hardening",
        lab4_title: "Multi-Tenant DevSecOps SaaS Platform",
        lab4_desc: "Architected a multi-tenant security posture and vulnerability tracking platform using ASP.NET Core 8, Entity Framework Core, SQL Server, React/TypeScript, and real-time Telegram alerting webhooks.",
        lab4_focus: "Focus: Tenant Isolation, RBAC Authorization, Automated Alerting",
        sec_exp: "02 / Experience",
        exp1_date: "Jun – Aug 2026",
        exp1_role: "Cybersecurity & IT Infrastructure Intern",
        exp1_desc: "Conducted security audits on live web applications, remediating JWT and RBAC vulnerabilities. Deployed a full-stack ERP on cPanel and configured secured local network infrastructure across 10 workstations.",
        exp2_date: "Apr – May 2025",
        exp2_role: "Web Development & Security Intern",
        exp2_desc: "Developed an asset identification and maintenance tracking platform using Laravel API, ReactJS, and Laravel Sanctum, embedding authentication and access-control hardening from design.",
        exp3_role: "Full-Stack Developer Intern",
        exp3_desc: "Implemented a secure authentication interface and library management system using PHP and ReactJS.",
        sec_cap: "03 / Capabilities & Frameworks",
        cap1_title: "SOC, DFIR & Blue Team",
        cap2_title: "DevSecOps & Cloud Infrastructure",
        cap3_title: "GRC & Regulatory Compliance",
        cap3_desc: "ISO 27001, ISO 27005, EBIOS RM, Moroccan Law 09-08 (CNDP), DGSSI Security Guidelines",
        cap4_title: "AppSec & Software Engineering",
        sec_edu: "04 / Education",
        edu1_title: "Engineer's Degree — Computer & Network Engineering",
        edu1_desc: "Specialization in Cybersecurity & Network Infrastructures.",
        edu2_title: "Licence — Cybersecurity & Digital Trust",
        edu2_desc: "SIEM & SOC architecture, CTI, DFIR, ethical hacking, and security auditing.",
        edu3_title: "DUT — Computer Engineering",
        edu3_desc: "Software engineering, relational databases, system administration, and networking.",
        sec_extra: "05 / Practice, Leadership & Languages",
        ext1_title: "CTFs & Labs",
        ext1_desc: "Moroccan African Cybersecurity Challenge (MACC 2026), TryHackMe, Hack The Box, PicoCTF.",
        ext2_title: "Leadership",
        ext2_desc: "CFC Campus Site Coordinator — Lions Club EMSI (member onboarding & campus events).",
        ext3_title: "Languages",
        ext3_desc: "Arabic (Native), French (Fluent — spoken & written), English (Fluent — spoken & written).",
        footer_title: "Open for Summer 2027 SOC & DFIR internships.",
        footer_sub: "Casablanca & Rabat, Morocco — On-site or Hybrid",
        kbd_hint: "Keys: [1–5] Navigate · [L] EN/FR",
        back_top: "Back to top ↑",
        toast_copied: "Email copied to clipboard",
        toast_lang: "Language switched to English"
    },
    fr: {
        nav_labs: "Labs",
        nav_exp: "Expérience",
        nav_cap: "Compétences",
        nav_edu: "Formation",
        nav_contact: "Contact",
        hero_status: "Recherche Stage d'Été 2027 (4–6 mois) — SOC, Threat Hunting & DFIR (Casablanca / Rabat)",
        hero_title_1: "Ingénieur Cybersécurité",
        hero_title_2: "orienté SOC, DFIR & DevSecOps.",
        hero_lead: "Élève-ingénieur en Informatique & Réseaux à l'EMSI Casablanca. Je conçois des labs de détection, sécurise les pipelines CI/CD et audite les infrastructures web et réseau.",
        btn_cv: "Télécharger le CV (PDF)",
        btn_email: "Copier l'Email",
        metric_1: "Wazuh, Sysmon & Velociraptor",
        metric_2: "SAST, DAST, SBOM & Cosign",
        metric_3: "ISO 27001, EBIOS RM & Loi 09-08",
        sec_labs: "01 / Labs de Sécurité & Architectures",
        all_repos: "Tous les dépôts GitHub ↗",
        arch_1: "ARCHITECTURE // FLUX DE TÉLÉMÉTRIE & TRIAGE",
        arch_2: "ARCHITECTURE // CONTRÔLES DE SÉCURITÉ CI/CD",
        arch_3: "ARCHITECTURE // CLUSTER HYPERCONVERGÉ 3 NŒUDS",
        arch_4: "ARCHITECTURE // ISOLATION MULTI-TENANT & ALERTING",
        lab1_title: "Lab Purple Team & Détection SOC",
        lab1_desc: "Environnement complet d'ingénierie de détection hébergé sur Proxmox VE. Collecte de télémétrie Windows Sysmon vers Wazuh SIEM, simulation de TTPs avec MITRE Caldera, écriture de règles de détection et investigation DFIR via Velociraptor.",
        lab1_focus: "Focus : Ingénierie de détection, Threat Hunting, Forensique Endpoint",
        lab2_title: "Pipeline CI/CD DevSecOps Automatisé",
        lab2_desc: "Chaîne de livraison logicielle sécurisée intégrant SAST (CodeQL), détection de secrets (Gitleaks), scan de conteneurs (Trivy), DAST (OWASP ZAP), génération de SBOM CycloneDX et signature cryptographique via Cosign.",
        lab2_focus: "Focus : Sécurité Shift-Left, Intégrité Supply Chain, Contrôles Automatisés",
        lab3_title: "Cluster de Virtualisation Haute Disponibilité",
        lab3_desc: "Déploiement et configuration d'un cluster Proxmox VE multi-nœuds avec stockage distribué Ceph assurant la tolérance aux pannes, la migration à chaud et la segmentation réseau des environnements de lab.",
        lab3_focus: "Focus : Haute Disponibilité, Segmentation Réseau, Durcissement Système",
        lab4_title: "Plateforme SaaS DevSecOps Multi-Tenant",
        lab4_desc: "Conception d'une plateforme multi-tenant de suivi de posture de sécurité et de vulnérabilités avec ASP.NET Core 8, Entity Framework Core, SQL Server, React/TypeScript et alertes temps réel via Telegram.",
        lab4_focus: "Focus : Isolation Multi-Tenant, Contrôle d'Accès RBAC, Alerting Automatisé",
        sec_exp: "02 / Expérience Professionnelle",
        exp1_date: "Juin – Août 2026",
        exp1_role: "Stagiaire Cybersécurité & Infrastructure IT",
        exp1_desc: "Audits de sécurité d'applications web en production et remédiation de failles JWT et RBAC. Déploiement d'un ERP full-stack sur cPanel et sécurisation du réseau local pour 10 postes de travail.",
        exp2_date: "Avr – Mai 2025",
        exp2_role: "Stagiaire Développement Web & Sécurité",
        exp2_desc: "Développement d'une plateforme d'identification et de suivi de maintenance des actifs via Laravel API, ReactJS et Laravel Sanctum, intégrant le durcissement de l'authentification dès la conception.",
        exp3_role: "Stagiaire Développeur Full-Stack",
        exp3_desc: "Conception et implémentation d'une interface d'authentification sécurisée et d'un système de gestion de bibliothèque avec PHP et ReactJS.",
        sec_cap: "03 / Compétences & Référentiels",
        cap1_title: "SOC, DFIR & Blue Team",
        cap2_title: "DevSecOps & Infrastructure Cloud",
        cap3_title: "GRC & Conformité Réglementaire",
        cap3_desc: "ISO 27001, ISO 27005, EBIOS RM, Loi Marocaine 09-08 (CNDP), Directives de Sécurité DGSSI",
        cap4_title: "AppSec & Génie Logiciel",
        sec_edu: "04 / Formation Académique",
        edu1_title: "Cycle Ingénieur — Informatique & Réseaux",
        edu1_desc: "Spécialisation en Cybersécurité & Infrastructures Réseaux.",
        edu2_title: "Licence — Cybersécurité & Confiance Numérique",
        edu2_desc: "Architecture SIEM & SOC, CTI, DFIR, hacking éthique et audit de sécurité.",
        edu3_title: "DUT — Génie Informatique",
        edu3_desc: "Génie logiciel, bases de données relationnelles, administration système et réseaux.",
        sec_extra: "05 / Pratique, Leadership & Langues",
        ext1_title: "CTFs & Labs",
        ext1_desc: "Moroccan African Cybersecurity Challenge (MACC 2026), TryHackMe, Hack The Box, PicoCTF.",
        ext2_title: "Leadership Associatif",
        ext2_desc: "Responsable de site CFC — Lions Club EMSI (intégration des membres et organisation d'événements).",
        ext3_title: "Langues",
        ext3_desc: "Arabe (Langue maternelle), Français (Courant — écrit et parlé), Anglais (Courant — écrit et parlé).",
        footer_title: "Disponible pour un stage d'été 2027 en SOC & DFIR.",
        footer_sub: "Casablanca & Rabat, Maroc — Présentiel ou Hybride",
        kbd_hint: "Touches : [1–5] Navigation · [L] EN/FR",
        back_top: "Haut de page ↑",
        toast_copied: "Adresse email copiée",
        toast_lang: "Langue passée en Français"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

function applyLanguage(lang, notify = false) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    const switcher = document.querySelector('.lang-switch');
    if (switcher) switcher.setAttribute('data-active', lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.body.classList.add('lang-fading');
    setTimeout(() => {
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.body.classList.remove('lang-fading');
        if (notify) showToast(translations[lang].toast_lang);
    }, 150);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-lang');
        if (selected !== currentLang) applyLanguage(selected, true);
    });
});

if (currentLang !== 'en') applyLanguage(currentLang, false);

// 2. GSAP Motion Choreography
gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
heroTl
    .fromTo(".hero-line",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.12 }
    )
    .fromTo(".hero-anim",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
        "-=0.5"
    );

document.querySelectorAll('.reveal-section').forEach((section) => {
    const cards = section.querySelectorAll('.repo-item, .row, .cap-col');
    gsap.fromTo(section,
        { y: 24, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 86%", once: true }
        }
    );

    if (cards.length) {
        gsap.fromTo(cards,
            { y: 16, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: { trigger: section, start: "top 82%", once: true }
            }
        );
    }
});

// 3. Magnetic Buttons & Spotlight Hover
document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
        gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
    });
});

const cursorDot = document.querySelector('.cursor-dot');
window.addEventListener('mousemove', (e) => {
    if (cursorDot) {
        cursorDot.style.opacity = '1';
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    }

    document.querySelectorAll('.spotlight-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

// 4. Scroll Progress & Active Section
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;
}, { passive: true });

const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((sec) => navObserver.observe(sec));

// 5. Mobile Drawer Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// 6. Expandable Labs Accordion
document.querySelectorAll('.repo-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.repo-item.open').forEach((openItem) => {
            openItem.classList.remove('open');
            openItem.querySelector('.repo-trigger').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// 7. One-Click Email Copy & Keyboard Shortcuts (1-5, L)
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
        const email = copyBtn.getAttribute('data-email');
        try {
            await navigator.clipboard.writeText(email);
            showToast(translations[currentLang].toast_copied);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    });
}

const shortcutMap = {
    '1': '#projects',
    '2': '#experience',
    '3': '#capabilities',
    '4': '#education',
    '5': '#contact'
};

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (shortcutMap[e.key]) {
        const target = document.querySelector(shortcutMap[e.key]);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key.toLowerCase() === 'l') {
        applyLanguage(currentLang === 'en' ? 'fr' : 'en', true);
    }
});

// 8. Minimalist Network Topology Canvas in Hero
(function initNetworkCanvas() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, nodes = [], pulses = [];
    const mouse = { x: -9999, y: -9999 };

    function resize() {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
        const count = Math.min(34, Math.floor((width * height) / 24000));
        nodes = Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28
        }));
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    resize();

    setInterval(() => {
        if (nodes.length < 2 || pulses.length > 3) return;
        const a = Math.floor(Math.random() * nodes.length);
        for (let b = 0; b < nodes.length; b++) {
            if (a !== b) {
                const dist = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
                if (dist < 170) {
                    pulses.push({ a, b, progress: 0 });
                    break;
                }
            }
        }
    }, 1400);

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < nodes.length; i++) {
            const n = nodes[i];
            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;

            for (let j = i + 1; j < nodes.length; j++) {
                const m = nodes[j];
                const dist = Math.hypot(n.x - m.x, n.y - m.y);
                if (dist < 160) {
                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);
                    ctx.lineTo(m.x, m.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 160) * 0.08})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }

            const mDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
            if (mDist < 180) {
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(227, 6, 19, ${(1 - mDist / 180) * 0.22})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
            ctx.fill();
        }

        for (let i = pulses.length - 1; i >= 0; i--) {
            const p = pulses[i];
            p.progress += 0.025;
            if (p.progress >= 1) {
                pulses.splice(i, 1);
                continue;
            }
            const start = nodes[p.a];
            const end = nodes[p.b];
            const px = start.x + (end.x - start.x) * p.progress;
            const py = start.y + (end.y - start.y) * p.progress;

            ctx.beginPath();
            ctx.arc(px, py, 2.2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(227, 6, 19, 0.85)';
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }

    draw();
})();



// 10. Architecture Diagram Lightbox & Ctrl+K Analyst Utility (SHA-256 + JWT)
(function initSecurityModals() {
    const backdrop = document.createElement('div');
    backdrop.className = 'sec-modal-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.innerHTML = `
        <div class="sec-modal-box" id="secModalBox">
            <div class="sec-modal-header">
                <div class="sec-modal-title"><span class="sec-modal-dot"></span><span id="secModalHeading">ANALYST UTILITY</span></div>
                <button type="button" class="sec-modal-close" id="secModalClose">ESC</button>
            </div>
            <div id="secModalBody"></div>
        </div>
    `;
    document.body.appendChild(backdrop);

    const modalBox = document.getElementById('secModalBox');
    const modalHeading = document.getElementById('secModalHeading');
    const modalBody = document.getElementById('secModalBody');
    const closeBtn = document.getElementById('secModalClose');

    function closeModal() {
        backdrop.classList.remove('is-open');
        modalBox.classList.remove('is-wide');
        modalBody.innerHTML = '';
    }

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
    });

    // Click-to-expand for architecture SVGs
    document.querySelectorAll('svg').forEach((svg) => {
        const vb = svg.getAttribute('viewBox');
        if (!vb) return;
        const parts = vb.trim().split(/[\s,]+/).map(Number);
        if (parts.length === 4 && parts[2] >= 300) {
            svg.addEventListener('click', () => {
                modalBox.classList.add('is-wide');
                modalHeading.textContent = 'ARCHITECTURE TELEMETRY VIEW';
                modalBody.innerHTML = '<div class="sec-lightbox-stage"></div>';
                const clone = svg.cloneNode(true);
                modalBody.firstChild.appendChild(clone);
                backdrop.classList.add('is-open');
            });
        }
    });

    // Ctrl+K / Cmd+K Analyst Utility (SHA-256 Hasher & JWT Decoder)
    async function sha256Hex(str) {
        const data = new TextEncoder().encode(str);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        return Array.from(new Uint8Array(hashBuffer))
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('');
    }

    function decodeJwt(token) {
        const parts = token.trim().split('.');
        if (parts.length < 2) return 'Invalid JWT format (expected header.payload.signature)';
        try {
            const b64Decode = (s) => {
                const norm = s.replace(/-/g, '+').replace(/_/g, '/');
                const padded = norm + '='.repeat((4 - (norm.length % 4)) % 4);
                return JSON.parse(atob(padded));
            };
            return JSON.stringify({ header: b64Decode(parts[0]), payload: b64Decode(parts[1]) }, null, 2);
        } catch {
            return 'Unable to decode Base64URL JSON segments.';
        }
    }

    function openAnalystPalette() {
        modalBox.classList.remove('is-wide');
        modalHeading.textContent = 'CLIENT-SIDE ANALYST UTILITY // CTRL+K';
        modalBody.innerHTML = `
            <div class="sec-tabs">
                <button type="button" class="sec-tab active" data-mode="sha256">SHA-256 Hash</button>
                <button type="button" class="sec-tab" data-mode="jwt">JWT Inspector</button>
            </div>
            <textarea class="sec-textarea" id="secInput" placeholder="Enter IOC string, artifact text, or paste a JWT token..."></textarea>
            <div class="sec-output" id="secOutput">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
        `;
        backdrop.classList.add('is-open');

        let mode = 'sha256';
        const input = document.getElementById('secInput');
        const output = document.getElementById('secOutput');
        input.focus();

        async function updateOutput() {
            if (mode === 'sha256') {
                output.textContent = await sha256Hex(input.value);
            } else {
                output.textContent = input.value.trim() ? decodeJwt(input.value) : 'Paste a JWT token above to inspect header & claims locally.';
            }
        }

        modalBody.querySelectorAll('.sec-tab').forEach((tab) => {
            tab.addEventListener('click', () => {
                modalBody.querySelectorAll('.sec-tab').forEach((t) => t.classList.remove('active'));
                tab.classList.add('active');
                mode = tab.dataset.mode;
                updateOutput();
            });
        });

        input.addEventListener('input', updateOutput);
    }

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (backdrop.classList.contains('is-open')) {
                closeModal();
            } else {
                openAnalystPalette();
            }
        } else if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
            closeModal();
        }
    });
})();