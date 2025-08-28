import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Button,
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
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion, useInView, useAnimation } from 'framer-motion';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #1a1625 100%)`,
  position: 'relative',
  overflow: 'hidden',
}));

const HeroContent = styled(Container)({
  textAlign: 'center',
  zIndex: 2,
  position: 'relative',
  maxWidth: '800px',
});

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: '0 auto 2rem',
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: `0 20px 40px ${theme.palette.primary.main}30`,
}));

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const SkillCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20, ${theme.palette.secondary?.main || theme.palette.primary.main}10)`,
  border: `1px solid ${theme.palette.primary.main}30`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${theme.palette.primary.main}40`,
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 25px 50px ${theme.palette.primary.main}30`,
    borderColor: theme.palette.primary.main,
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '25px',
  padding: theme.spacing(1.5, 3),
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary?.main || theme.palette.primary.main})`,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary?.dark || theme.palette.primary.dark})`,
    transform: 'scale(1.05)',
  },
}));

// Animated Components
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
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCard = ({ children, index = 0 }: { children: React.ReactNode; index?: number }) => {
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
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

const NakisanzePortfolio: React.FC = () => {
  const skills = {
    languages: ['Java', 'Python', 'PHP', 'C#', 'JavaScript'],
    frameworks: ['Spring Boot', 'Laravel', 'Unity', 'RESTful APIs', 'Git'],
    databases: ['PostgreSQL', 'MySQL', 'Database Design'],
    tools: ['Postman', 'Git Version Control', 'WordPress'],
    other: ['Cybersecurity', 'Data Science & AI', 'System Architecture']
  };

  const projects = [
    {
      title: 'EcoGuardians: Waste Warriors of Uganda',
      description: 'Leading the development of a 3D mobile game in Unity aimed at teaching children sustainable waste practices through gamification. Implementing data persistence using binary serialization for offline gameplay.',
      image: '/images/ECO.jpg',
      technologies: ['C#', 'Unity', 'Binary Serialization', 'Game Development', 'Mobile'],
      period: 'August 2024 - Present',
      type: 'Final Year Project',
      icon: <CodeIcon />
    },
    {
      title: 'YCI BeautyHub Backend System',
      description: 'Developed and maintained comprehensive RESTful APIs using Spring Boot. Designed and implemented efficient database schemas in PostgreSQL. Collaborated extensively with frontend developers.',
      image: '/images/intern.jpg',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Testing'],
      period: 'June 2024 - January 2025',
      type: 'Internship',
      icon: <WorkIcon />
    },
    {
      title: 'Tubayo Fund Platform',
      description: 'Developed the backend infrastructure for a website promoting saving culture among African youth. Focused on secure financial data handling and scalable architecture.',
      image: '/images/Women in ICT.jpeg',
      technologies: ['Backend Development', 'Financial Systems', 'Data Security', 'Scalable Architecture'],
      period: 'May 2023',
      type: 'Development Project',
      icon: <CodeIcon />
    },
    {
      title: 'Recess Development Projects',
      description: 'Completed comprehensive software development projects using Python, Java, and PHP. Gained deep understanding of complex programming challenges.',
      image: '/images/recess.jpg',
      technologies: ['Python', 'Java', 'PHP', 'Full-Stack'],
      period: 'June - August 2023',
      type: 'Multi-Language Development',
      icon: <CodeIcon />
    }
  ];

  const experience = [
    {
      title: 'Spring Boot and PostgreSQL Backend Developer Intern',
      company: 'YCI BeautyHub, YMCA Comprehensive Institute',
      period: 'June 2024 - January 2025',
      icon: <WorkIcon color="primary" />,
      responsibilities: [
        'Developed and maintained RESTful APIs using Spring Boot framework',
        'Designed and implemented comprehensive database schemas in PostgreSQL',
        'Collaborated effectively with frontend developers to integrate backend services',
        'Conducted thorough unit and integration testing to ensure high code quality',
        'Participated in code reviews and implemented best practices for maintainable code',
        'Worked in an Agile environment with cross-functional teams'
      ]
    },
    {
      title: 'Game Developer',
      company: 'Final Year Project, Makerere University',
      period: 'August 2024 - Present',
      icon: <CodeIcon color="primary" />,
      responsibilities: [
        'Leading development of 3D mobile game using Unity and C#',
        'Implementing data persistence and offline gameplay functionality',
        'Designing game progression logic including scoring and reward systems',
        'Creating educational content aligned with sustainable development goals',
        'Managing project timeline and deliverables for academic requirements'
      ]
    },
    {
      title: 'Mobile Money and Agent Banking Manager',
      company: 'Walter Business Center',
      period: '2020 - 2022',
      icon: <WorkIcon color="primary" />,
      responsibilities: [
        'Managed mobile money transactions and agent banking operations',
        'Provided excellent customer service and financial guidance',
        'Handled daily financial reconciliations and reporting',
        'Trained customers on digital financial services'
      ]
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroContent>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ProfileImage src="/images/linkedin.jpeg" alt="Nakisanze Deziranta" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typography variant="h1" gutterBottom>
                Nakisanze Deziranta
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Backend Developer | Software Engineer
              </Typography>
              <Typography variant="h6" sx={{ mb: 4 }}>
                BSc Software Engineering | Available for Immediate Employment
              </Typography>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Chip icon={<EmailIcon />} label="nakisanzedaisy@gmail.com" variant="outlined" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Chip icon={<PhoneIcon />} label="+256 786 191 990" variant="outlined" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Chip icon={<LocationIcon />} label="Kampala, Uganda" variant="outlined" />
                </motion.div>
              </Box>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ContactButton
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:nakisanzedaisy@gmail.com"
                  >
                    Contact Me
                  </ContactButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ContactButton
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    href="tel:+256786191990"
                  >
                    Call Now
                  </ContactButton>
                </motion.div>
              </Box>
            </motion.div>
          </HeroContent>
        </motion.div>
      </HeroSection>

      {/* About Section */}
      <Section>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm a dedicated and versatile software developer with hands-on experience in both backend and game development.
              I specialize in building powerful web applications using Laravel/PHP and creating immersive experiences with C# and Unity.
              I also work with Spring Boot and PostgreSQL to develop robust backend systems that scale.
            </Typography>
            <Typography variant="body1" align="center" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Whether it's crafting responsive user interfaces or building robust APIs, I focus on creating products that are both
              functional and user-centric. I thrive in collaborative environments and love learning new tools and technologies.
              I'm especially driven by projects that solve real problems and create positive impact in communities.
            </Typography>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section sx={{ backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(skills).map(([category, skillList], index) => (
                <Grid item xs={12} sm={6} md={4} key={category}>
                  <AnimatedCard index={index}>
                    <SkillCard>
                      <CardContent>
                        <Typography variant="h5" align="center" gutterBottom sx={{ textTransform: 'capitalize' }}>
                          {category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                          {skillList.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                            >
                              <Chip label={skill} size="small" color="primary" variant="outlined" />
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </SkillCard>
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
            <Typography variant="h2" align="center" gutterBottom>
              Featured Projects
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <AnimatedCard index={index}>
                    <ProjectCard>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {project.icon}
                          <Typography variant="h5" sx={{ ml: 1 }}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2" color="primary" gutterBottom>
                          {project.type} • {project.period}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
                            >
                              <Chip label={tech} size="small" variant="outlined" />
                            </motion.div>
                          ))}
                        </Box>
                      </CardContent>
                    </ProjectCard>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section sx={{ backgroundColor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              Professional Experience
            </Typography>
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              {experience.map((exp, index) => (
                <AnimatedCard key={index} index={index}>
                  <Card
                    sx={{
                      mb: 4,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderRadius: 4,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                      overflow: 'visible',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        borderRadius: '4px 0 0 4px',
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {exp.icon}
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="h6" color="primary" sx={{ fontWeight: 500, mb: 1 }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            {exp.period}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ my: 3 }} />

                      <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', mb: 2 }}>
                        Key Responsibilities:
                      </Typography>

                      <List dense sx={{ pl: 2 }}>
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (index * 0.3) + (idx * 0.1) }}
                          >
                            <ListItem sx={{ px: 0, py: 0.5 }}>
                              <ListItemText
                                primary={resp}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    color: 'text.secondary'
                                  }
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
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
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              Education & Certifications
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimatedCard>
                  <Card sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                        <Box>
                          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Bachelor of Science in Software Engineering
                          </Typography>
                          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 500, mb: 1 }}>
                            Makerere University, College of Computing and Informatics Sciences
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            2022 - 2026 (Graduating January 2026)
                          </Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ my: 3 }} />
                      <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                        Comprehensive study of software development, algorithms design, system architecture, and data structures.
                        Gaining practical experience through various projects and internships with focus on backend development and system design.
                      </Typography>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <AnimatedCard index={1}>
                  <Card sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CodeIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                        <Box>
                          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Professional Development & Training
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                            2023 - 2024
                          </Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ my: 3 }} />
                      <List sx={{ p: 0 }}>
                        {[
                          "UPG Sustainability Leadership Training - Certified UPG Sustainability Leader (2024)",
                          "Cybersecurity Essentials Course - CyberSafe Foundation (2023-2024)",
                          "Code Queen BootCamp - Web Development (HTML, CSS, JavaScript) (2023)",
                          "Women in ICT Bootcamp - 3D Animation, Data Science & AI, Robotics (2025)",
                          "Peer Training - Gender Mainstreaming Directorate, Makerere University"
                        ].map((cert, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <ListItem sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                              <ListItemText
                                primary={`• ${cert}`}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    color: 'text.secondary'
                                  }
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Languages & Personal Attributes */}
      <Section sx={{ backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              Languages & Personal Attributes
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <AnimatedCard>
                  <Card sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                        🌐 Languages
                      </Typography>
                      <List sx={{ p: 0 }}>
                        <ListItem divider sx={{ px: 0 }}>
                          <ListItemText
                            primary="English"
                            secondary="Excellent (Spoken & Written)"
                            primaryTypographyProps={{ fontWeight: 500 }}
                            secondaryTypographyProps={{ color: 'text.secondary' }}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemText
                            primary="Luganda"
                            secondary="Good (Spoken), Fair (Written)"
                            primaryTypographyProps={{ fontWeight: 500 }}
                            secondaryTypographyProps={{ color: 'text.secondary' }}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimatedCard index={1}>
                  <Card sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                        ✨ Personal Attributes
                      </Typography>
                      <List sx={{ p: 0 }}>
                        {[
                          "Highly proactive and self-motivated",
                          "Excellent communication and interpersonal abilities",
                          "Quick learner, adaptable to fast-paced environments",
                          "Strong work ethic and customer service commitment",
                          "Methodical, detail-oriented approach",
                          "Team player with leadership qualities"
                        ].map((attribute, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                          >
                            <ListItem sx={{ px: 0, py: 0.5, alignItems: 'flex-start' }}>
                              <ListItemText
                                primary={`• ${attribute}`}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    color: 'text.secondary'
                                  }
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', py: 10 }}>
        <Container maxWidth="md">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h2" align="center" gutterBottom sx={{ color: 'white', mb: 4 }}>
                🚀 Ready to Contribute to Your Team
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography variant="h5" align="center" sx={{ mb: 6, lineHeight: 1.6 }}>
                I'm excited about opportunities to apply my backend development skills and contribute to innovative projects.
                With my Spring Boot, PostgreSQL, Laravel, and MySQL experience and passion for building scalable systems,
                I'm ready to make an immediate impact!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ContactButton
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:nakisanzedaisy@gmail.com"
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                      },
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3
                    }}
                  >
                    Contact Me
                  </ContactButton>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ContactButton
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    href="tel:+256786191990"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: '#f5f5f5',
                        color: '#f5f5f5',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(255,255,255,0.1)'
                      },
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3
                    }}
                  >
                    Call Now
                  </ContactButton>
                </motion.div>
              </Box>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Typography variant="body2" align="center" sx={{ mt: 6, opacity: 0.8 }}>
                © 2024 Nakisanze Deziranta. Built with React, TypeScript & Material-UI.
              </Typography>
            </motion.div>
          </AnimatedSection>
        </Container>
      </Section>
    </Box>
  );
};

export default NakisanzePortfolio;
