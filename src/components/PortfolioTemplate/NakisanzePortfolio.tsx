import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  CardContent,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { colors } from '../../theme/theme';

// ===== KEYFRAME ANIMATIONS =====
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 107, 74, 0.4);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 50px rgba(255, 107, 74, 0.6), 0 0 80px rgba(245, 158, 11, 0.3);
    transform: scale(1.02);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

// ===== FLOATING BACKGROUND ORBS =====
const FloatingOrb = styled(Box)<{ delay?: number; size?: number; color?: string }>(
  ({ delay = 0, size = 300, color = colors.coral }) => ({
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
    filter: 'blur(40px)',
    animation: `${float} 8s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    pointerEvents: 'none',
  })
);

// ===== HERO SECTION =====
const HeroSection = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgMedium} 50%, ${colors.bgDark} 100%)`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '150%',
    height: '60%',
    background: `radial-gradient(ellipse, ${colors.coral}08 0%, transparent 50%)`,
    pointerEvents: 'none',
  },
});

const HeroContent = styled(Container)({
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  maxWidth: '900px !important',
});

// ===== PROFILE IMAGE =====
const ProfileImageWrapper = styled(Box)({
  position: 'relative',
  width: 220,
  height: 220,
  margin: '0 auto 2.5rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -4,
    borderRadius: '50%',
    background: colors.gradientPrimary,
    backgroundSize: '200% 200%',
    animation: `${gradientShift} 4s ease infinite`,
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: -20,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.coral}30 0%, transparent 70%)`,
    animation: `${pulseGlow} 3s ease-in-out infinite`,
    zIndex: -1,
  },
});

const ProfileImage = styled(Avatar)({
  width: '100%',
  height: '100%',
  border: `4px solid ${colors.bgDark}`,
  position: 'relative',
  zIndex: 1,
});

// ===== EXPRESSIVE BUTTON =====
const ExpressiveButton = styled(motion.button)<{ variant?: 'primary' | 'secondary' | 'outline' }>(
  ({ variant = 'primary' }) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: 600,
    fontFamily: '"Outfit", sans-serif',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    
    ...(variant === 'primary' && {
      background: colors.gradientWarm,
      backgroundSize: '200% 200%',
      color: '#FFFFFF',
      boxShadow: `0 8px 32px ${colors.coral}40`,
      '&:hover': {
        boxShadow: `0 12px 48px ${colors.coral}60`,
        animation: `${gradientShift} 2s ease infinite`,
      },
      '&:active': {
        transform: 'scale(0.96)',
        boxShadow: `0 4px 20px ${colors.coral}50`,
      },
    }),
    
    ...(variant === 'secondary' && {
      background: colors.gradientCool,
      backgroundSize: '200% 200%',
      color: '#FFFFFF',
      boxShadow: `0 8px 32px ${colors.teal}30`,
      '&:hover': {
        boxShadow: `0 12px 48px ${colors.teal}50`,
        animation: `${gradientShift} 2s ease infinite`,
      },
      '&:active': {
        transform: 'scale(0.96)',
        boxShadow: `0 4px 20px ${colors.teal}40`,
      },
    }),
    
    ...(variant === 'outline' && {
      background: 'transparent',
      color: colors.textPrimary,
      border: `2px solid ${colors.coral}60`,
      boxShadow: 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        background: colors.gradientWarm,
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: -1,
      },
      '&:hover': {
        borderColor: 'transparent',
        boxShadow: `0 8px 32px ${colors.coral}30`,
        '&::before': {
          opacity: 1,
        },
      },
      '&:active': {
        transform: 'scale(0.96)',
      },
    }),
    
    '& .ripple': {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.4)',
      transform: 'scale(0)',
      animation: 'ripple 0.6s ease-out',
      pointerEvents: 'none',
    },
    
    '@keyframes ripple': {
      '100%': {
        transform: 'scale(4)',
        opacity: 0,
      },
    },
    
    '& .shimmer': {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      transition: 'left 0.5s ease',
    },
    
    '&:hover .shimmer': {
      animation: `${shimmer} 0.8s ease`,
    },
  })
);

// ===== CONTACT CHIP =====
const ContactChip = styled(motion.div)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  background: `${colors.bgLight}90`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${colors.coral}20`,
  borderRadius: '50px',
  color: colors.textSecondary,
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    background: `${colors.bgLight}`,
    borderColor: `${colors.coral}40`,
    color: colors.textPrimary,
    transform: 'translateY(-2px)',
  },
  '& svg': {
    color: colors.coral,
    fontSize: '1.1rem',
  },
});

