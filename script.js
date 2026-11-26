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
        kbd_hint: "Keys: [1–5] Navigate · [L] EN/FR · [Ctrl+K] Tools · [`] Shell",
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
        kbd_hint: "Touches : [1–5] Naviguer · [L] EN/FR · [Ctrl+K] Outils · [`] Shell",
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

    function transformIoc(raw) {
        const s = raw.trim();
        if (!s) return 'Paste a URL, IPv4, or domain to defang (or paste a defanged IOC to refang).';
        const isDefanged = /hxxps?:\/\/|\[\.\]|\[:\]/i.test(s);
        if (isDefanged) {
            return '[REFANGED]\n' + s
                .replace(/hxxps:\/\//gi, 'https://')
                .replace(/hxxp:\/\//gi, 'http://')
                .replace(/\[\.\]/g, '.')
                .replace(/\[:\]/g, ':');
        }
        return '[DEFANGED]\n' + s
            .replace(/https:\/\//gi, 'hxxps://')
            .replace(/http:\/\//gi, 'hxxp://')
            .replace(/\./g, '[.]');
    }

    function decodeBase64Smart(raw) {
        const clean = raw.trim().replace(/\s+/g, '');
        if (!clean) return 'Paste Base64 or PowerShell -EncodedCommand payload to decode locally.';
        try {
            const bin = atob(clean);
            // Detect UTF-16LE (common in PowerShell -EncodedCommand where every 2nd byte is 0x00)
            let zeroCount = 0;
            for (let i = 1; i < bin.length; i += 2) {
                if (bin.charCodeAt(i) === 0) zeroCount++;
            }
            if (bin.length >= 4 && zeroCount > bin.length / 4) {
                const bytes = new Uint8Array(bin.length);
                for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
                return '[UTF-16LE / PowerShell Decoded]\n' + new TextDecoder('utf-16le').decode(bytes);
            }
            return '[UTF-8 / ASCII Decoded]\n' + bin;
        } catch {
            return 'Invalid Base64 input.';
        }
    }

    function openAnalystPalette() {
        modalBox.classList.remove('is-wide');
        modalHeading.textContent = 'CLIENT-SIDE ANALYST UTILITY // CTRL+K';
        modalBody.innerHTML = `
            <div class="sec-tabs">
                <button type="button" class="sec-tab active" data-mode="sha256">SHA-256</button>
                <button type="button" class="sec-tab" data-mode="jwt">JWT</button>
                <button type="button" class="sec-tab" data-mode="ioc">IOC Defang</button>
                <button type="button" class="sec-tab" data-mode="b64">Base64 / PS</button>
            </div>
            <textarea class="sec-textarea" id="secInput" placeholder="Enter IOC, artifact text, JWT, or Base64 payload..."></textarea>
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
            } else if (mode === 'jwt') {
                output.textContent = input.value.trim() ? decodeJwt(input.value) : 'Paste a JWT token above to inspect header & claims locally.';
            } else if (mode === 'ioc') {
                output.textContent = transformIoc(input.value);
            } else {
                output.textContent = decodeBase64Smart(input.value);
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

// 11. MITRE ATT&CK Filter, Detection Rule Artifacts, Enhanced Ctrl+K & GitHub Telemetry
(function initDetectionEnhancements() {
    // A. MITRE ATT&CK Tactic Filter Bar above .repo-list
    const repoList = document.querySelector('.repo-list');
    const repoItems = Array.from(document.querySelectorAll('.repo-list .repo-item'));
    const tacticMap = [
        ['all', 'T1003', 'T1059', 'DFIR'],
        ['all', 'T1195', 'Supply Chain'],
        ['all', 'DFIR', 'HA'],
        ['all', 'Supply Chain', 'AppSec']
    ];

    if (repoList && repoItems.length) {
        repoItems.forEach((item, idx) => {
            item.dataset.tactics = (tacticMap[idx] || ['all']).join(',');
        });

        const filterBar = document.createElement('div');
        filterBar.className = 'mitre-filter-bar';
        const filters = [
            { key: 'all', label: 'ALL LABS (04)' },
            { key: 'T1003', label: 'T1003 // CREDENTIAL ACCESS' },
            { key: 'T1059', label: 'T1059 // EXECUTION' },
            { key: 'T1195', label: 'T1195 // SUPPLY CHAIN' },
            { key: 'DFIR', label: 'DFIR & INFRASTRUCTURE' }
        ];

        filters.forEach((f, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'mitre-pill' + (i === 0 ? ' active' : '');
            btn.textContent = f.label;
            btn.addEventListener('click', () => {
                filterBar.querySelectorAll('.mitre-pill').forEach((b) => b.classList.remove('active'));
                btn.classList.add('active');
                repoItems.forEach((item) => {
                    const list = (item.dataset.tactics || '').split(',');
                    item.classList.toggle('is-filtered-out', !list.includes(f.key));
                });
            });
            filterBar.appendChild(btn);
        });

        repoList.parentNode.insertBefore(filterBar, repoList);
    }

    // B. Copyable Detection & CI Artifacts inside Lab 01 & Lab 02
    const artifacts = [
        {
            index: 0,
            label: 'WAZUH CUSTOM RULE + VELOCIRAPTOR VQL // T1003.001 LSASS ACCESS',
            code: `<rule id="100210" level="13">
  <if_sid>61612</if_sid>
  <field name="win.eventdata.targetImage" type="pcre2">\\\\lsass\\.exe$</field>
  <field name="win.eventdata.grantedAccess" type="pcre2">0x1010|0x1410|0x1438</field>
  <description>Sysmon Event 10: Suspicious LSASS Memory Access (MITRE T1003.001)</description>
  <mitre><id>T1003.001</id></mitre>
</rule>

-- Velociraptor VQL Live Triage Hunt
SELECT System.Computer AS Host, EventData.SourceImage AS Process,
       EventData.GrantedAccess AS AccessMask
FROM parse_evtx(filename="C:/Windows/System32/winevt/Logs/Microsoft-Windows-Sysmon%4Operational.evtx")
WHERE System.EventID.Value = 10 AND EventData.TargetImage =~ "lsass.exe"`
        },
        {
            index: 1,
            label: 'GITHUB ACTIONS SECURITY GATE // TRIVY + COSIGN ATTESTATION',
            code: `- name: Scan Container Image for Critical CVEs (Trivy)
  uses: aquasecurity/trivy-action@0.28.0
  with:
    image-ref: \${{ env.IMAGE_DIGEST }}
    severity: CRITICAL,HIGH
    exit-code: '1'

- name: Sign Verified Image Digest (Sigstore Cosign)
  run: cosign sign --yes \${{ env.IMAGE_DIGEST }}`
        }
    ];

    artifacts.forEach((art) => {
        const hostBody = repoItems[art.index]?.querySelector('.repo-body');
        if (!hostBody) return;
        const box = document.createElement('div');
        box.className = 'artifact-box';
        box.innerHTML = `
            <div class="artifact-head">
                <span>${art.label}</span>
                <button type="button" class="artifact-copy">COPY</button>
            </div>
            <pre class="artifact-code"></pre>
        `;
        box.querySelector('.artifact-code').textContent = art.code;
        const copyBtn = box.querySelector('.artifact-copy');
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(art.code).then(() => {
                copyBtn.textContent = 'COPIED';
                setTimeout(() => { copyBtn.textContent = 'COPY'; }, 1600);
            });
        });
        hostBody.appendChild(box);
    });

    // C. Fetch Edge-cached /api/stats for footer telemetry
    const footerBottom = document.querySelector('.footer-bottom .copyright');
    if (footerBottom) {
        fetch('/api/stats')
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (data && typeof data.public_repos === 'number') {
                    const span = document.createElement('span');
                    span.className = 'gh-telemetry';
                    span.textContent = ` · GitHub: ${data.public_repos} public repos`;
                    footerBottom.appendChild(span);
                }
            })
            .catch(() => {});
    }
})();

// 12. Service Worker Registration & Interactive 3-Step SOC Alert Triage Simulator
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

(function initSocTriageSimulator() {
    const repoList = document.querySelector('.repo-list');
    if (!repoList) return;

    const stages = [
        {
            telemetry: `[WAZUH ALERT // RULE 100210 // LEVEL 13]
Host: WIN-WORKSTATION-04 (10.20.14.32)
Event: Sysmon Event ID 10 (ProcessAccess)
SourceImage: C:\\Users\\Public\\svchost_update.exe
TargetImage: C:\\Windows\\System32\\lsass.exe
GrantedAccess: 0x1010 (PROCESS_VM_READ | PROCESS_QUERY_LIMITED_INFORMATION)`,
            question: 'Stage 1 — Initial Triage: What does this telemetry sequence indicate?',
            options: [
                { text: 'A) Routine Windows Defender signature update scanning LSASS', correct: false, note: 'Defender runs from MsMpEng.exe in ProgramData/Program Files, never C:\\Users\\Public\\svchost_update.exe.' },
                { text: 'B) Masqueraded binary attempting LSASS credential memory read (MITRE T1003.001)', correct: true, note: 'Correct. Non-standard path + svchost masquerading + 0x1010 handle to lsass.exe is high-confidence credential dumping.' },
                { text: 'C) Normal RDP session initialization on port 3389', correct: false, note: 'Sysmon Event ID 10 tracks inter-process memory access, not network socket connections.' }
            ]
        },
        {
            telemetry: `[VELOCIRAPTOR VQL LIVE HUNT // WIN-WORKSTATION-04]
Artifact: Windows.System.Pslist / Netstat / Hash
SHA256: 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
ParentProcess: powershell.exe -enc SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQA...
OutboundSocket: 185.220.101.44:443 (ESTABLISHED)`,
            question: 'Stage 2 — Live Endpoint Forensics: Which Velociraptor artifact confirms lateral movement risk before host isolation?',
            options: [
                { text: 'A) Collect Windows.Forensics.Prefetch, Windows.EventLogs.Evtx (4624/4648), and process memory', correct: true, note: 'Correct. Capturing volatile memory, Prefetch execution history, and Logon Type 3/9 events preserves evidence before containment.' },
                { text: 'B) Reboot the endpoint immediately to terminate the malicious process', correct: false, note: 'Rebooting wipes volatile RAM, active C2 sockets, and unpersisted injected payloads.' },
                { text: 'C) Delete C:\\Users\\Public\\svchost_update.exe while the process is still running', correct: false, note: 'Deleting the file on disk leaves the active C2 implant running in memory and destroys binary evidence.' }
            ]
        },
        {
            telemetry: `[CONTAINMENT & HARDENING // INCIDENT IR-2026-04]
Status: Volatile artifacts & triage collection archived to DFIR share.
Scope: Single compromised endpoint; no outbound SMB/WinRM lateral hits observed.`,
            question: 'Stage 3 — Containment & Remediation: What is the proper sequence to close the incident?',
            options: [
                { text: 'A) Block C2 IP only and leave workstation connected for monitoring', correct: false, note: 'Leaving an uncontained host with dumped LSASS credentials risks pass-the-hash lateral movement.' },
                { text: 'B) Quarantine host via Velociraptor/EDR, revoke & rotate exposed session credentials, block C2 IOCs, deploy WDAC/Credential Guard', correct: true, note: 'Complete. Host quarantine stops C2 egress, credential rotation invalidates dumped hashes, and Credential Guard prevents future LSASS reads.' },
                { text: 'C) Format the Wazuh SIEM index to clear the Level 13 alert queue', correct: false, note: 'Clearing SIEM logs destroys audit trails required for root-cause analysis.' }
            ]
        }
    ];

    let step = 0;
    const container = document.createElement('div');
    container.className = 'triage-sim';
    repoList.parentNode.insertBefore(container, repoList.nextSibling);

    function renderStage() {
        const current = stages[step];
        container.innerHTML = `
            <div class="triage-head">
                <div class="triage-badge"><span class="sec-modal-dot"></span>INTERACTIVE LAB // SOC ALERT TRIAGE SIMULATOR</div>
                <span class="triage-step-ind">STAGE 0${step + 1} / 0${stages.length}</span>
            </div>
            <pre class="triage-telemetry"></pre>
            <div class="triage-prompt">${current.question}</div>
            <div class="triage-options"></div>
            <div class="triage-feedback" id="triageFeedback"></div>
            <button type="button" class="triage-next" id="triageNext">${step < stages.length - 1 ? 'NEXT STAGE ->' : 'RESTART SCENARIO'}</button>
        `;

        container.querySelector('.triage-telemetry').textContent = current.telemetry;
        const optWrap = container.querySelector('.triage-options');
        const feedback = container.querySelector('#triageFeedback');
        const nextBtn = container.querySelector('#triageNext');

        current.options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'triage-opt';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => {
                optWrap.querySelectorAll('.triage-opt').forEach((b) => b.classList.remove('is-correct', 'is-wrong'));
                btn.classList.add(opt.correct ? 'is-correct' : 'is-wrong');
                feedback.textContent = opt.note;
                if (opt.correct) {
                    nextBtn.classList.add('visible');
                }
            });
            optWrap.appendChild(btn);
        });

        nextBtn.addEventListener('click', () => {
            step = (step + 1) % stages.length;
            renderStage();
        });
    }

    renderStage();
})();

// 13. Interactive SOC Terminal & Mini-CTF Easter Egg (Backtick ` or Navbar Red Dot)
(function initSocTerminalEasterEgg() {
    const fs = {
        'readme.txt': 'Welcome to achraf-1337 SOC Lab Shell.\nAn anomalous outbound beacon was flagged on host WIN-WORKSTATION-04.\nInspect hidden files in /home/analyst (try: ls -la) and recover the flag.',
        '.auth.log': 'Nov 26 03:14:09 sshd[4821]: Failed password for invalid user admin from 185.220.101.44 port 51922\nNov 26 03:14:15 sshd[4825]: Accepted publickey for analyst from 10.20.14.5 port 49812\nNov 26 03:15:02 auditd[912]: EXECVE cmd="echo RkxBR3sxMzM3X1MwQ19USFJFQVRfSFVOVEVSfQ== | base64 -d"',
        'wazuh_alert.json': '{\n  "rule_id": "100210",\n  "level": 13,\n  "mitre": "T1003.001",\n  "note": "Check .auth.log for the encoded payload left by the operator."\n}'
    };

    const history = [];
    let histIdx = -1;

    function openTerminal() {
        const backdrop = document.querySelector('.sec-modal-backdrop');
        const modalBox = document.getElementById('secModalBox');
        const modalHeading = document.getElementById('secModalHeading');
        const modalBody = document.getElementById('secModalBody');
        if (!backdrop || !modalBox || !modalHeading || !modalBody) return;

        modalBox.classList.remove('is-wide');
        modalHeading.textContent = 'SOC-LAB SHELL // PRESS ` OR ESC TO EXIT';
        modalBody.innerHTML = `
            <div class="soc-term-window">
                <div class="soc-term-output" id="socTermOut"></div>
                <div class="soc-term-input-row">
                    <span class="soc-term-prompt">analyst@achraf-1337:~$</span>
                    <input type="text" class="soc-term-input" id="socTermIn" autocomplete="off" spellcheck="false" placeholder="Type 'help' to begin...">
                </div>
            </div>
        `;
        backdrop.classList.add('is-open');

        const out = document.getElementById('socTermOut');
        const inp = document.getElementById('socTermIn');
        inp.focus();

        function printLine(text, cls = '') {
            const div = document.createElement('div');
            if (cls) div.className = cls;
            div.textContent = text;
            out.appendChild(div);
            out.scrollTop = out.scrollHeight;
        }

        printLine('Achraf Nasser-Eddine // Interactive DFIR & Threat Hunting Shell v1.3.37', 'soc-term-line-accent');
        printLine("Type 'help' for available commands or 'ls -la' to inspect lab artifacts.\n");

        function runCmd(raw) {
            const trimmed = raw.trim();
            if (!trimmed) return;
            history.push(trimmed);
            histIdx = history.length;
            printLine(`analyst@achraf-1337:~$ ${trimmed}`, 'soc-term-line-cmd');

            const [cmd, ...args] = trimmed.split(/\s+/);
            const argStr = args.join(' ');

            switch (cmd.toLowerCase()) {
                case 'help':
                    printLine('Commands: help, whoami, ls, ls -la, cat <file>, base64 -d <str>, nmap, pgp, submit <FLAG{...}>, clear');
                    break;
                case 'whoami':
                    printLine('Achraf Nasser-Eddine — Cybersecurity Engineering Student (EMSI Casablanca)\nFocus: SOC Operations, Threat Hunting, DFIR, DevSecOps & GRC');
                    break;
                case 'ls':
                    if (argStr.includes('-a')) {
                        printLine('drwxr-xr-x  .auth.log   readme.txt   wazuh_alert.json');
                    } else {
                        printLine('readme.txt   wazuh_alert.json');
                    }
                    break;
                case 'cat':
                    if (!argStr) {
                        printLine('Usage: cat <filename>');
                    } else if (fs[argStr]) {
                        printLine(fs[argStr]);
                    } else {
                        printLine(`cat: ${argStr}: No such file or directory`);
                    }
                    break;
                case 'base64':
                    if (args[0] === '-d' && args[1]) {
                        try {
                            printLine(atob(args[1]), 'soc-term-line-ok');
                        } catch {
                            printLine('base64: invalid input');
                        }
                    } else {
                        printLine('Usage: base64 -d <base64_string>');
                    }
                    break;
                case 'nmap':
                    printLine('Starting Nmap 7.95 scan against achraf-1337.vercel.app...\nPORT    STATE SERVICE  VERSION\n443/tcp open  https    Vercel Edge (TLS 1.3 + HSTS Preload + CSP A+)');
                    break;
                case 'pgp':
                    printLine('Key ID: DA9AA69CF510C107 (Ed25519)\nEndpoint: https://achraf-1337.vercel.app/api/pgp');
                    break;
                case 'submit':
                    if (argStr === 'FLAG{1337_S0C_THREAT_HUNTER}') {
                        printLine('[ACCESS GRANTED] Flag verified! You solved the portfolio mini-CTF.\nReady for Summer 2027 SOC / DFIR investigations: achrafnassereddine6@gmail.com', 'soc-term-line-ok');
                    } else {
                        printLine('[DENIED] Invalid flag format or value. Inspect .auth.log and decode the Base64 string.', 'soc-term-line-accent');
                    }
                    break;
                case 'clear':
                    out.innerHTML = '';
                    break;
                default:
                    printLine(`${cmd}: command not found. Type 'help' for supported commands.`);
            }
        }

        inp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                runCmd(inp.value);
                inp.value = '';
            } else if (e.key === 'ArrowUp' && histIdx > 0) {
                histIdx--;
                inp.value = history[histIdx];
            } else if (e.key === 'ArrowDown') {
                if (histIdx < history.length - 1) {
                    histIdx++;
                    inp.value = history[histIdx];
                } else {
                    histIdx = history.length;
                    inp.value = '';
                }
            }
        });
    }

    // Trigger 1: Backtick (`) key anywhere outside form inputs
    document.addEventListener('keydown', (e) => {
        if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
            e.preventDefault();
            const backdrop = document.querySelector('.sec-modal-backdrop');
            if (backdrop?.classList.contains('is-open')) {
                backdrop.classList.remove('is-open');
            } else {
                openTerminal();
            }
        }
    });

    // Trigger 2: Click the pulsing red dot in the navbar brand
    const brandDot = document.querySelector('.nav .brand .dot');
    if (brandDot) {
        brandDot.title = 'Open SOC Shell (`)';
        brandDot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openTerminal();
        });
    }
})();