// ===== SECTION STYLING =====
interface SectionProps {
  alternate?: boolean;
}
const Section = styled(Box)<SectionProps>(({ alternate }: SectionProps) => ({
  padding: '120px 0',
  position: 'relative',
  background: alternate ? colors.bgMedium : colors.bgDark,
  overflow: 'hidden',
}));

const SectionTitle = styled(Typography)({
  textAlign: 'center',
  marginBottom: '60px',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: '80px',
    height: '4px',
    background: colors.gradientWarm,
    borderRadius: '2px',
    margin: '20px auto 0',
  },
});

// ===== GLASS CARD =====
const GlassCard = styled(motion.div)<{ glowColor?: string }>(({ glowColor = colors.coral }) => ({
  background: `${colors.bgCard}`,
  backdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.06)`,
  borderRadius: '24px',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    border: `1px solid ${glowColor}30`,
    boxShadow: `0 25px 60px ${glowColor}15, 0 0 40px ${glowColor}10`,
    transform: 'translateY(-8px)',
  },
}));

// ===== SKILL BADGE =====
type ColorScheme = 'coral' | 'teal' | 'amber';
interface SkillBadgeProps {
  colorScheme?: ColorScheme;
}
const SkillBadge = styled(motion.span)<SkillBadgeProps>(
  ({ colorScheme = 'coral' }: SkillBadgeProps) => {
    const colorMap: Record<ColorScheme, { bg: string; shadow: string }> = {
      coral: { bg: colors.coral, shadow: colors.coral },
      teal: { bg: colors.teal, shadow: colors.teal },
      amber: { bg: colors.amber, shadow: colors.amber },
    };
    const { bg, shadow } = colorMap[colorScheme];
    
    return {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      background: `${bg}15`,
      border: `1px solid ${bg}30`,
      borderRadius: '8px',
      color: bg,
      fontSize: '0.85rem',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      cursor: 'default',
      '&:hover': {
        background: `${bg}25`,
        boxShadow: `0 4px 20px ${shadow}30`,
        transform: 'translateY(-2px)',
      },
    };
  }
);

// ===== PROJECT CARD =====
const ProjectCardWrapper = styled(GlassCard)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

// ===== EXPERIENCE CARD =====
const ExperienceCard = styled(GlassCard)({
  position: 'relative',
  marginBottom: '32px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    background: colors.gradientWarm,
    borderRadius: '4px 0 0 4px',
  },
});

// ===== ANIMATED COMPONENTS =====
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ===== BUTTON WITH RIPPLE EFFECT =====
interface RippleButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, variant = 'primary', href, onClick, icon }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples([...ripples, { x, y, id }]);
    setIsPressed(true);
    
    setTimeout(() => {
      setRipples((prev: Ripple[]) => prev.filter((r: Ripple) => r.id !== id));
    }, 600);
    
    setTimeout(() => setIsPressed(false), 150);
    
    if (href) {
      window.open(href, href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank');
    }
    onClick?.();
  };
  
  return (
    <ExpressiveButton
      variant={variant}
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={isPressed ? { scale: 0.97 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <span className="shimmer" />
      {icon}
      {children}
      <AnimatePresence>
        {ripples.map(({ x, y, id }) => (
          <motion.span
            key={id}
            className="ripple"
            initial={{ scale: 0, opacity: 0.6, x: x - 10, y: y - 10 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              width: 20,
              height: 20,
              left: x - 10,
              top: y - 10,
            }}
          />
        ))}
      </AnimatePresence>
    </ExpressiveButton>
  );
};

// ===== MAIN COMPONENT =====
const NakisanzePortfolio: React.FC = () => {
  const skills: Record<string, { items: string[]; color: ColorScheme }> = {
    languages: { items: ['Java', 'Python', 'PHP', 'C#', 'JavaScript'], color: 'coral' },
    frameworks: { items: ['Spring Boot', 'Laravel', 'Unity', 'RESTful APIs', 'Git'], color: 'teal' },
    databases: { items: ['PostgreSQL', 'MySQL', 'Database Design'], color: 'amber' },
    tools: { items: ['Postman', 'Git Version Control', 'WordPress'], color: 'coral' },
    other: { items: ['Cybersecurity', 'Data Science & AI', 'System Architecture'], color: 'teal' },
  };

  const projects = [
    {
      title: 'EcoGuardians: Waste Warriors of Uganda',
      description: 'Leading the development of a 3D mobile game in Unity aimed at teaching children sustainable waste practices through gamification. Implementing data persistence using binary serialization for offline gameplay.',
      image: '/images/ECO.jpg',
      technologies: ['C#', 'Unity', 'Binary Serialization', 'Game Development', 'Mobile'],
      period: 'August 2024 - Present',
      type: 'Final Year Project',
      icon: <CodeIcon sx={{ color: colors.teal }} />,
    },
    {
      title: 'YCI BeautyHub Backend System',
      description: 'Developed and maintained comprehensive RESTful APIs using Spring Boot. Designed and implemented efficient database schemas in PostgreSQL. Collaborated extensively with frontend developers.',
      image: '/images/intern.jpg',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Testing'],
      period: 'June 2024 - January 2025',
      type: 'Internship',
      icon: <WorkIcon sx={{ color: colors.coral }} />,
    },
    {
      title: 'Tubayo Fund Platform',
      description: 'Developed the backend infrastructure for a website promoting saving culture among African youth. Focused on secure financial data handling and scalable architecture.',
      image: '/images/Women in ICT.jpeg',
      technologies: ['Backend Development', 'Financial Systems', 'Data Security', 'Scalable Architecture'],
      period: 'May 2023',
      type: 'Development Project',
      icon: <CodeIcon sx={{ color: colors.amber }} />,
    },
    {
      title: 'Recess Development Projects',
      description: 'Completed comprehensive software development projects using Python, Java, and PHP. Gained deep understanding of complex programming challenges.',
      image: '/images/recess.jpg',
      technologies: ['Python', 'Java', 'PHP', 'Full-Stack'],
      period: 'June - August 2023',
      type: 'Multi-Language Development',
      icon: <CodeIcon sx={{ color: colors.teal }} />,
    },
  ];

  const experience = [
    {
      title: 'Spring Boot and PostgreSQL Backend Developer Intern',
      company: 'YCI BeautyHub, YMCA Comprehensive Institute',
      period: 'June 2024 - January 2025',
      icon: <WorkIcon sx={{ color: colors.coral, fontSize: 32 }} />,
      responsibilities: [
        'Developed and maintained RESTful APIs using Spring Boot framework',
        'Designed and implemented comprehensive database schemas in PostgreSQL',
        'Collaborated effectively with frontend developers to integrate backend services',
        'Conducted thorough unit and integration testing to ensure high code quality',
        'Participated in code reviews and implemented best practices for maintainable code',
        'Worked in an Agile environment with cross-functional teams',
      ],
    },
    {
      title: 'Game Developer',
      company: 'Final Year Project, Makerere University',
      period: 'August 2024 - Present',
      icon: <CodeIcon sx={{ color: colors.teal, fontSize: 32 }} />,
      responsibilities: [
        'Leading development of 3D mobile game using Unity and C#',
        'Implementing data persistence and offline gameplay functionality',
        'Designing game progression logic including scoring and reward systems',
        'Creating educational content aligned with sustainable development goals',
        'Managing project timeline and deliverables for academic requirements',
      ],
    },
    {
      title: 'Mobile Money and Agent Banking Manager',
      company: 'Walter Business Center',
      period: '2020 - 2022',
      icon: <WorkIcon sx={{ color: colors.amber, fontSize: 32 }} />,
      responsibilities: [
        'Managed mobile money transactions and agent banking operations',
        'Provided excellent customer service and financial guidance',
        'Handled daily financial reconciliations and reporting',
        'Trained customers on digital financial services',
      ],
    },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <HeroSection>
        {/* Floating Orbs Background */}
        <FloatingOrb sx={{ top: '10%', left: '10%' }} delay={0} size={400} color={colors.coral} />
        <FloatingOrb sx={{ top: '60%', right: '5%' }} delay={2} size={300} color={colors.teal} />
        <FloatingOrb sx={{ bottom: '10%', left: '20%' }} delay={4} size={350} color={colors.amber} />
        <FloatingOrb sx={{ top: '30%', right: '20%' }} delay={1} size={250} color={colors.coral} />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <HeroContent>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <ProfileImageWrapper>
                <ProfileImage src="/images/linkedin.jpeg" alt="Nakisanze Deziranta" />
              </ProfileImageWrapper>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Typography variant="h1" gutterBottom>
                Nakisanze Deziranta
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 1,
                  color: colors.textSecondary,
                }}
              >
                Backend Developer • Software Engineer
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: colors.textMuted,
                  fontWeight: 400,
                }}
              >
                BSc Software Engineering | Available for Immediate Employment
              </Typography>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 5, flexWrap: 'wrap' }}>
                <ContactChip whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <EmailIcon /> nakisanzedaisy@gmail.com
                </ContactChip>
                <ContactChip whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <PhoneIcon /> +256 786 191 990
                </ContactChip>
                <ContactChip whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <LocationIcon /> Kampala, Uganda
                </ContactChip>
              </Box>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <RippleButton variant="primary" href="mailto:nakisanzedaisy@gmail.com" icon={<EmailIcon />}>
                  Contact Me
                </RippleButton>
                <RippleButton variant="outline" href="tel:+256786191990" icon={<PhoneIcon />}>
                  Call Now
                </RippleButton>
              </Box>
            </motion.div>
          </HeroContent>
        </motion.div>
      </HeroSection>

      {/* About Section */}
      <Section>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">About Me</SectionTitle>
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.15rem', lineHeight: 1.8 }}>
                I'm a dedicated and versatile software developer with hands-on experience in both backend and game development.
                I specialize in building powerful web applications using <Box component="span" sx={{ color: colors.coral, fontWeight: 600 }}>Laravel/PHP</Box> and creating immersive experiences with <Box component="span" sx={{ color: colors.teal, fontWeight: 600 }}>C# and Unity</Box>.
                I also work with <Box component="span" sx={{ color: colors.amber, fontWeight: 600 }}>Spring Boot and PostgreSQL</Box> to develop robust backend systems that scale.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Whether it's crafting responsive user interfaces or building robust APIs, I focus on creating products that are both
                functional and user-centric. I thrive in collaborative environments and love learning new tools and technologies.
                I'm especially driven by projects that solve real problems and create positive impact in communities.
              </Typography>
            </Box>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section alternate>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">Technical Skills</SectionTitle>
            <Grid container spacing={4}>
              {Object.entries(skills).map(([category, { items, color }], index) => (
                <Grid item xs={12} sm={6} md={4} key={category}>
                  <AnimatedCard index={index}>
                    <GlassCard
                      glowColor={color === 'coral' ? colors.coral : color === 'teal' ? colors.teal : colors.amber}
                      style={{ padding: '32px', height: '100%' }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          textAlign: 'center',
                          mb: 3,
                          textTransform: 'capitalize',
                          background: color === 'coral' ? colors.gradientWarm : color === 'teal' ? colors.gradientCool : colors.gradientWarm,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {category}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {items.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          >
                            <SkillBadge colorScheme={color}>{skill}</SkillBadge>
                          </motion.div>
                        ))}
                      </Box>
                    </GlassCard>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">Featured Projects</SectionTitle>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <AnimatedCard index={index}>
                    <ProjectCardWrapper>
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(180deg, transparent 50%, ${colors.bgDark}ee 100%)`,
                          },
                        }}
                      />
                      <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {project.icon}
                          <Typography variant="h5" sx={{ ml: 1.5, fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                          <Chip 
                            label={project.type} 
                            size="small" 
                            sx={{ 
                              background: `${colors.coral}20`, 
                              color: colors.coral,
                              fontWeight: 500,
                            }} 
                          />
                          <Chip 
                            label={project.period} 
                            size="small" 
                            sx={{ 
                              background: `${colors.teal}20`, 
                              color: colors.teal,
                              fontWeight: 500,
                            }} 
                          />
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3, flex: 1, color: colors.textSecondary }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                            >
                              <Chip
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                  borderColor: `${colors.textMuted}40`,
                                  color: colors.textSecondary,
                                  fontSize: '0.75rem',
                                  '&:hover': {
                                    borderColor: colors.coral,
                                    color: colors.coral,
                                  },
                                }}
                              />
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </ProjectCardWrapper>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section alternate>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">Professional Experience</SectionTitle>
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              {experience.map((exp, index) => (
                <AnimatedCard key={index} index={index}>
                  <ExperienceCard style={{ padding: '32px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: `${colors.bgLight}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {exp.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                          {exp.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: colors.coral,
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textMuted }}>
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 3, borderColor: `${colors.textMuted}20` }} />

                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: colors.textMuted,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      Key Responsibilities
                    </Typography>

                    <List sx={{ p: 0 }}>
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.08) }}
                        >
                          <ListItem sx={{ px: 0, py: 0.75, alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: colors.gradientWarm,
                                mt: 1,
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            <ListItemText
                              primary={resp}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.95rem',
                                  lineHeight: 1.6,
                                  color: colors.textSecondary,
                                },
                              }}
                            />
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </ExperienceCard>
                </AnimatedCard>
              ))}
            </Box>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Education Section */}
      <Section>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">Education & Certifications</SectionTitle>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimatedCard>
                  <GlassCard glowColor={colors.coral} style={{ padding: '32px', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: `${colors.coral}15`,
                          mr: 2,
                        }}
                      >
                        <SchoolIcon sx={{ color: colors.coral, fontSize: 32 }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Bachelor of Science in Software Engineering
                        </Typography>
                        <Typography variant="body1" sx={{ color: colors.coral, fontWeight: 500 }}>
                          Makerere University
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textMuted }}>
                          2022 - 2026 (Graduating January 2026)
                        </Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ my: 3, borderColor: `${colors.textMuted}20` }} />
                    <Typography variant="body1" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                      Comprehensive study of software development, algorithms design, system architecture, and data structures.
                      Gaining practical experience through various projects and internships with focus on backend development and system design.
                    </Typography>
                  </GlassCard>
                </AnimatedCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <AnimatedCard index={1}>
                  <GlassCard glowColor={colors.teal} style={{ padding: '32px', height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: '12px',
                          background: `${colors.teal}15`,
                          mr: 2,
                        }}
                      >
                        <CodeIcon sx={{ color: colors.teal, fontSize: 32 }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Professional Development & Training
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.textMuted }}>
                          2023 - 2025
                        </Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ my: 3, borderColor: `${colors.textMuted}20` }} />
                    <List sx={{ p: 0 }}>
                      {[
                        'UPG Sustainability Leadership Training - Certified UPG Sustainability Leader (2024)',
                        'Cybersecurity Essentials Course - CyberSafe Foundation (2023-2024)',
                        'Code Queen BootCamp - Web Development (HTML, CSS, JavaScript) (2023)',
                        'Women in ICT Bootcamp - 3D Animation, Data Science & AI, Robotics (2025)',
                        'Peer Training - Gender Mainstreaming Directorate, Makerere University',
                      ].map((cert, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                        >
                          <ListItem sx={{ px: 0, py: 0.75, alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: colors.gradientCool,
                                mt: 1,
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            <ListItemText
                              primary={cert}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.9rem',
                                  lineHeight: 1.6,
                                  color: colors.textSecondary,
                                },
                              }}
                            />
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </GlassCard>
                </AnimatedCard>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Languages & Personal Attributes */}
      <Section alternate>
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle variant="h2">Languages & Personal Attributes</SectionTitle>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimatedCard>
                  <GlassCard glowColor={colors.amber} style={{ padding: '32px', height: '100%' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>🌐</span> Languages
                    </Typography>
                    <List sx={{ p: 0 }}>
                      <ListItem divider sx={{ px: 0, py: 2, borderColor: `${colors.textMuted}20` }}>
                        <ListItemText
                          primary="English"
                          secondary="Excellent (Spoken & Written)"
                          primaryTypographyProps={{ fontWeight: 600, color: colors.textPrimary }}
                          secondaryTypographyProps={{ color: colors.textSecondary }}
                        />
                      </ListItem>
                      <ListItem sx={{ px: 0, py: 2 }}>
                        <ListItemText
                          primary="Luganda"
                          secondary="Good (Spoken), Fair (Written)"
                          primaryTypographyProps={{ fontWeight: 600, color: colors.textPrimary }}
                          secondaryTypographyProps={{ color: colors.textSecondary }}
                        />
                      </ListItem>
                    </List>
                  </GlassCard>
                </AnimatedCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimatedCard index={1}>
                  <GlassCard glowColor={colors.coral} style={{ padding: '32px', height: '100%' }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>✨</span> Personal Attributes
                    </Typography>
                    <List sx={{ p: 0 }}>
                      {[
                        'Highly proactive and self-motivated',
                        'Excellent communication and interpersonal abilities',
                        'Quick learner, adaptable to fast-paced environments',
                        'Strong work ethic and customer service commitment',
                        'Methodical, detail-oriented approach',
                        'Team player with leadership qualities',
                      ].map((attribute, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.08 }}
                        >
                          <ListItem sx={{ px: 0, py: 0.75, alignItems: 'flex-start' }}>
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: colors.gradientWarm,
                                mt: 1,
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            <ListItemText
                              primary={attribute}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.95rem',
                                  lineHeight: 1.6,
                                  color: colors.textSecondary,
                                },
                              }}
                            />
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </GlassCard>
                </AnimatedCard>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section
        sx={{
          background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgMedium} 100%)`,
          position: 'relative',
          py: 15,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 30% 50%, ${colors.coral}15 0%, transparent 50%),
                         radial-gradient(circle at 70% 50%, ${colors.teal}15 0%, transparent 50%)`,
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md">
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    background: colors.gradientPrimary,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ready to Contribute to Your Team 🚀
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 6,
                    lineHeight: 1.8,
                    color: colors.textSecondary,
                    maxWidth: '700px',
                    mx: 'auto',
                  }}
                >
                  I'm excited about opportunities to apply my backend development skills and contribute to innovative projects.
                  With my Spring Boot, PostgreSQL, Laravel, and MySQL experience and passion for building scalable systems,
                  I'm ready to make an immediate impact!
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <RippleButton variant="primary" href="mailto:nakisanzedaisy@gmail.com" icon={<EmailIcon />}>
                    Get In Touch
                  </RippleButton>
                  <RippleButton variant="secondary" href="tel:+256786191990" icon={<PhoneIcon />}>
                    Call Now
                  </RippleButton>
                </Box>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <motion.a
                    href="https://github.com/nakisanzedaisy"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: `${colors.bgLight}`,
                      border: `1px solid ${colors.textMuted}30`,
                      color: colors.textSecondary,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHubIcon />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/nakisanze-deziranta"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: `${colors.bgLight}`,
                      border: `1px solid ${colors.textMuted}30`,
                      color: colors.textSecondary,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <LinkedInIcon />
                  </motion.a>
                </Box>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Typography variant="body2" sx={{ mt: 8, color: colors.textMuted }}>
                  © 2024 Nakisanze Deziranta. Crafted with React, TypeScript & Material-UI.
                </Typography>
              </motion.div>
            </Box>
          </AnimatedSection>
        </Container>
      </Section>
    </Box>
  );
};

export default NakisanzePortfolio;
